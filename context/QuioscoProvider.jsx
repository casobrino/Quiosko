import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
    //Use state para modificar la primera carga
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])

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

    //Agregar producto para seleccionado
    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }


    //Se aplica el destrcturing a categoriaID e imagen para que nos e guarde en el state de producto
    const handleAgregarPedido = ({ categoriaId, ...producto }) => {
        //Evitar produictos repetidos
        if (pedido.some(productoState => productoState.id === producto.id)) {
            //si el priducto existe, se actualiza los pedidos
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState);
            setPedido(pedidoActualizado)
            toast.success('Pedido Actualizado');
        }
        else {
            //se agrega unicamente el pedido sin catId e imagen
            setPedido([...pedido, producto]);
            toast.success('Pedido agregado');
        }

        setModal(false)

    }

    const handleEditarCantidades = (id) => {
        const productoActualizar = pedido.filter(producto => producto.id === id)
        setProducto(productoActualizar[0])
        //Iniciamos el modal de nuevo para cambiarlo de estado
        setModal(!modal)
    }

    const handleEliminarProducto = (id) => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)

    }

    return (
        //Envia los datos generales al provaider
        <QuioscoContext.Provider
            value={{
                producto,
                categorias,
                categoriaActual,
                modal,
                pedido,
                handleClicCategoria,
                handleSetProducto,
                handleChangeModal,
                handleAgregarPedido,
                handleEditarCantidades,
                handleEliminarProducto
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