import React from 'react'

import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import i18nConfig from '../../i18n.json'

const { locales } = i18nConfig

export default function ChangeLanguage() {
  const { t, lang } = useTranslation()

  return locales.map((lng) => {
    if (lng === lang) return null

    return (
      <Link
        className="m-1 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        href={`/article/${lng}`}
        // locale={lng}
        key={lng}
      >
        {t(`common:${lng}`)}
      </Link>
    )
  })
}
