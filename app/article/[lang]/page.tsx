'use client'

import BackButton from '@/components/elements/BackButton'
import useTranslation from 'next-translate/useTranslation'

export default function Language() {
  const { t } = useTranslation()

  return (
    <>
      <div>
        <div>{t('home:title')}</div>
        <div>{t('home:description')}</div>
        <BackButton />
      </div>
    </>
  )
}
