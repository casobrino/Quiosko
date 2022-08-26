import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Layout({ children, pagina }) {
    return (
        <>
            {/*Define la estructura, que tanto tendra el Lyout*/}
            {/*Esta es la cabecera para todas las pestanias*/}
            <Head>
                <title>Cafe - {pagina}</title>
                <meta name="description" content="Quiosco Cafeteria" />
            </Head>

            {/*Contenedor principal*/}
            <div className="md:flex">
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                    {/*Llamma el componente Sidebar*/}
                    <Sidebar />
                </aside>
                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className="p-10">
                        {children}
                    </div>
                </main>
            </div>
        </>

    )
}