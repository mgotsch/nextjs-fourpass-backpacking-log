/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number
  height: string
  width: string
  public_id: string
  format: string
  blurDataUrl?: string
}

export interface SharedModalProps {
  index: number
  images?: ImageProps[]
  currentPhoto?: ImageProps
  changePhotoId: (newVal: number) => void
  closeModal: () => void
  navigation: boolean
  direction?: number
}

export interface CrewMemberProps {
  id: number
  name: string
  role: string
  blurb: string
  image: string
}

export interface DayData {
  day: string
  route: string
  miles: string
  elevation: string
  passes: number
}

export interface MapData {
  0: string
  1: string
  2: string
  3: string
  4: string
}