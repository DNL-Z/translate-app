'use client'

import Card from '@/components/elements/Card'

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <div>Hello World ⚛︎</div>
        <div>Don’t worry, we are bilingual here!</div>
      </div>
      <div>
        <Card title="English" id="en"></Card>
        <Card title="French" id="fr"></Card>
        <Card title="Russian" id="ru"></Card>
      </div>
    </div>
  )
}
