import Layout from '../layout/Layout';
import Producto from '../components/Producto'
import useQuiosco from '../Hooks/UseQuiosco';


export default function Home() {
  //para tener la funcion global obtener categoria
  const { categoriaActual } = useQuiosco();

  return (
    //Asigna titulo a la ventana del explorador
    //**Importante colocar el optional changer ? por que inicia vacio */
    <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
      <h1 className='text-4xl font-black '>{categoriaActual?.nombre}</h1>
      <p className='text-2xl my-10'>Elige y personaliza tu pedido acontinuacion</p>

<div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">


      {categoriaActual?.productos?.map(producto => (
        <Producto key={producto.id} producto = {producto} />
        ))}
        </div>
    </Layout>
  );
}