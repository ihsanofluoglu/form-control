# Form Control

Form Control is sass mixin based on BEM naming convention. It helps you to create nice form-controls in an easy way.

## Demo

TODO

## Installing

### Using npm

```sh
$ npm install see-form-control --save
```

### Using Yarn

```sh
$ yarn add see-form-control
```

## Usage

```scss
$form-control-border-color: $color-black;

$color-red: #ce361f;

.c-form-control {
  @include form-control-block();
  @include form-control-block-modifier();

  &--alert {
    @include form-control-block-modifier(
      $border-color: $color-red
    );
  }
}

```

<details>
  <summary>Output</summary>

```css
.c-form-control {
  background-color: #fff;
  border-radius: 4px;
  color: #000;
  display: block;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  letter-spacing: 1px;
  line-height: 25px;
  padding: 8px 12px;
  width: 100%;
  border-color: #000;
  border-style: solid;
  border-width: 2px;
  opacity: 1;
  outline-color: #000;
  outline-style: solid;
  outline-width: 0; 
}
.c-form-control::-webkit-input-placeholder {
  color: #000; 
}

.c-form-control::-moz-placeholder {
  color: #000; 
}

.c-form-control:-ms-input-placeholder {
  color: #000; 
}

.c-form-control::-ms-input-placeholder {
  color: #000; 
}

.c-form-control::placeholder {
  color: #000; 
}

.c-form-control:focus {
  background-color: #fff; 
}

.c-form-control:disabled {
  background-color: #fff; 
}

.c-form-control--alert {
  border-color: #ce361f;
  border-style: solid;
  border-width: 2px;
  opacity: 1;
  outline-color: #000;
  outline-style: solid;
  outline-width: 0; 
}

.c-form-control--alert:focus {
  background-color: #fff; 
}

.c-form-control--alert:disabled {
  background-color: #fff; 
}

```
</details>

## Configuration

### Variables

```scss

// Font family for button elements.
// Type: Font
$form-control-font-family: null !default;

// Default background color for `buttono-style-modifier` mixin.
// Type: Color
$form-control-background: #008cba !default;

// Default Background color on focus.
// `auto` value means that the mixin generates the background
// Type: Color 
$form-control-focus-background: #008cba !default;

// Default Background color on Disable .
// `auto` value means that the mixin generates the background
// Type: Color 
$form-control-disable-background: #008cba !default;

// Default border radius.
// Type: Number
$form-control-border-radius: 3px !default;

// Default font size.
// Type: Number
$form-control-font-size: 16px !default;

// Default font weight.
// Type: Number
$form-control-font-weight: 16px !default;

// Default line-height.
// Number
$form-control-line-height: (24 / 16) !default;

// Default Base Height.
// Number
$form-control-base-height: 40px !default;

// Font color for form-control.
// Type: Color
$form-control-color: #fff !default;

// Font color for form control placeholder.
// Type: Color
$form-control-placeholder-color: #fff !default;


// Padding inside form-control.
// Type: List
$form-control-padding: 10px 20px !default;

// Border width for form control.
// Type: Number
$form-control-border-width: 0 !default;

// Border styles for form control.
// Type: Border Styles
$form-control-border-style: 0 !default;

// Border color for form control.
// Type: Color
$form-control-border-color: 0 !default;

// Border width for form control.
// Type: Number
$form-control-outline-width: 0 !default;

// Outline styles for form control.
// Type: outline Styles
$form-control-outline-style: 0 !default;

// Outline color for form control.
// Type: Color
$form-control-outline-color: 0 !default;

// Type: List
// Transition property for form-control.
$buttono-transition-property: background-color, color, border-color !default;

// Opacity for a disabled form-control.
// Type: Number
$form-control-opacity: 0.5 !default;

// Display type.
// Type: Display Type
$form-control-opacity: block !default;
```

### Mixins

We use these mixins to build the final CSS output of form control component. You can overwrite the mixins CSS with the parameters described below.

```scss
@mixin form-control-block(
  // Background Color Form Control
  // Type: Color
  $background: $form-control-background,
  // Font Family Form Control
  // Type: Font Family
  $font-family: $form-control-font-family,
  // Font Size Form Control
  // Type Number
  $font-size: $form-control-font-size,
  // Font Weight Form Control
  // Type: Number
  $font-weight: $form-control-font-weight,
  // Line Height Form Control
  // Type: Number
  $line-height: $form-control-line-height,
  // Letter Spacing Form Control
  // Type: Number
  $letter-spacing: $form-control-letter-spacing,
  // Padding Form Control
  // Type: Number Number
  $padding: $form-control-padding,
  // Height Form Control
  // Type: Number
  $height: $form-control-base-height,
  // Placeholder Color Form Control
  // Type: Color
  $placeholder-color: $form-control-placeholder-color,
  // Base Color Form Control
  // Type: Color
  $color: $form-control-color,
  // Display Form Control
  // Type: Display Type
  $display: $form-control-display,
  // Border Radius Form Control 
  // Type: Number
  $border-radius: $form-control-border-radius
) {
  // ... mixin content ...
}
```

## Development

TODO

## Browser support

It does not use any tool for browser support. Using autoprefixer for browser support is up to you. I strongly recommend you consider using [normalize.css](https://necolas.github.io/normalize.css/) to avoid inconsistency.

## License

Copyright (c) 2019 Ali İhsan OFLUOĞLU. See the [LICENSE](/LICENSE) file for license rights and limitations (MIT).
