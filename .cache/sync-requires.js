
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/Users/dimayaremcuk/Documents/GitHub/rovenets-landing-page/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/dimayaremcuk/Documents/GitHub/rovenets-landing-page/src/pages/index.tsx"))
}

