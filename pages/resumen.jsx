import Layout from "../layout/Layout"
import useQuiosco from "../Hooks/UseQuiosco"
import ResumenProducto from "../components/ResumenProducto"
export default function Resumen() {
    const { pedido } = useQuiosco()
    return (
        <Layout pagina='Resumen'>
            <h1 className="text-4xl font-black">Resumen</h1>
            <div className="text-3xl my-10">{pedido.length === 0 
            ? <p className="text-center text-2xl">No hay elementos en tu pedido</p> 
            : pedido.map(producto => (
                <ResumenProducto
                    key={producto.id}
                    producto={producto}
                />
            ))}</div>
        </Layout>
    )
}