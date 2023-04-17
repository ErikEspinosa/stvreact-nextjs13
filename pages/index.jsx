import Card from '../components/Card/Card'

export default function Home({ cards }) {
  if (!cards) {
    return (
      <h1>Cargando...</h1>
    )
  }

  return (
      <div className='carrousel'>
        {
          cards.map((card) => 
            <Card 
              key={card.id}
              imageUrl={card.image_large}
              caption={card.title}
            />
          )
        }
      </div>
  )
}

export async function getServerSideProps() {
  const url = 'https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=rrscut2td9j0v73m68jrf3k665&quantity=50&from=0&level_id=GPS&order_way=ASC&order_id=50&filter_id=34270'
  const res = await fetch(url)
  const data = await res.json()

  return { props: { cards: data.response.groups } }
}