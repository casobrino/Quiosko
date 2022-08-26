import { useState, useEffect, createContext } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
    //Use state para modificar la primera carga
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})

    //Hace una consulta axios a la api
    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias') //Data viene del Json
        setCategorias(data) //Rellena el arreglo
    }

    //Llena el arreglo con las categorias
    useEffect(() => {
        obtenerCategorias()
    }, [])

    //Selecciona una categoria por default
    useEffect(() => {
        setCategoriaActual(categorias[0]) //asigna la llave 0
    }, [categorias]) 

    //Metodo para obtener la categoria seleecionada
    const handleClicCategoria = id => {
        const categoria = categorias.filter(cate => cate.id === id)
        setCategoriaActual(categoria[0]);
    }

    return (
        //Envia los datos generales al provaider
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClicCategoria
            }}
        >
            {children} 
        </QuioscoContext.Provider>
        //Children es todo lo que no le envias
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext