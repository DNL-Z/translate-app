'use client'

import Navbar from '@/components/layouts/Navbar'
import Card from '@/components/layouts/Card'
import BackButton from '@/components/elements/BackButton'

export default function Article() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="grid grid-cols-3 gap-3">
        <Card article={'transistor'} link={false} />
        <Card article={'transistor'} link={false} />
        <Card article={'transistor'} link={false} />
      </section>
      <section>
        <BackButton />
      </section>
    </div>
  )
}
