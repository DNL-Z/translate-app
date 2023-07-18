import React from 'react'

import Link from 'next/link'
import styled from '@emotion/styled'

interface Props {
  title: string
  id: string
}

export default function Card(props: Props) {
  const { title, id } = props

  return (
    <MagicButton>
      <Link href={`/${title.replace(/\s/g, '_').toLowerCase()}`}>
        <Content id={id}>{title}</Content>
      </Link>
    </MagicButton>
  )
}

// CSS
const MagicButton = styled.div``

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
    background: linear-gradient(0deg, darkred, black);
    box-shadow: 0 0 50px darkred;
    transition-duration: 0.3s;
  }
`
