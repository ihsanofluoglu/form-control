# Forma

Forma is sass mixin based on BEM naming convention. It helps you to create nice form elements in an easy way.

## Demo

TODO

## Installing

### Using npm

```sh
$ npm install forma --save
```

### Using Yarn

```sh
$ yarn add forma
```


## Usage

```scss
$color-dove-gray: #686565;
$color-white: #fff;
$color-black:  #000;

$forma-form-height: 16px;
$forma-form-padding: 14px 22px;
$forma-form-font-family: 'Roboto', sans-serif;
$forma-form-border-color: $color-dove-gray;
$forma-form-background-color: $color-white;
$forma-form-border-radius: 4px;
$forma-form-outline-width: 0;
$forma-form-color: $color-black;
$forma-form-placeholder-color: $color-dove-gray;
$forma-form-font-size: 14px;
$forma-form-border-width: 2px;


.form-group {
  width: 500px;

  &__field {
    @include forma-block();
    @include forma-modifier();

    &.is-alert {
      @include forma-modifier(
          $forma-border-color: #aa2222,
          $forma-color: #a22,
          $forma-placeholder-color:#a22
        );
    }
  }
}

```


<details>
  <summary>Output</summary>

```css
.form-group {
  width: 500px; 
}

.form-group__field {
  background-image: none;
  border-color: #686565;
  border-radius: 4px;
  border-style: solid;
  border-width: 2px;
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  height: 16px;
  line-height: 30px;
  outline-color: #578;
  outline-style: solid;
  outline-width: 0;
  padding: 14px 22px;
  width: 100%;
  background-color: #fff;
  border-color: #686565;
  border-radius: 4px;
  border-width: 2px;
  color:   #000; 
}

.form-group__field::-webkit-input-placeholder {
  color: #686565; 
}

.form-group__field:-ms-input-placeholder {
  color: #686565; 
}
    
.form-group__field::-ms-input-placeholder {
  color: #686565;
}

.form-group__field::placeholder {
  color: #686565; 
}

.form-group__field:disabled {
  background-color: #111;
  opacity: 0.7; 
}

.form-group__field:focus {
  border-color: #000; 
}

.form-group__field.is-alert {
  background-color: #fff;
  border-color: #aa2222;
  border-radius: 4px;
  border-width: 2px;
  color:   #000; 
}

.form-group__field.is-alert::-webkit-input-placeholder {
  color: #a22; 
}

.form-group__field.is-alert:-ms-input-placeholder {
  color: #a22; 
}

.form-group__field.is-alert::-ms-input-placeholder {
  color: #a22; 
}

.form-group__field.is-alert::placeholder {
  color: #a22; 
}

.form-group__field.is-alert:disabled {
  background-color: #111;
  opacity: 0.7; 
}

.form-group__field.is-alert:focus {
  border-color: #000; 
}


```
</details>


## Configuration

### Variables

```scss
// Form element display style
// Type: String
$forma-form-display: block !default;

// Form element base height style
// Type: Number 
$forma-form-height: 35px !default;

// Form element padding style
// Type: Number
$forma-form-padding: 4px 14px !default;

// Form border width style
// Type: Number
$forma-form-border-width: 1px !default;

// Form border style
// Type: String
$forma-form-border-style: solid !default;

// Form Element Border Color
// Type: Number
$forma-form-border-color: #000 !default;

// Form element outline width
// Type: Number
$forma-form-outline-width: 1px !default;

// Form element outline style
// Type: String
$forma-form-outline-style: solid !default;

// Form element outline color
// Number
$forma-form-outline-color: #578 !default;

// Form element Base Font Family
// Type: String
$forma-form-font-family: inherit !default;

// Form Element base font size
// Type: Number
$forma-form-font-size: 14px !default;

// Form Element Base Line Height
// Type: Number
$forma-form-line-height: 30px !default;

// Form element Background color
// Type: Number
$forma-form-background-color: #888 !default;

// Form element Text Color
// Type: Number
$forma-form-color: #fff !default;

// Form element placeholder text color
// Type: Number
$forma-form-placeholder-color: #222 !default;

// Form element disabled background color
// Type: Number
$forma-form-disabled-background-color: #111 !default;

//  Form element disable opacity
// Number
$forma-form-disabled-opacity: 0.7 !default;

// Form element border radius
// Type: Number
$forma-form-border-radius: 4px !default;

// Form element focus border color
// Type: Number
$forma-form-focus-border-color: #000 !default;
```
## License

Copyright (c) 2017 Ali İhsan Ofluoğlu. See the [LICENSE](/LICENSE) file for license rights and limitations (MIT).
