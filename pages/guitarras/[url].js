import Image from "next/image"
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'



const Producto = ({guitarra}) => {

  const {descripcion, imagen, nombre, precio} = guitarra.attributes

  return (
    <Layout
        pagina={`Guitarra ${nombre}`}
    >
        <div className={styles.guitarra}>
            <Image  layout="responsive" width={180} height={350} src={imagen.data.attributes.url} alt={`Imagen guitarra ${nombre}`}/>
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>

                <form className={styles.formulario}>
                    <label htmlFor="">Cantidad:</label>

                    <select name="" id="">
                        <option value="">--Seleccione --</option>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="1">5</option>
                        <option value="1">6</option>
                        <option value="1">7</option>
                    </select>

                    <input type="submit" 
                            value="Agregar al carrito"
                            />
                </form>

            </div>
        </div>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}){

    const urlGuitarra = `${process.env.API_URL}/api/guitarras/?populate=imagen&filters[url][$eq]=${url}`
    const respuesta = await fetch(urlGuitarra)
    const {data} = await respuesta.json()


    return {
        props:{
            guitarra : data[0]
        }
    }
}

export default Producto