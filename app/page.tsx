'use client'

import Navbar from '@/components/layouts/Navbar'
import Card from '@/components/layouts/Card'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center pt-3">
        <div>{t('common:hello')}</div>
        <div>{t('common:bilingual')}</div>
      </section>
      <section>
        <Card article={'transistor'} link={true} />
      </section>
    </div>
  )
}
