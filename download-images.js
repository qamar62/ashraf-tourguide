const fs = require('fs');
const https = require('https');

const images = [
  {
    url: 'https://example.com/dubai-skyline.jpg',
    path: 'public/images/hero/dubai-skyline.jpg'
  },
  {
    url: 'https://example.com/desert-safari.jpg',
    path: 'public/images/tours/desert-safari.jpg'
  }
  // Add more image download configurations
];

images.forEach(image => {
  https.get(image.url, (response) => {
    const writeStream = fs.createWriteStream(image.path);
    response.pipe(writeStream);

    writeStream.on('finish', () => {
      console.log(`Downloaded: ${image.path}`);
      writeStream.close();
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${image.path}: ${err.message}`);
  });
});
