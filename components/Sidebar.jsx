import Image from "next/image";
import useQuiosco from "../Hooks/UseQuiosco";
import Categoria from "./Categoria";

const Sidebar = () => {
    //Hace una consulta para obtener informacion
    const { categorias } = useQuiosco()
    return (
        <>
            <Image width={300} height={100} src="/assets/img/logo.svg" alt="Logo" />

            <nav className="mt-10">
                {categorias.map(categoria => (//itera en el arreglo de categorias
                    //envia la iteracion a cada categoria para mostrar
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </nav>
        </>
    );
}

export default Sidebar;