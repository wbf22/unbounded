# Monet Paint


An app for drawing and graphics production, as well as document editing.




# Done
- basic drawing
- brush resizing
- move tool
- image copy and paste
- download image
- canvas resizing
- canvas background
- prevent space bar default
- ctrl z
- select multiple with move tool
- color values can be set by changing text instead of just sliders


# Todo
- fill tool

- layers
- scale tool
- make general color selector to be used in background color as well


```js

const r_image = 255;
const g_image = 255;
const b_image = 255;
const a_image = 255 / 255;
const r_new = 255;
const g_new = 0;
const b_new = 0;
const a_new = 255 / 255;

// Calculate the resulting alpha
const a_r = a_new + (a_image * (1 - a_new)); // 1

const r_r = (r_new * a_new + r_image * a_image * (1 - a_new)) / a_r; // (255 * 1 + 255 * 1 * (1 - 1)) / 1
const g_r = (g_new * a_new + g_image * a_image * (1 - a_new)) / a_r; // (0 * 1 + 255 * 1 * (1 - 1)) / 1
const b_r = (b_new * a_new + b_image * a_image * (1 - a_new)) / a_r; // (0 * 1 + 255 * 1 * (1 - 1)) / 1

// Calculate and set the resulting color
imageData.data[index] = r_r;     // 255
imageData.data[index + 1] = g_r;   // 0
imageData.data[index + 2] = b_r;   // 0
imageData.data[index + 3] = a_r * 255; // 1

```