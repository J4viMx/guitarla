
import Layout from '../components/Layout'
import Entrada from '../components/Entrada'
import styles from '../styles/Blog.module.css'


const Blog = ({entradas}) => {

  return (

        <Layout
            pagina='Blog Virtual'
        >
            <main className='contenedor'>
              <h2 className='heading'>Blog</h2>
              <div className={styles.blog}>
                {entradas.map(entrada => (
                  <Entrada
                    key={entrada.id}
                    entrada={entrada}
                  />
                ))}
              </div>
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