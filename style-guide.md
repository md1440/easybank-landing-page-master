# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Dark Blue: hsl(233, 26%, 24%)
- Lime Green: hsl(136, 65%, 51%)
- Bright Cyan: hsl(192, 70%, 51%)

### Neutral

- Grayish Blue: hsl(233, 8%, 62%)
- Light Grayish Blue: hsl(220, 16%, 96%)
- Very Light Gray: hsl(0, 0%, 98%)
- White: hsl(0, 0%, 100%)

## Typography

### Body Copy

- Font size: 18px

### Font

- Family: [Public Sans](https://fonts.google.com/specimen/Public+Sans)
- Weights: 300, 400, 700


.topnav__item {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.topnav__item a {
  color: var(--clr-neutral-grayish-blue);
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: block;
  border-bottom: 2.5px solid transparent;
}

.topnav__item a:hover {
  color: var(--clr-primary-dark-blue);
  border-bottom: 2.5px solid;
  border-image: linear-gradient(to right, #39a355 26%,#5fb6cc 82%);
  border-image-slice: 1;
}