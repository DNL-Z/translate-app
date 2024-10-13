import Link from 'next/link'
import Image from 'next/image'
import ChangeLanguage from '@/components/modules/ChangeLanguage'
import useTranslation from 'next-translate/useTranslation'

import translateImg from '/public/logo-translate.png'

export default function Navbar() {
  const { t, lang } = useTranslation()
  console.log('lang ===>>>', lang)

  return (
    <section className="grid grid-cols-3 items-center justify-center justify-items-center bg-gray-800 p-3">
      <div>
        <Link href="/">
          <Image
            className="animate-rotate"
            src={translateImg}
            width={55}
            height={55}
            alt="logo-translate"
          />
        </Link>
      </div>
      <div>
        <h1 className="text-2xl font-light text-white">{t(`common:app-title`)}</h1>
      </div>
      <div>
        <ChangeLanguage />
      </div>
    </section>
  )
}
