'use client'

import BackButton from '@/components/elements/BackButton'
import useTranslation from 'next-translate/useTranslation'

import styled from '@emotion/styled'

export default function Language() {
  const { t } = useTranslation()

  return (
    <>
      <Container>
        <BackButton />
        <Title>{t('home:title')}</Title>
        <Description>{t('home:description')}</Description>
      </Container>
    </>
  )
}

// CSS
const Container = styled.div`
  width: 80%;
  padding: 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  text-align: justify;
  padding: 2rem;
`

const Description = styled.div`
  text-align: justify;
`
