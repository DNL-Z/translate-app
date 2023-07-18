import Link from 'next/link'
import styled from '@emotion/styled'

export default function BackButton() {
  return (
    <>
      <Button>
        <Link href="/">Back home</Link>
      </Button>
    </>
  )
}

// CSS
const Button = styled.div`
  width: 15%;
  background: red;
  border-radius: 3rem;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
