import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import Heading from '../../components/Heading'
import TitleImage from '../../components/TitleImage'
import Modal from '../../components/Modal'
import cloudinary from '../../utils/cloudinary'
import getBase64ImageUrl from '../../utils/generateBlurPlaceholder'
import type { ImageProps } from '../../utils/types'
import { useLastViewedPhoto } from '../../utils/useLastViewedPhoto'

const Gallery: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter()
  const { photoId } = router.query
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()
  // const test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: 'center' })
      setLastViewedPhoto(null)
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto])
  
  return (
    <>
      <Heading title={"The Gallery"} />
      <main className="mx-auto max-w-[1960px]">
        <TitleImage
          page="gallery" 
          title="The Gallery"
          subTitle="Exactly what happens when you put a person inside of nearly 30 miles of postcard-worth vistas and a camera on burst mode."
        />
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId)
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4 p-8">
          {images.map(({ id, public_id, format, blurDataUrl }) => (
            <Link
              key={id}
              href={`/gallery/?photoId=${id}`}
              as={`/gallery/p/${id}`}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Mac photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: 'translate3d(0, 0, 0)' }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
          {/* {test.map((element) => (
            <div>
              {element}
            </div>
          ))} */}
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
        Built and shot by {' '}
        <a
          href="https://macgotsch.com/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Mac Gotsch
        </a>{' '}
      </footer>
    </>
  )
}

export default Gallery

export async function getStaticProps() {
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

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image)
  })
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
  }

  return {
    props: {
      images: reducedResults,
    },
  }
}
