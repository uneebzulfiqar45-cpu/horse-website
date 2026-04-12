const fs = require('fs');

const rawHtml = fs.readFileSync('c:/Users/uneeb/OneDrive/Desktop/horse/demo.html', 'utf8');

// Find all elements with classes containing 'pad' or 'padding' or 'style' attributes
const marginPaddingExtract = rawHtml.match(/padding[A-Za-z0-9\-]*:[^;]+/g);
if (marginPaddingExtract) {
    const unique = [...new Set(marginPaddingExtract)];
    console.log('Padding usages found in embedded styles:', unique.slice(0, 15));
} else {
    console.log('No direct padding styles found');
}
