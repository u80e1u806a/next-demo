import {useQuery} from '@tanstack/react-query'

function fetchHello() {
  // return await (await fetch('/api/hello')).json()
  return fetch('/api/hello').then(data => data.json())
}

export default function Home() {
  const {data, isLoading} = useQuery({
    queryKey: ['hello'],
    queryFn: fetchHello

  })
  if (isLoading) return 'loading'
  return (
    <>
      Hello {data?.name ?? ''}
    </>
  )
}
