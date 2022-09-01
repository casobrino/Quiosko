import { useRouter } from 'next/router'

//Se crea el routering como variable
const pasos = [
    { paso: 1, nombre: "Menu", url: '/' },
    { paso: 2, nombre: "Resumen", url: '/resumen' },
    { paso: 3, nombre: "Datos y total", url: '/total' }
]
const Pasos = () => {

    const router = useRouter();
    const calcularProgreso = () => {
        let valor;
        if (router.pathname == '/') {
            valor = 5
        } else if (router.pathname == '/resumen') {
            valor = 50
        } else {
            valor = 100
        }
        return valor
        //console.log(porcentaje);
    }
    return (
        <>
            <div className="flex justify-between mb-6">
                {pasos.map((paso) => (
                    <button
                        onClick={() => {
                            router.push(paso.url)
                        }}
                        className=" text-2xl font-bold"
                        key={paso.paso}
                    >
                        {paso.nombre}
                    </button>
                ))}</div>
            <div className="bg-gray-100 mb-10">
                <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10"
                    style={{ width: `${calcularProgreso()}%` }}>

                </div>
            </div>
        </>
    );
}

export default Pasos;