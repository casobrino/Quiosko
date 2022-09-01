import { useEffect, useCallback } from "react";
import Layout from "../layout/Layout"
import useQuiosco from "../Hooks/UseQuiosco";
import { formatearDinero } from '../helpers/index'

export default function Total() {
    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === ''
    }, [pedido, nombre]);

    useEffect(() => {
        comprobarPedido();
    }, [pedido], comprobarPedido)

    return (
        <Layout pagina='Total y confirmar pedido'>
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-3xl my-10">Confirma tu pedido a continuacion</p>

            <form
                onSubmit={colocarOrden}
            >
                <div className="">
                    <label
                        htmlFor="nombre"
                        id="nombre"
                        className="block uppercase text-slate-800 font-bold text-xl"
                    >
                        Nombre
                    </label>
                    <input
                        type="text"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                    <div className="mt-10">
                        <p className="text-2xl">
                            Texto total a pagar: {' '} <span className="font-bold">{formatearDinero(total)}</span>

                        </p>
                    </div>
                </div>
                <div className="mt-5">
                    <input
                        type='submit'
                        className={`${comprobarPedido()
                            ? 'bg-indigo-100'
                            : 'bg-indigo-600 hover:bg-indigo-800'
                            }  w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                        value="Confirmar Pedido"
                        disabled={comprobarPedido()}
                    />
                </div>
            </form>
        </Layout >
    )
}