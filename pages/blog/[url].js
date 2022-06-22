import Image from "next/image"
import Layout from "../../components/Layout"
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {
  
  const {contenido, imagen, publishedAt, titulo} = entrada.attributes

  return (
    <Layout
      pagina={titulo}
    >
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image layout="responsive" width={800} height={600} src={imagen.data.attributes.url} alt={`Imagen entrada ${titulo}`} />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>

            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  )
}


export async function getStaticPaths(){
  const url = `${process.env.API_URL}/api/blogs`
  const resp = await fetch(url)
  const {data} = await resp.json()
  console.log(data);
  /* console.log(entradas); */
  const paths = data.map(entrada =>({
    params: { url : entrada.attributes.url}
    
  }))
  console.log(paths)
  return{
    paths,
    fallback: false
  }
}


export async function getStaticProps({params: {url}}){
  
  const urlBlog = `${process.env.API_URL}/api/blogs/?populate=imagen&filters[url][$eq]=${url}`
  const respuesta = await fetch(urlBlog)
  const {data} = await respuesta.json()

  console.log(data)
  
  return{


    
    props:{
      entrada: data[0]
    }
  }

/* export async function getServerSideProps({query: {id}}){
  
  const url = `${process.env.API_URL}/api/blogs/${id}?populate=imagen`
  const respuesta = await fetch(url)
  const {data} = await respuesta.json()

  console.log(data)
  
  return{


    
    props:{
      entrada: data
    }
  } */
} 

export default EntradaBlog