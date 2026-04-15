# HNG Stage 1B — Testable Profile Card

A clean, accessible, and responsive profile card component built with semantic HTML, vanilla CSS, and vanilla JavaScript. Built as part of the HNG Frontend internship Stage 1B task.

---

## Live Demo

> https://hng-14-stage-one-b.vercel.app/

---

## Features

- Semantic HTML structure using `<article>`, `<figure>`, `<section>`, and `<ul>`
- Live epoch time in milliseconds, updating every second
- Responsive layout — stacked on mobile, side-by-side on desktop
- Accessible icon-only social links with `aria-label`
- Visible focus styles for full keyboard navigation
- `aria-live="polite"` on the time display for screen reader compatibility
- Light mode design with a clean CSS custom property system

---

## File Structure

```
├── index.html       # Markup and component structure
├── styles.css       # All styling and CSS variables
├── script.js        # Live time logic
└── profile.jpeg     # Avatar image
```

---

## How It Works

### HTML (`index.html`)

The card is wrapped in an `<article>` element — the correct semantic choice for a self-contained piece of content like a profile. Inside it:

- The avatar is inside a `<figure>` element with a meaningful `alt` attribute on the `<img>`, giving screen readers useful context rather than a filename
- The name uses `<h2>` for correct heading hierarchy within the card
- The bio uses a `<p>` element
- Hobbies and dislikes are each in a `<section>` with an `<h3>` heading and a `<ul>` list
- Social links sit inside a container `<div>`. Each `<a>` has `target="_blank"` and `rel="noopener noreferrer"` for safe external linking, and an `aria-label` so screen readers can identify the destination of icon-only links
- The time display uses `aria-live="polite"` so screen readers are notified when the value updates without interrupting the user

Every visible element has a `data-testid` attribute for automated testing.

### CSS (`styles.css`)

All colours are defined as CSS custom properties in `:root`:

```css
--bg         /* page background */
--card       /* card surface    */
--text-main  /* primary text    */
--text-muted /* secondary text  */
--gray       /* subtle accents  */
```

Focus styles use `:focus-visible` on social links so keyboard users get a clear outline while mouse users are not distracted by it.

Responsive layout uses two breakpoints — single column on mobile up to 767px, and a two-column row layout from 768px with the avatar on the left and content on the right.

### JavaScript (`script.js`)

Minimal — just two things:

```js
const updateTime = () => {
	timeContainer.textContent = Date.now();
};

updateTime(); // populate immediately on load
setInterval(updateTime, 1000); // then update every second
```

`Date.now()` returns the current Unix epoch time in milliseconds. Calling `updateTime()` before the interval ensures the value is visible the moment the page loads with no empty flash on the first second.

---

## Accessibility

| Feature                | Implementation                                               |
| ---------------------- | ------------------------------------------------------------ |
| Avatar alt text        | Descriptive `alt` attribute on `<img>`                       |
| Icon-only social links | `aria-label` on each `<a>`                                   |
| Live time updates      | `aria-live="polite"` on the time `<span>`                    |
| Focus styles           | `:focus-visible` outline on all interactive elements         |
| Keyboard navigation    | Tab through all three social links in order                  |
| Semantic structure     | `<article>`, `<figure>`, `<section>`, `<h2>`, `<h3>`, `<ul>` |

---

## Testing

All elements include `data-testid` attributes for automated test runners:

| Element                | `data-testid`               |
| ---------------------- | --------------------------- |
| Card root              | `test-profile-card`         |
| Avatar image           | `test-user-avatar`          |
| Name                   | `test-user-name`            |
| Bio                    | `test-user-bio`             |
| Current time (ms)      | `test-user-time`            |
| Social links container | `test-user-social-links`    |
| LinkedIn link          | `test-user-social-linkedin` |
| X / Twitter link       | `test-user-social-x`        |
| GitHub link            | `test-user-social-github`   |
| Hobbies list           | `test-user-hobbies`         |
| Dislikes list          | `test-user-dislikes`        |

---

## Running Locally

No build tools or dependencies required. Open `index.html` directly in a browser.

---

## Author

> Hope Ada
