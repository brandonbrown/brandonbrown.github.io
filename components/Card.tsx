import Image from './Image'
import Link from './Link'
// { title, description, imgSrc, href, ctaText }
const Card = (props) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        props.imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-slate-950/50`}
    >
      {props.imgSrc &&
        (props.href ? (
          <Link href={props.href} aria-label={`Link to ${props.title}`}>
            <Image
              alt={props.title}
              src={props.imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={props.title}
            src={props.imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {props.href ? (
            <Link href={props.href} aria-label={`Link to ${props.title}`}>
              {props.title}
            </Link>
          ) : (
            props.title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{props.description}</p>
        {props.href && (
          <Link
            href={props.href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-200"
            aria-label={`Link to ${props.title}`}
          >
            {props.ctaText ? props.ctaText : "Learn more"} &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
