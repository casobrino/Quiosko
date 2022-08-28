import { useState, useEffect } from "react";
import Image from "next/image";
import useQuiosco from "../Hooks/UseQuiosco";//Para hace uso del producro
import { formatearDinero } from "../helpers"; //Para mostrar dinero 

const ModalProducto = () => {
    //cerrar y abrir la ventana emergente. cambia de true a false y viceversa
    const { producto, handleChangeModal, handleAgregarPedido, pedido, } = useQuiosco();

    // Modifica la cnatidad que hat en el modal
    const [cantidad, setCantidad] = useState(1);

    const [edicion, setEdicion] = useState(false)

    useEffect(() => {
        //comprobar si hay pedidos existentes en el Modal
        if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
            //Actualiza el pedido
            const productoEdicion = pedido.find(
                (pedidoState) => pedidoState.id === producto.id
            )
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }
    }, [producto, pedido])

    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <Image
                    src={`/assets/img/${producto.imagen}.jpg`}
                    width={300}
                    height={400}
                    alt={`Imagen del producto ${producto.nombre}`}
                />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={handleChangeModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    </button>
                </div>
                <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
                {/* para hacer uso del seteo del dinero */}
                <p className="mt-5 font-black text-5xl text-amber-540">
                    {formatearDinero(producto.precio)}
                </p>
                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() => {
                            //Evita que se agregen productos negativos
                            if (cantidad <= 1) return
                            //reduce la cantidad del modal en 1
                            setCantidad(cantidad - 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <p className="text-3xl">{cantidad}</p>
                    <button
                        onClick={() => {
                            //evita que haya mas de 6 productos en el carrito
                            if (cantidad >= 6) return
                            //aumenta la cantidad del modal en 1
                            setCantidad(cantidad + 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>
                </div>
                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white px-5 py-2 mt-5 font-bold uppercase rounded"
                    //funcion para agregar la cantidad de producto como objeto
                    onClick={() => handleAgregarPedido({
                        ...producto, //envia state producto
                        cantidad //envia state cantidad
                    })}
                >
                    {edicion ? 'Guardar Cambios' : 'Aniadir al pedido'}
                </button>
            </div>
        </div>
    );
}

export default ModalProducto;