import Link from 'next/link'
import styled from '@emotion/styled'

export default function BackButton() {
  return (
    <>
      <Link href={'/'}>
        <Content>Back home</Content>
      </Link>
    </>
  )
}

// CSS
const Content = styled.div`
  background: red;
  border-radius: 3rem;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
