'use client'

import BackButton from '@/components/elements/BackButton'
import styled from '@emotion/styled'

export default function Russian() {
  return (
    <>
      <BackButton />
      <PageContainer>Russian</PageContainer>
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
