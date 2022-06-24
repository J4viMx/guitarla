
import Layout from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog'


const Blog = ({entradas}) => {

  return (

        <Layout
            pagina='Blog Virtual'
        >
            <main className='contenedor'>
              <ListadoBlog
                entradas = {entradas}
              />
            </main>
        </Layout>
  )
}

export async function getStaticProps(){

  const url = `${process.env.API_URL}/api/blogs?populate=imagen`
  
  const respuesta = await fetch(url)
  const {data} = await respuesta.json()

  

  return{
    props: {
      entradas: data
    }
  }

}

export default Blog