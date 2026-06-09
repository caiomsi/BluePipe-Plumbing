# Images — BluePipe Plumbing (agency demo)

This is a **fictional demo site**, so it ships with real, high-quality stock photos
from [Unsplash](https://unsplash.com) (free to use, no attribution required). For a
real client, swap these for the client's own job photos using the **same filenames** so
no HTML/CSS needs to change.

| File                              | Used for                          | Recommended size      |
|-----------------------------------|-----------------------------------|-----------------------|
| `hero-industrial-pipes.jpg`       | Hero background                   | ~1920 × 1280, dark    |
| `plumber-at-work.jpg`             | "Why Us" portrait (5:6)           | ~1100 × 1300          |
| `pipe-soldering.jpg`              | Gallery — copper repipe           | ~950 × 950 (square ok)|
| `chrome-faucet-fixture.jpg`       | Gallery — fixture upgrade         | ~800 × 800            |
| `modern-bathroom-renovation.jpg`  | Before/After slider + gallery     | ~1200 × 800 (16:9)    |
| `freestanding-tub-bathroom.jpg`   | Gallery — master bath             | ~800 × 800            |
| `bright-kitchen-sink.jpg`         | Gallery — kitchen re-fit          | ~800 × 800            |
| `plumbing-tools.jpg`              | (spare) tools / detail shot       | ~800 × 800            |

## Notes

- **Before/After slider:** the "before" image is the *same* source photo
  (`modern-bathroom-renovation.jpg`) degraded with a CSS filter (grayscale + dimmed +
  sepia) so the angle always matches perfectly. For a real client, replace the
  `.ba-before` image with an actual "before" photo shot from the **same angle** and
  remove the filter in `css/style.css` (`.ba-before-wrap .ba-before`).
- Every `<img>` has an `onerror` fallback to a `placehold.co` placeholder, so a missing
  file degrades gracefully instead of breaking the layout.

## Conventions

- Descriptive, hyphenated, lowercase filenames (they're an SEO signal and the `alt`
  text relies on them).
- Compress before committing — [Squoosh](https://squoosh.app) or
  [TinyPNG](https://tinypng.com). JPG for photos, SVG/PNG for logos & icons.
- Service-card icons are inline SVG in `index.html`, not image files.
