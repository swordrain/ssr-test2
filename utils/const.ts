import { LinkType } from '@/types/channel'
// Color
export const PRIMARY_COLOR = '#9145f1'
export const PRIMARY_COLOR_HOVER = '#b67cff'
export const TAG_BACKGROUND = 'rgba(241, 232, 252, 1)'

// Channel
export const CHANNEL_TAGS: {
  [key: number]: string
} = {
  1: '音乐',
  2: '舞蹈',
  3: '生活',
  4: '美食',
  5: '宠物',
  6: '情感咨询',
  7: '财经创业',
  8: '文化艺术',
  9: '课程培训',
  10: '情景剧',
  11: '娱乐',
  12: '绘画',
  13: '二次元',
  14: '资讯分享',
  15: '科技',
  16: '游戏',
  17: '时尚',
  18: '其他',
}

export const SNS_OPTIONS = [
  {
    label: '抖音',
    value: LinkType.DOU_YIN,
    icon: '/channel/douyin.png',
  },
  {
    label: '微博',
    value: LinkType.WEI_BO,
    icon: '/channel/weibo.png',
  },
  {
    label: '知乎',
    value: LinkType.ZHI_HU,
    icon: '/channel/zhihu.png',
  },
  {
    label: 'B站',
    value: LinkType.BILI,
    icon: '/channel/bilibili.png',
  },
  {
    label: '快手',
    value: LinkType.KUAI_SHOU,
    icon: '/channel/kuaishou.png',
  },
  {
    label: '小红书',
    value: LinkType.HONG_SHU,
    icon: '/channel/hongshu.png',
  },
  {
    label: 'Twitter',
    value: LinkType.TWITTER,
    icon: '/channel/twitter.png',
  },
  {
    label: 'LinkedIn',
    value: LinkType.LINKEDIN,
    icon: '/channel/linkedin.png',
  },
  {
    label: 'Youtube',
    value: LinkType.YOUTUBE,
    icon: '/channel/youtube.jpg',
  },
]
