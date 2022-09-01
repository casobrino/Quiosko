import Image from "next/dist/client/image";
import { formatearDinero } from '../helpers';
import useQuiosco from "../Hooks/UseQuiosco";
const Producto = ({ producto }) => {
    const { nombre, imagen, precio } = producto
    const { handleSetProducto, handleChangeModal } = useQuiosco()
    return (
        <div className="border p-3">
            <Image src={`/assets/img/${imagen}.jpg`} alt={`Imagen Platillo ${nombre}`}
                width={400}
                height={500}
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-400">
                    {formatearDinero(precio)}
                </p>
                <button type="button" className="bg-indigo-600 hover:bg-indigo-800 w-full mt-5 p-3 uppercase font-bold text-white" onClick={() => {
                    handleChangeModal()
                    handleSetProducto(producto)
                }}>
                    Agregar
                </button>
            </div>
        </div>
    );
}

export default Producto;