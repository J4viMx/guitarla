import Layout from '../components/Layout'
import Listado from '../components/Listado'


const Tienda = ({guitarras}) => {

  console.log(guitarras)
  return (
    <Layout
        pagina='Tienda Virtual'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra colección</h1>
        <Listado
          guitarras= {guitarras}
        />
      </main>
    </Layout>
  )
}


export async function getServerSideProps(){
  const url = `${process.env.API_URL}/api/guitarras?populate=imagen`
  const respuesta = await fetch(url)
  const {data} = await respuesta.json()

  return{
    props:{
      guitarras : data
    }
  }
}

export default Tienda