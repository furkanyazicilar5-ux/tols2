const fs = require('fs');
const path = require('path');

try {
  const config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config', 'config.json')));
  console.log('Config loaded:', config.ui_language);
  console.log('Tests completed (placeholder).');
  process.exit(0);
} catch (err) {
  console.error('Test failed', err);
  process.exit(1);
}
