export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'bybrandonbrown',
  DESCRIPTION:
    'The design systems, development, work-life, and personal journal of Brandon Brown',
  EMAIL: 'brandon@bybrandonbrown.com',
  NUM_POSTS_ON_HOMEPAGE: 3,
  POSTS_PER_PAGE: 9,
  SITEURL: 'https://bybrandonbrown.com',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/case-studies', label: 'case studies' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://youtube.com/@pointlineplanexyz', label: 'YouTube' },
  { href: 'https://bsky.app/profile/plpxyz.bsky.social', label: 'BlueSky' },
  { href: 'https://www.linkedin.com/in/bybrandonbrown/', label: 'LinkedIn' },
  // { href: 'jason@enscribe.dev', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
