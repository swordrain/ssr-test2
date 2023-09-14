export interface IChannelIntro {
  title: string
  intro2: string
  signed_cover: string
  signed_avart: string
  tag?: string | null
  intro: string
  signed_intro_img?: string | null
  signed_intro_video?: string | null
  token: string
  channel_sns: ISnsItem[]
}

export enum MediaType {
  IMAGE = 1,
  VIDEO,
  AUDIO,
  ATTACHMENT,
  VIDEOCOVER,
}

export enum LinkType {
  DOU_YIN = 'douyin',
  WEI_BO = 'weibo',
  ZHI_HU = 'zhihu',
  BILI = 'bilibili',
  KUAI_SHOU = 'kuaishou',
  HONG_SHU = 'hongshu',
  TWITTER = 'twitter',
  LINKEDIN = 'linkedin',
  YOUTUBE = 'youtube',
}

export interface ISnsItem {
  channel_id: number
  id: number
  sns_title: string
  sns_url: string
  type: string
}

export interface IContentMediaProps {
  fileId: string
  fileName: string
  fileType: string
  fileUrl: string
  id: number
  signedUrl: string
  type: string
}

export interface IContentProps {
  title: string
  tag: string
  status: string
  id: number
  ctype: number
  content: string
  medias?: IContentMediaProps[]
  update_dt: string
  token: string
}
