/**
 *
 * @param strVal: pre-sanitized string containing a single css value '10' | '10px' | '10px' ...
 * @param maxVal: in case the value contains a percentage and we have a maxVal, we calculate a px value relative to maxVal
 * @returns {number} Pixel value
 */
const normalizeCssValue = (strVal, maxVal = null) => {
    // If non-numeric value return the string:
    if (isNaN(parseInt(strVal.slice(0, 1))) && strVal.slice(0, 1) !== '-') {
        return strVal;
    }

    if (`${parseFloat(strVal)}` === strVal) {
        return parseFloat(strVal);
    }
    if (strVal.slice(-1) === '%' && maxVal !== null) {
        const percentage = parseFloat(strVal.slice(0, -1)) / 100;

        // percentage, relative to maxVal
        return percentage * maxVal;

    }
    return typeof parseFloat(strVal) === 'number' ? parseFloat(strVal) : null;
}

/**
 *
 * @param props: full props object from WorkletAPI
 * @param propName: css property name as in '--customfoo-variable-baz'
 * @returns {{varName: *, value: *}} where value is property value as sanitized string '0px 200%' and varName
 *                                      is a camelcased version of the property name 'variableBaz'
 */
const extractProp = (props, propName) => {
    const snaked = propName.replace('--scfborder-', '');
    const cameled = snaked.split('-').map((v, i) => i > 0 ? `${v.charAt(0).toUpperCase()}${v.slice(1)}` : v).join('');

    const fullValue = props.get(propName).toString().trim();
    return {
        varName: cameled,
        value: fullValue
    }
}


class ScfBorder {

    static doubleValuedProps = [
        '--scfborder-top-left',
        '--scfborder-top-right',
        '--scfborder-bottom-right',
        '--scfborder-bottom-left',
        '--scfborder-pattern-shift'
    ];

    static singleValuedProps = [
        '--scfborder-width',
        '--scfborder-border-color',
        '--scfborder-shadow-color',
        '--scfborder-pattern-size',
        '--scfborder-pattern-color',
        '--scfborder-top-dent',
        '--scfborder-top-dent-length',
    ];

    static get inputProperties() {
        return [
            ...ScfBorder.singleValuedProps,
            ...ScfBorder.doubleValuedProps
        ];
    }

    static propDefaults = {
        topLeft: {v: 0, h: 0},
        topRight: {v: 0, h: 0},
        bottomRight: {v: 0, h: 0},
        bottomLeft: {v: 0, h: 0},
        patternShift: {v: 0, h: 0},

        width: 0,
        patternSize: 20,
        borderColor: '#00f',
        shadowColor: '#00f',
        patternColor: '#00f',
        topDent: 0,
        topDentLength: 0,
    }

    parseProps(ctx, size, props) {
        // All this can go away once Firefox starts supporting CSS Typed OM :/
        const {width: canvasWidth, height: canvasHeight} = size;

        const singleVals = ScfBorder.singleValuedProps.reduce((acc, propName) => {
            const {varName, value} = extractProp(props, propName);
            // @TODO  figure out a way to be %-relative to height/width respectively
            return {...acc, [varName]: normalizeCssValue(value, canvasWidth) || ScfBorder.propDefaults[varName]}
        }, {});


        const doubleVals = ScfBorder.doubleValuedProps.reduce((acc, propName) => {
            const {varName, value} = extractProp(props, propName);

            if (value.length === 0) {
                return {
                    ...acc,
                    [varName]: ScfBorder.propDefaults[varName]
                }
            }

            if (value.split(' ').length === 1) {
                return {
                    ...acc,
                    [varName]: {v: normalizeCssValue(value, canvasHeight), h: normalizeCssValue(value, canvasWidth)}
                }
            }

            if (value.split(' ').length === 2) {
                const [v, h] = value.split(' ');
                return {
                    ...acc,
                    [varName]: {v: normalizeCssValue(v, canvasHeight), h: normalizeCssValue(h, canvasWidth)}
                }
            }

            return acc;
        }, {});

        return {...doubleVals, ...singleVals};

    }

    drawHexaGrid(ctx, size, {size: hexagonSize}) {
        const ang = Math.sin(120);
        const amount = Math.floor(size.height / hexagonSize);


        [...Array(amount).keys()].map((factor) => {
            this.drawHexagonLine(ctx, size, {size: hexagonSize, dx: 0, dy: factor * 3 * ang * hexagonSize});
        });
    }

    drawHexagonLine(ctx, size, {size: hexagonSize, dx = 0, dy = 0}) {
        const ang = Math.sin(120);

        const amount = Math.floor(size.width / hexagonSize);

        const startPoints = [...Array(amount).keys()].map((factor) => {
            const x = (hexagonSize + (hexagonSize * ang));
            return {x: factor * x + dx, y: factor % 2 ? dy : dy + (1.5 * hexagonSize * ang)}
        });

        startPoints.map((start) => {
            this.drawHexagon(ctx, {size: hexagonSize, start});
        });
    }

