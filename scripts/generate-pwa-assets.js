const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '../public');
const SOURCE_IMAGE = path.join(PUBLIC_DIR, 'favicon.png');

async function generateAssets() {
  if (!fs.existsSync(SOURCE_IMAGE)) {
    console.error('Source image not found: favicon.png.');
    return;
  }

  try {
    console.log('Generating icon-192.png...');
    await sharp(SOURCE_IMAGE)
      .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(path.join(PUBLIC_DIR, 'icon-192.png'));

    console.log('Generating icon-512.png...');
    await sharp(SOURCE_IMAGE)
      .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(path.join(PUBLIC_DIR, 'icon-512.png'));

    const ogDest = path.join(PUBLIC_DIR, 'og-image.jpg');
    if (!fs.existsSync(ogDest)) {
      console.log('Generating placeholder og-image.jpg...');
      await sharp({
        create: {
          width: 1200,
          height: 630,
          channels: 4,
          background: { r: 243, g: 244, b: 246, alpha: 1 }
        }
      })
      .jpeg()
      .toFile(ogDest);
    } else {
        console.log('og-image.jpg already exists.');
    }

    console.log('PWA and SEO assets generated successfully!');
  } catch (error) {
    console.error('Error generating assets:', error);
  }
}

generateAssets();
