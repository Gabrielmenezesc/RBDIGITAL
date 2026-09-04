import sharp from "sharp";
import fs from "fs";

async function processImage() {
  const inputPath = "C:\\Users\\ENGEFIELD\\.gemini\\antigravity\\brain\\bc99700d-b13c-4ce7-ac01-62fdb3a5beeb\\rb_digital_transparent_4d_1788537912850.jpg";
  const outputPath = "./public/logo-rb-digital.png";

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Image size: ${width}x${height}, channels: ${channels}`);

  const bgMask = new Uint8Array(width * height);
  const queue = [];

  function getPixel(x, y) {
    const idx = (y * width + x) * channels;
    return [data[idx], data[idx + 1], data[idx + 2], data[idx + 3]];
  }

  function isCheckerboard(r, g, b) {
    const diff = Math.max(Math.abs(r - g), Math.abs(g - b), Math.abs(r - b));
    const avg = (r + g + b) / 3;
    return diff < 22 && avg > 130;
  }

  // Seed flood fill from perimeter
  for (let x = 0; x < width; x++) {
    queue.push([x, 0]);
    queue.push([x, height - 1]);
    bgMask[0 * width + x] = 1;
    bgMask[(height - 1) * width + x] = 1;
  }
  for (let y = 0; y < height; y++) {
    queue.push([0, y]);
    queue.push([width - 1, y]);
    bgMask[y * width + 0] = 1;
    bgMask[y * width + (width - 1)] = 1;
  }

  let head = 0;
  while (head < queue.length) {
    const [cx, cy] = queue[head++];
    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!bgMask[nIdx]) {
          const [r, g, b] = getPixel(nx, ny);
          if (isCheckerboard(r, g, b)) {
            bgMask[nIdx] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  // Apply alpha transparency with soft feathering
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const pIdx = idx * channels;
      if (bgMask[idx] === 1) {
        data[pIdx + 3] = 0;
      }
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`Saved transparent logo to ${outputPath}`);
}

processImage().catch(console.error);
