# @holymarcell/css-scf-border

A custom beveled border implemented with the CSS Paint worklet api.

## demo

See: https://holymarcell.github.com/css-scf-border

## usage:

Simple: (Not currently supported with Firefox)

```
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('"https://unpkg.com/@holymarcell/css-scf-border@0.1.1/src/scfBorder.js');
}
```

In React (with snowpack): Copy the source over to your workdir and use this in your index.tsx

The Polyfill makes this css feature work in firefox.
```
import 'css-paint-polyfill';
CSS.paintWorklet.addModule(new URL('./scfBorder.js', import.meta.url));

```
