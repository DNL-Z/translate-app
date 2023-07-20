'use client'

import BackButton from '@/components/elements/BackButton'
import useTranslation from 'next-translate/useTranslation'

import styled from '@emotion/styled'

export default function Language() {
  const { t, lang } = useTranslation()

  return (
    <>
      <BackButton />
      <PageContainer>{t('home:title')}</PageContainer>
      <PageContainer>{t('home:description')}</PageContainer>
    </>
  )
}

// CSS
const PageContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
