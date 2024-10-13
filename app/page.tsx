'use client'

import Navbar from '@/components/layouts/Navbar'
import Card from '@/components/layouts/Card'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="flex animate-fadeIn flex-col items-center pt-3">
        <div className="text-2xl">{t('common:hello')}</div>
        <div className="text-lg">{t('common:bilingual')}</div>
      </section>
      <section className="grid grid-cols-3 gap-3">
        <Card article={'transistor'} link={true} />
        <Card article={'transistor'} link={true} />
        <Card article={'transistor'} link={true} />
      </section>
    </div>
  )
}
