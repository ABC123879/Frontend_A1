# Task 1: Product Showcase Card

**Course:** Front-End Engineering Lab (Responsive Web Design)
**Assignment:** Responsive UI Mini-Components, Task 1
**Tech:** HTML5, CSS3 (Grid + Flexbox), Vanilla JavaScript. No frameworks or libraries.

A mobile-first product card for a **Desk Workspace Mat (₹1,499)**. It shows a
single-column stack on mobile and switches to a two-column layout on desktop.

---

## Live Behaviour

| Viewport | Layout |
|----------|--------|
| Below 768px (mobile) | 1-column stack: image on top, details below, full-width "Add to Bag" button |
| 768px and above (desktop) | 2 equal columns: image on the left, details on the right, button beside the price |

## Requirement Checklist

| # | Requirement from the assignment | Where it is implemented |
|---|---------------------------------|-------------------------|
| 1 | Mobile-first styles, button `width: 100%` on small screens | Base styles in `css/style.css` (`.btn`) |
| 2 | `@media (min-width: 768px)` with `grid-template-columns: 1fr 1fr` | `.product-card` inside the media query |
| 3a | Details container: `flex`, `column`, `space-between` | `.product-details` |
| 3b | Category/rating row and price/button shelf: `flex` + `space-between` | `.meta-row`, `.shelf` |
| 3c | Features use `flex-wrap` | `.features` |
| 4a | Image zoom `transform: scale(1.04)` with `transition: transform 0.3s ease` on hover | `.product-media:hover .product-img` |
| 4b | Button `:active { transform: scale(0.96); }` | `.btn:active` |

## Submission Checklist

- [x] Viewport meta tag included in `<head>`
- [x] Universal `box-sizing: border-box` reset applied
- [x] Mobile-first base layout, no horizontal scroll
- [x] Media query activates the multi-column layout on wider screens
- [x] Flexbox used for 1D alignment (rows, column spacing, button shelf)
- [x] CSS Grid used for the 2D two-column card split
- [x] Hover transitions run smoothly (only `transform` and `opacity` are animated)

## Extras

- Semantic HTML (`article`, `figure`, `h1`, `ul`) with descriptive `alt` text and ARIA labels
- CSS custom properties (design tokens) for colours, radii and shadows
- Keyboard focus style (`:focus-visible`) on the button
- `prefers-reduced-motion` support
- JavaScript "Add to Bag" counter with a short "Added ✓" confirmation and a screen-reader live region

## Project Structure

```
task1/
├── index.html          # Markup
├── css/
│   └── style.css       # Mobile-first styles + desktop media query
├── js/
│   └── script.js       # Add to Bag interaction
├── assets/
│   └── product-mat.svg # Product illustration
├── .gitignore
└── README.md
```

## How to Run

1. Download or clone the project.
2. Open `index.html` in any modern browser. No build step is needed.

## How to Test Responsiveness

1. Open the page in Chrome or Edge and press `F12`.
2. Toggle the **Device Toolbar** (`Ctrl + Shift + M`).
3. Pick a phone (for example iPhone 12) and check that everything is stacked in one column with a full-width button.
4. Widen the viewport past 768px and check that the image and details sit side by side.

## Push to GitHub

1. Create a new **empty** repository on GitHub (no README, no .gitignore).
2. In the project folder, run:

```bash
git init
git add .
git commit -m "Add Task 1: responsive product showcase card"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

3. Optional: host it free with **GitHub Pages** (Settings → Pages → Deploy from branch → `main` / root).

## Author

Add your name, roll number and section here.
