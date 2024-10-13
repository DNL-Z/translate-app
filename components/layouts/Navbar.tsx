import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import translateImg from '/public/logo-translate.png'
import ChangeLanguage from '@/components/modules/ChangeLanguage'

export default function Navbar() {
  const { t } = useTranslation()

  return (
    <section className="grid grid-cols-3 items-center justify-center justify-items-center">
      <div>
        <Image src={translateImg} width={55} height={55} alt="logo-translate" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{t(`common:app-title`)}</h1>
      </div>
      <div>
        <ChangeLanguage />
      </div>
    </section>
  )
}
