import sharp from 'sharp';

const maxSize = 96 * 4;
const defaultFormat = 'jpeg';
const supportedFormats = ['jpeg', 'png', 'webp', 'gif', 'avif'];

export async function resizeImage(
  buffer: Buffer,
  mimeType: string
): Promise<Buffer> {
  const image = sharp(buffer);
  const metadata = await image.metadata();
  if (!metadata.width || !metadata.height) {
    throw new Error('Image dimensions are not available');
  }

  let resizedImage = image;

  if (Math.max(metadata.width, metadata.height) > maxSize) {
    resizedImage = image.resize({
      width: maxSize,
      height: maxSize,
      fit: sharp.fit.inside,
      withoutEnlargement: true
    });
  }

  const format = getFormatFromMimeType(mimeType);

  if (supportedFormats.includes(format)) {
    return resizedImage.toFormat(format as keyof sharp.FormatEnum).toBuffer();
  }

  console.warn(
    `Unsupported mime type ${mimeType}, defaulting to ${defaultFormat}`
  );
  return resizedImage[defaultFormat]().toBuffer();
}

function getFormatFromMimeType(mimeType: string): string {
  try {
    const parts = mimeType.toLowerCase().split('/');
    if (parts.length !== 2 || parts[0] !== 'image') {
      throw new Error(`Invalid mime type: ${mimeType}`);
    }
    return parts[1];
  } catch {
    console.warn(`Error parsing mime type. Using default format.`);
    return defaultFormat;
  }
}
