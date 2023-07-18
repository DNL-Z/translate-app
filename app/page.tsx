'use client'

import Card from '@/components/elements/Card'

import styles from '@styles/page.module.css'
import styled from '@emotion/styled'

export default function Home() {
  return (
    <>
      <HomeCardTitles>
        <div className={styles.hello}>Hello World ⚛︎</div>
        <div className={styles.worry}>Don’t worry, we are bilingual here!</div>
      </HomeCardTitles>
      <HomeCardContainer>
        <Card title="English" id="en"></Card>
        <Card title="French" id="fr"></Card>
        <Card title="Russian" id="ru"></Card>
      </HomeCardContainer>
    </>
  )
}

const HomeCardTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HomeCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`
