const { join } = require('path');
const { BuiTailwindConfig } = require('@buhler/ui-styles');

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [BuiTailwindConfig],
    content: [
        // Purging of your own css classes
        join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
        // UI-Core purging
        // this path may vary depending on your project structure !!
        join(__dirname, '../node_modules/@buhler/ui-core*/**/*.mjs')
    ]
};
