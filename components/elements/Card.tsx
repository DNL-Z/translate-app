import styled from '@emotion/styled'
import Link from 'next/link'

interface Props {
  title: string
  id: string
}

export default function Card(props: Props) {
  const { title, id } = props

  return (
    <Link href={`/article/${id}`}>
      <Content>{title}</Content>
    </Link>
  )
}

// CSS
const Content = styled.button`
  width: 100%;
  font-size: 2rem;
  line-height: 4rem;
  padding: 1rem;
  border: 1px solid white;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  box-shadow: 0 0 20px darkred;
  transition-duration: 0.3s;

  &:hover {
    cursor: pointer;
    background: linear-gradient(0deg, darkred, black);
    box-shadow: 0 0 50px darkred;
    transition-duration: 0.3s;
  }
`
