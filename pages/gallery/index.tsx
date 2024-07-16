import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Heading from '../../components/Heading'
import TitleImage from '../../components/TitleImage'
import Modal from '../../components/Modal'
import Masonry from 'react-masonry-css'
import cloudinary from '../../utils/cloudinary'
import getBase64ImageUrl from '../../utils/generateBlurPlaceholder'
import type { ImageProps } from '../../utils/types'
import { useLastViewedPhoto } from '../../utils/useLastViewedPhoto'

const Gallery: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter()
  const { photoId } = router.query
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()
  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: 'center' })
      setLastViewedPhoto(null)
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto])

  const breakpointColumnsObj = {
    default: 4,
    1360: 3,
    1000: 2,
    640: 1
  };

  return (
    <>
      <Heading title={"The Gallery"} />
      <main className="mx-auto max-w-[1960px]">
        <TitleImage
          page="gallery" 
          title="The Gallery"
          subTitle="Exactly what happens when you put a person inside of nearly 30 miles of postcard-worth vistas and a camera accidentally on burst mode."
        />
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId)
            }}
          />
        )}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid p-8"
          columnClassName="my-masonry-grid_column"
        >
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
        </Masonry>
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
        </a>
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

  const images = await Promise.all(results.resources.map(async (result, index) => {
    const blurDataUrl = await getBase64ImageUrl(result)
    return {
      id: index,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
      blurDataUrl
    }
  }))

  return {
    props: {
      images
    }
  }
}