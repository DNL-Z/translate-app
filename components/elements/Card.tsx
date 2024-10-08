import Link from 'next/link'

interface Props {
  title: string
  id: string
}

export default function Card(props: Props) {
  const { title, id } = props

  return (
    <Link href={`/article/${id}`}>
      <div>{title}</div>
    </Link>
  )
}
