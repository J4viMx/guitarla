
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'


export default function Home({guitarras, curso, entradas}) {
  console.log(guitarras)
  return (
      <Layout
        pagina='Inicio'
        guitarra={guitarras.data[3].attributes}
      >
        <main className='contendor'>
          <h1 className='heading'>Nuestra colección</h1>
          <Listado 
            guitarras={guitarras.data}
          />
        </main>

        <Curso
        curso = {curso.data}
        />
        <section className='contenedor'>
          <ListadoBlog 
          entradas={entradas.data}
          />
        </section>
      </Layout>
  )
}


export async function getServerSideProps(){

  const urlGuitarras = `${process.env.API_URL}/api/guitarras?populate=imagen`
  const urlCursos = `${process.env.API_URL}/api/curso?populate=imagen`
  const urlBlog = `${process.env.API_URL}/api/blogs?pagination[limit]=3&populate=imagen`

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch (urlGuitarras),
    fetch (urlCursos),
    fetch(urlBlog)
  ])

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()
  ])

  return{
    props:{
      guitarras,
      curso,
      entradas
    }
  }
}