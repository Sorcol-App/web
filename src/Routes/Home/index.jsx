import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HandsHome from '../../assets/hands-home.svg'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container pt-[80px]">
        <main className="w-full flex flex-col md:flex-row">
          <section className="flex flex-col justify-center md:max-w-[300px] md:mr-8">
            <h1 className="text-6xl">
              <span className="text-yellow-400">Aprende, practica y conecta</span> con la lengua de
              señas Colombiana
            </h1>
            <button className="primary text-2xl text-white my-8">
              <Link
                to={{
                  pathname: '/auth',
                }}
              >
                Ingresa ahora !
              </Link>
            </button>
          </section>
          <section className="w-full md:min-w-[400px]">
            <img src={HandsHome} alt="hands" />
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}
