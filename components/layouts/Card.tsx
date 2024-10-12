import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import BackButton from '@/components/elements/BackButton'
import transistorsImg from '/public/transistors.jpg'

interface Props {
  article: string
  link: boolean
}

export default function Card(props: Props) {
  const { article, link } = props
  const { t, lang } = useTranslation()

  return (
    <section>
      <div className="mx-auto my-4 max-w-sm rounded-2xl border bg-zinc-100 shadow-2xl md:max-w-md">
        {/* TODO: find better solution for link */}
        {link ? (
          <Link href={`/article/${lang}`}>
            <Image
              className="aspect-auto rounded-2xl object-cover object-center"
              src={transistorsImg}
              alt="transistors"
            />
            <div className="space-y-2 p-6 md:p-8 lg:p-12">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                {t(`articles:${article}.title`)}
              </h2>
              <div className="text-sm font-light">{t(`articles:${article}.description`)}</div>
            </div>
          </Link>
        ) : (
          <>
            <Image
              className="aspect-auto rounded-2xl object-cover object-center"
              src={transistorsImg}
              alt="transistors"
            />
            <div className="space-y-2 p-6 md:p-8 lg:p-12">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                {t(`articles:${article}.title`)}
              </h2>
              <div className="text-sm font-light">{t(`articles:${article}.description`)}</div>
            </div>
          </>
        )}
      </div>
      <BackButton />
    </section>
  )
}
