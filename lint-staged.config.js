module.exports = {
  "*.{json,json5,jsonc}": ["npm run lint:prettier"],
  "*.css": ["npm run lint:prettier"],
  "*.html": ["npm run lint:prettier"],
  "*.js": ["npm run lint:eslint"],
  "*.md": ["npm run lint:prettier", "npm run lint:markdown"],
};
