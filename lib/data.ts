import cloudinary from "../utils/cloudinary";
import { ImageProps } from "../utils/types";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";

export async function fetchImages() {

  try {

    console.log('Fetching images...');

    const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by('public_id', 'asc')
    .max_results(500)
    .execute()
    let reducedResults: ImageProps[] = []

    let i = 0
    for (let result of results.resources) {
      reducedResults.push({
        id: i,
        height: result.height,
        width: result.width,
        public_id: result.public_id,
        format: result.format,
      })
      i++
    }

    // const blurImagePromises = results.resources.map((image: ImageProps) => {
    //   return getBase64ImageUrl(image)
    // })
    // const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

    // for (let i = 0; i < reducedResults.length; i++) {
    //   reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
    // }

    return reducedResults;

  } catch (error) {
    console.error('Image Fetch Error:', error);
    throw new Error('Failed to fetch image data.');
  }
}