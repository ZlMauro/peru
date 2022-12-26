import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/inertia-react";
import MenuOpciones from "../../Components/Menu_opciones/MenuOpciones";
import Paginador from "@/Components/Paginador";
import "../../../css/estilos-contratos-index.css";
import "../../../css/estilos-usuarios-index.css";

const Index = ({ auth, usuarios }) => {
    /* paginador*/

    const itemsPagina = 30;

    const totalElementos = usuarios.length;

    const totalPaginas = parseInt(totalElementos / itemsPagina) + 1;

    const [datos, setDatos] = useState(usuarios);

    const [items, setItems] = useState([...usuarios].splice(0, itemsPagina));

    const [currentPage, setCurrentPage] = useState(0);

    const nextHandler = () => {
        const nextPage = currentPage + 1;

        const firstIndex = nextPage * itemsPagina;

        if (firstIndex >= totalElementos) return;

        setItems([...datos].splice(firstIndex, itemsPagina));

        setCurrentPage(nextPage);
    };

    const prevHandler = () => {
        const prevPage = currentPage - 1;

        if (prevPage < 0) return;

        const firstIndex = prevPage * itemsPagina;

        setItems([...datos].splice(firstIndex, itemsPagina));

        setCurrentPage(prevPage);
    };

    /* end  paginador */
    const { data, setData, post, processing, reset, errors } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        //console.log(data)
        post(route("usuarios.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Usuarios" />
            <div className="contenedor-contratos">
                <MenuOpciones />
                <div className="alto-tabla bg-white overflow-auto ">
                    <div className="usuarios">
                        <div className="contenedor-botones">
                            <a
                                className="autorenew"
                                href="javascript:location.reload()"
                            >
                                <span className="material-symbols-outlined actualizar-color">
                                    autorenew
                                </span>
                            </a>
                            <a
                                className="add_circle"
                                href={route("usuarios.create")}
                            >
                                <span className="material-symbols-outlined material-symbols-outlined-color">
                                    add_circle
                                </span>
                            </a>
                        </div>
                        <div className="margen-titulo">Usuarios</div>
                        <div></div>
                    </div>

                    <table className="w-full bg-white border tabla ">
                        <thead
                            className="cabecera-tabla "
                            style={{ backgroundColor: "#00a1c9" }}
                        >
                            <tr className="bg-paginador text-white uppercase leading-normal">
                                <th>Acciones</th>
                                <th># Documento</th>
                                <th>Nombre</th>
                                <th>País</th>
                                <th>Ciudad</th>
                                <th>Dirección</th>
                                <th>indicativo</th>
                                <th>Celular</th>
                                <th>teléfono fijo</th>
                                <th>Email</th>
                                <th>Plan</th>
                                {/* <th>Email confirmado</th> */}
                                <th>Creacion</th>
                                <th>Final Plan</th>
                                <th>Estado</th>
                                <th>Como se entero de Licitaciones</th>
                                <th>NIT</th>
                                <th>Empresa</th>
                                <th>País empresa</th>
                                <th>Ciudad empresa</th>
                                <th>Dirección empresa</th>
                                <th>Indicativo empresa</th>
                                <th>Celular empresa</th>
                                <th>Telefono fijo empresa</th>
                                <th>Email empresa</th>
                                <th>Actividad economica</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {items.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td className="border border-gray-200 text-left px-4 ">
                                        <div className="iconos-horizontal">
                                            <div className="estilos-boton-eliminar">
                                                <a href="">
                                                    <span className="material-symbols-outlined">
                                                        delete
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="estilos-boton-editar">
                                                <a
                                                    href={
                                                        route(
                                                            "usuarios.update",
                                                            usuario.id
                                                        ) + "/edit"
                                                    }
                                                >
                                                    <span className="material-symbols-outlined">
                                                        edit
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="estilos-boton-email">
                                                <span className="material-symbols-outlined">
                                                    mail
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.identificacion}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.nombre_completo}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.pais}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.ciudad}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.direccion}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.indicativo}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.celular}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.telefono_fijo}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.email}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.idplan}
                                    </td>
                                    {/* <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.email_verified_at}
                                    </td> */}
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.created_at.substr(0, 10)}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.fecha_vencimiento}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.estado}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.origen}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.nit_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.nombre_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.pais_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.ciudad_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.direccion_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.indicativo_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.celular_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.telefono_fijo_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {usuario.email_facturacion_empresa}
                                    </td>
                                    <td className="border border-gray-200 text-left margen-textos">
                                        {
                                            usuario.descripcion_actividad_economica
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <Paginador
                        nextHandler={nextHandler}
                        prevHandler={prevHandler}
                        currentPage={currentPage}
                        itemsPagina={itemsPagina}
                        totalElementos={totalElementos}
                        totalPaginas={totalPaginas}
                    ></Paginador>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
