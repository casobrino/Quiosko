import Image from "next/image"
import { formatearDinero } from '../helpers/'
const ResumenProducto = ({ producto }) => {

    return (
        <div className="shadow p-5 mb-3 flex gap-10 tiems-center">
            <div className="md:w-1/6" >
                <Image
                    width={400}
                    height={500}
                    alt={`Imagen de producto ${producto.nombre}`}
                    src={`/assets/img/${producto.imagen}.jpg`}
                />
            </div>
            <div className="md:w-5/6" >
                <p className="text-3xl font-bold">{producto.nombre}</p>
                <p className="text-xl font-bold mt-2">Cantidad: {producto.cantidad}</p>
                <p className="text-xl font-bold text-amber-500 mt-2">Precio: {formatearDinero(producto.precio)}</p>
                <p className="text-xl font-bold text-grey-300 mt-2">Subtotal: {formatearDinero(producto.precio * producto.cantidad)}</p>
            </div>


        </div >
    );
}

export default ResumenProducto;
