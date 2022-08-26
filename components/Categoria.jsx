import Image from "next/dist/client/image";
import useQuiosco from "../Hooks/UseQuiosco";

const Categoria = ({ categoria }) => {
    //Extrae lo props enviados del padre
    const { categoriaActual, handleClicCategoria } = useQuiosco()
    const { nombre, icono, id } = categoria

    return (
        //Define si algo no esta seleccionado para resaltar
        <div className={`${categoriaActual?.id === id ? `bg-amber-400`  : ''} flex border items-center gap-4 w-full p-5 hover:bg-amber-300`}>
            <Image
                width={70}
                height={70}
                src={`/assets/img/icono_${icono}.svg`}
                alt="Imagen Icono"
            />
            <button
                type="button"
                className="text-2xl font-bold hover:cursor-pointer"
                onClick={() => handleClicCategoria(id)}//Envia el id de la categoria para resaltarla

            >{nombre}</button>
        </div>
    );
}

export default Categoria;