    drawHexagon(ctx, {size, start}) {
        const ang = Math.sin(120);
        ctx.moveTo(start.x, start.y);
        const hexaLines = [
            {x: size, y: 0},
            {x: size + (size * ang), y: 1.5 * size * ang},
            {x: size, y: 3 * size * ang},
            {x: 0, y: 3 * size * ang},
            {x: -1 * size * ang, y: 1.5 * size * ang},
        ]

        hexaLines.map((line) => {
            ctx.lineTo(line.x + start.x, line.y + start.y);
        });
        ctx.closePath();
    }

    borderPath(size, {topLeft, topRight, bottomRight, bottomLeft, topDent, topDentLength}) {
        const {width: canvasWidth, height: canvasHeight} = size;
        const borderPath = new Path2D();


        // Offset Top/Bot/Left/Rigtht effectively decreases canvasSize by the amount that the corner is "outside" the "box"
        const insetTop = (Math.min(topLeft.v, topRight.v) < 0) ? Math.abs(Math.min(topLeft.v, topRight.v)) : 0;
        const insetBot = (Math.min(bottomLeft.v, bottomRight.v) < 0) ? Math.abs(Math.min(bottomLeft.v, bottomRight.v)) : 0;
        const insetRight = (Math.min(topRight.h, bottomRight.h) < 0) ? Math.abs(Math.min(topRight.h, bottomRight.h)) : 0;
        const insetLeft = (Math.min(topLeft.h, bottomLeft.h) < 0) ? Math.abs(Math.min(topLeft.h, bottomLeft.h)) : 0;

        // Top Left

        borderPath.moveTo(insetLeft, insetTop + topLeft.v);
        !(topLeft.h === 0 && topLeft.v === 0) && borderPath.lineTo(topLeft.h + insetLeft, insetTop);


        // Top Dent
        const straight = canvasWidth - topLeft.h - topRight.h;
        const half = (straight - topDentLength) / 2
        borderPath.lineTo(topLeft.h + half, insetTop);
        borderPath.lineTo(topLeft.h + half + topDent, insetTop + topDent);
        borderPath.lineTo(topLeft.h + half + topDentLength + topDent, insetTop + topDent);
        borderPath.lineTo(topLeft.h + half + topDentLength + topDent + topDent, insetTop);

        // Top Right
        borderPath.lineTo(canvasWidth - topRight.h - insetRight, insetTop);
        !(topRight.h === 0 && topRight.v === 0) && borderPath.lineTo(canvasWidth - insetRight, topRight.v + insetTop);

        // Bottom Right
        borderPath.lineTo(canvasWidth - insetRight, canvasHeight - bottomRight.v - insetBot);
        !(bottomRight.h === 0 && bottomRight.v === 0) && borderPath.lineTo(canvasWidth - bottomRight.h - insetRight, canvasHeight - insetBot);

        // bottom Left
        borderPath.lineTo(bottomLeft.h + insetLeft, canvasHeight - insetBot);
        !(bottomLeft.h === 0 && bottomLeft.v === 0) && borderPath.lineTo(insetLeft, canvasHeight - bottomLeft.v - insetBot)

        borderPath.closePath();
        return borderPath;
    }

    paint(ctx, size, props) {
        const pp = this.parseProps(ctx, size, props);
        const {
            patternShift,
            width: borderWidth,
            borderColor,
            patternSize,
            shadowColor,
            patternColor
        } = pp;


        // prepare outline
        const borderPath = this.borderPath(size, {...pp});

        // Prepare clipping outline, that removes patterns & shadows that leak "outside" of the border
        const clipBorderPath = this.borderPath(size, {...pp});


        ctx.clip(clipBorderPath); // clip = define the "inside" to be the only place to be drawn on
        ctx.lineJoin = 'bevel'; // Slight smoothing of corners
        ctx.lineWidth = borderWidth * 2; // Double, because 1/2 gets clipped
        ctx.strokeStyle = borderColor;

        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = 30;
        ctx.stroke(borderPath); // Draw border


        ctx.save();
        ctx.globalCompositeOperation = 'destination-over'; // draw "behind" the border

        // Gradient to draw the hexagons, shifting center points of the radial grad to show more or less of the
        // hexagons in one or two directions
        const hexaGrad = ctx.createRadialGradient(
            (size.width / 2) + patternShift.h, (size.height / 2) + patternShift.v, 0.25 * Math.max(size.width, size.height),
            (size.width / 2) + patternShift.h, (size.height / 2) + patternShift.v, Math.max(size.width, size.height)
        );
        hexaGrad.addColorStop(0, 'transparent');
        hexaGrad.addColorStop(1, patternColor);

        ctx.fillStyle = hexaGrad;
        ctx.lineWidth = 1;
        ctx.strokeStyle = hexaGrad;
        this.drawHexaGrid(ctx, size, {size: patternSize});
        ctx.stroke();
        ctx.restore();


    }
}

registerPaint('scfborder', ScfBorder);
