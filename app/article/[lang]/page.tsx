'use client'

import Card from '@/components/layouts/Card'

export default function Article() {
  return (
    <div>
      <Card article={'transistor'} link={false} />
      <Card article={'toto'} link={false} />
    </div>
  )
}
