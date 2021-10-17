import React from "react";

export const Api = () => {


 const foo = [
    '--scfborder-width',
    '--scfborder-border-color',
    '--scfborder-shadow-color',
    '--scfborder-pattern-size',
    '--scfborder-pattern-color',
    '--scfborder-top-dent',
    '--scfborder-top-dent-length',
    '--scfborder-bottom-dent',
    '--scfborder-bottom-dent-length',
  ];



  return (
      <div className={'content'}>
        <h2>Api</h2>
        <h4>Properties with two values</h4>
        <p>
          These Properties accept up to two values, either as plain number (interpreted as pixel values) as pixel value (e.g.
          "42px") or as percentage. Percentages are calculated relative to the height or width of the container depending on
          context. If you set <em>--scfborder-top-left</em> to "50% 50%" the top left border will be inset at 45° on
          a 100px times 100px container, but look diffrently on a container that is 100px times 200px large.
        </p>
        <p>
          Each of these properties also accepts a single value, that then is applied twice.
        </p>
        <pre>--scfborder-top-left</pre>
        <pre>--scfborder-top-right</pre>
        <pre>--scfborder-bottom-right</pre>
        <pre>--scfborder-bottom-left</pre>
        <pre>--scfborder-pattern-shift</pre>

        <h4>Properties with one value</h4>
        <p>
          These properties accept one value. Properties ending in "color" will accept any way of declaring colors
          in css e.g. #f1f1f1 or 'hotpink'.
        </p>
        <pre>--scfborder-width</pre>
        <pre>--scfborder-border-color</pre>
        <pre>--scfborder-shadow-color</pre>
        <pre>--scfborder-pattern-size</pre>
        <pre>--scfborder-pattern-color</pre>
        <pre>--scfborder-top-dent</pre>
        <pre>--scfborder-top-dent-length</pre>
        <pre>--scfborder-bottom-dent</pre>
        <pre>--scfborder-bottom-dent-length</pre>
      </div>
  )
}
