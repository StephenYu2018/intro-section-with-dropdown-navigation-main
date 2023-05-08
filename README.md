# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- [Solution]()
- [Live site]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [TailwindCSS](https://tailwindcss.com/) - CSS Utility Framework

### What I learned

On this project, I took a different approach than I normally do. I decided to plan out my designs before putting it to code. I had used Figma in the past to test out the application, so I made a new whiteboard and recreated the designs from the given design images. This gave me the confidence to properly position and size my HTML elements (especially the text).

I also learned how to create togglable menus. One challenge I faced was that if I resized the browser viewport, the navigation menu that's on top of all elements onscreen moves to the top of the screen into the site header. I learned about the `onresize` event, which fires when the browser viewport changes. Using this event and an `if` statement to check if the viewport width was wider than a specific viewport size, the navigation menu would disappear so that it appears in the site header instead.

In regards to units, I learned from [Google's Web Dev Website](web.dev) that it's important to not use `vw` units on their own. This makes it impossible for the user's preferred font size configured in the browser settings to apply to the text on the web page. Instead, the preferred option is to use `calc(rem + vw)`, which does allow users to resize the web page text. However, this does make it more difficult to calculate size measurements precisely.

What I did was calculate the precise `vw` unit to equate to a certain number of pixels wide at a specific viewport width. Then, I took the integer component of the `vw` unit to use as the `vw` unit I would use in practice. The decimal component of the original `vw` unit would then be converted back to `px` using the same viewport width, and then finally converting it to `rem`. There's a lot of unit conversion going on, but it's well worth the effort for both precision and user accessibility.

Another thing that I found out on the same website was that `line-height` should use unitless values. This allows the `line-height` to scale appropriately as the `font-size` of the applied text changes. What I would do is determine the desired `line-height` in `px` at the given `font-size`, then calculate the practical `line-height` by dividing the pixel `line-height` value by the `font-size` in pixels, which should result in a unitless value.

### Continued development

Starting out, I constructed the design in Figma, which gave me the confidence to give the correct positions and sizes. In the future, I want to keep taking this approach, but I also want to learn other features I didn't touch, such as autolayout, styles, components, and prototyping with transitions.

Another thing I want to learn more about is web accessibility. While I tried to use some `aria` attributes here and there, I got lost in the sea of attributes and it became difficult for me to keep up. I think it helps to take the time to learn some commonly used `aria` attributes in isolation. It would also help me to manually test it with a screen reader.

Linking external SVG files to my HTML document was also a huge pain. While `<img>` tags are the go-to method, the SVGs can't be re-colored based on pseudo-classes or JS events as an `<img>`. I also tried this:

```html
<svg>
  <use href="./images/icon-arrow-down.svg"></use>
</svg>
```

However, it never rendered properly. My last ditch solution was to copy and paste the SVG source code throughout my HTML document. It wasn't something I wanted to do, as copy-paste programming can generally be considered problematic if you need to make numerous changes to all copies. I hope I can find a better way to link SVG files while still keeping most of the advantages of SVGs over PNGs and JPGs.

### Useful resources

- [Google's Web Dev site](https://web.dev/learn/design) - This gave me a few good practices when creating responsive designs 

## Author

- Frontend Mentor - [@StephenYu2018](https://www.frontendmentor.io/profile/StephenYu2018)

