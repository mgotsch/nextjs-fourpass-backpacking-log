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
  }

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
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map(({ id, public_id, format, width, height, blurDataUrl }) => (
            <Link key={id} href={`/?photoId=${id}`} as={`/photo/${id}`} legacyBehavior>
              <a
                ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
                className="block mb-8 transition-opacity duration-300 ease-in-out hover:opacity-75"
              >
                <div className="relative w-full h-0 pb-[66.66%] overflow-hidden rounded-lg bg-gray-200 shadow-md">
                  <Image
                    alt=""
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    loading="lazy"
                    className="rounded-lg"
                  />
                </div>
              </a>
            </Link>
          ))}
        </Masonry>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
        Built and shot by{' '}
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