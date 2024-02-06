import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'
import Card from '@/components/Card'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 w-3/4 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Helping you balance time, energy, and money to maximize your health & fitness
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 w-3/4 ">
            {/* {siteMetadata.description} */}
            Hi, I'm Brandon&mdash;ACE certified Personal Trainer with specialties in Fitness Nutrition and Behavior Change. I know with the right information, motivation, and guidance that you can happily move towards your goals of better health and increased fitness. Here are a couple places to start if you're new to this game of fitness:
          </p>
          {/* <div className="-m-4 flex flex-wrap">
            <Card
                key={'tet'}
                title={'Stop Looking For Motivation - Start Building It'}
                description={'description'}
                imgSrc={'/static/images/blog/motivation.jpg'}
                href={'#'}
                ctaText={"Read more"}
              />
              <Card
                key={'tet'}
                title={'They Were Right - Keep It Simple'}
                description={'description'}
                imgSrc={'/static/images/blog/keepitsimple.webp'}
                href={'#'}
                ctaText={"Read more"}
              />
            </div> */}
        </div>
        <section>
        <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14 pt-8 divide-y divide-gray-200 dark:divide-gray-700">
          Latest Posts
        </h2>
        {posts.length > MAX_DISPLAY && (
        <div className="flex justify-start text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
        <ul>
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-200"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
        </section>
        
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
