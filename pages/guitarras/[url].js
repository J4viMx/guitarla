import { useState } from "react"
import Image from "next/image"
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'



const Producto = ({guitarra, agregarCarrito}) => {

    const [cantidad, setCantidad] = useState(1)

  const {descripcion, imagen, nombre, precio} = guitarra.attributes

  const {id} = guitarra

  const handleSubmit = e =>{
    e.preventDefault()

    if(cantidad < 1){
        alert('Cantidad no válida')
        return
    }

    //Agregar al carrito
    const guitarraSeleccionada = {
        id, 
        imagen: imagen.data.attributes.url,
        nombre,
        precio,
        cantidad
    }

    agregarCarrito(guitarraSeleccionada)

  }

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

                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <label htmlFor="">Cantidad:</label>

                    <select value={cantidad} onChange={e => setCantidad(parseInt(e.target.value) )}>
                        <option value="">--Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
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