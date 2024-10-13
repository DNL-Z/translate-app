import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export default function BackButton() {
  const { t } = useTranslation()

  return (
    <div className="m-3 flex flex-col items-center pt-3">
      <Link
        href={'/'}
        className="rounded border border-red-800 bg-transparent px-4 py-2 font-semibold text-red-800 hover:border-transparent hover:bg-red-800 hover:text-white"
      >
        <div>{t('common:back-home')}</div>
      </Link>
    </div>
  )
}
