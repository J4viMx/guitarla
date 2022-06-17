import Layout from '../components/Layout'

import styles from '../styles/Nosotros.module.css'
import Image from 'next/image'

const Nosotros = () => {
  return (

        <Layout
            pagina='Nosotros'
        >
            <main className='contenedor'>
              <h2 className='heading'>Nosotros</h2>

              <div className={styles.contenido}>
                <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre nosotros'/>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, suscipit unde, quisquam nostrum quidem itaque impedit illo magnam dicta consectetur enim deleniti ipsum possimus tempora odit harum odio temporibus debitis illum quasi dolorum ducimus saepe. Saepe impedit voluptatibus doloribus nulla cupiditate ipsam deserunt nostrum quaerat quis nisi porro ut, dolore voluptas dolores sed alias quam provident, fugit culpa quos amet explicabo. Dolorum similique rerum asperiores tenetur error aliquam minima deleniti delectus odio mollitia, hic, expedita quaerat corrupti fuga voluptas veritatis iure suscipit quis distinctio repudiandae nihil nulla officia veniam? Blanditiis, nulla ratione. Molestias sit autem suscipit nobis in reprehenderit ut.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, suscipit unde, quisquam nostrum quidem itaque impedit illo magnam dicta consectetur enim deleniti ipsum possimus tempora odit harum odio temporibus debitis illum quasi dolorum ducimus saepe. Saepe impedit voluptatibus doloribus nulla cupiditate ipsam deserunt nostrum quaerat quis nisi porro ut, dolore voluptas dolores sed alias quam provident, fugit culpa quos amet explicabo. Dolorum similique rerum asperiores tenetur error aliquam minima deleniti delectus odio mollitia, hic, expedita quaerat corrupti fuga voluptas veritatis iure suscipit quis distinctio repudiandae nihil nulla officia veniam? Blanditiis, nulla ratione. Molestias sit autem suscipit nobis in reprehenderit ut.</p>
                </div>

              </div>
            </main>
        </Layout>
  )
}

export default Nosotros