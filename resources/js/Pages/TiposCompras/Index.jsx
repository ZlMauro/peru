import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, useForm, Head } from "@inertiajs/inertia-react";
import MenuOpciones from "../../Components/Menu_opciones/MenuOpciones";
import "./Index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";

/*Toast*/
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "../../../css/estilos-toast.css";
import "../../../css/font-unicolor.css";
/*Toast*/

const Index = ({ auth, tiposcompras }) => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastIcon, setToastIcon] = useState("");
    const [fakeSectores, setFakeSectores] = useState(tiposcompras);
    const [sectores, setSectores] = useState(tiposcompras);
    const [showSegmento, setShowSegmento] = useState(false);
    const [showActividadEconomica, setShowActividadEconomica] = useState(false);
    const [selectedSegmento, setSelectedSegmento] = useState(0);
    const [selectedActividadEconomica, setSelectedActividadEconomica] =
        useState(0);
    const [inputTiposCompras, setInputTiposCompras] = useState({
        id: 0,
        nombre: "",
    });
    const [segmentos, setSegmentos] = useState([]);
    const [actividadesEconomicas, setActividadesEconomicas] = useState([]);
    const [showModalActividadEconomica, setShowModalActividadEconomica] =
        useState(false);
    const handleCloseModalActividadEconomica = () =>
        setShowModalActividadEconomica(false);
    const handleShowModalActividadEconomica = () => {
        if (inputTiposCompras.id != 0) {
            setShowModalActividadEconomica(true);
        } else {
            setToastMessage("Debes seleccionar una opcion");
            setToastIcon("icon-error");
            setShowToast(true);
        }
    };
    const editTiposCompras = () => {
        if (inputTiposCompras.id != 0) {
            window.location.replace(
                "/tiposcompras/" + inputTiposCompras.id + "/edit"
            );
        } else {
            setToastMessage("Debes seleccionar una opcion");
            setToastIcon("icon-error");
            setShowToast(true);
        }
    };

    const getSegmento = (parent) => {
        //setSectores(fakeSectores);
        const input_filter = parent;
        const pattern = new RegExp(input_filter, "i");
        const FilteredActividadesEcomomicas = fakeSectores.filter(function (
            el
        ) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });
        setSegmentos(FilteredActividadesEcomomicas);
        setShowSegmento(!showSegmento);
        setSelectedSegmento(parent);
    };

    const getTiposCompras = (parent) => {
        //setSectores(fakeSectores);
        const pattern = new RegExp(parent, "i");
        const FilteredActividadesEcomomicas = fakeSectores.filter(function (
            el
        ) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });
        setActividadesEconomicas(FilteredActividadesEcomomicas);
        setShowActividadEconomica(!showActividadEconomica);
        setSelectedActividadEconomica(parent);
    };

    const checked = (actividad_economica) => {
        /*     console.log(actividad_economica) */
        setInputTiposCompras(actividad_economica);
        /* console.log(inputTiposCompras) */
    };

    const filterTiposCompras = (e) => {
        const pattern = new RegExp(e.target.value, "i");
        const FilteredActividadesEcomomicas = fakeSectores.filter(function (
            el
        ) {
            if (pattern.test(el.nombre)) {
                return el;
            }
        });
        setSectores(FilteredActividadesEcomomicas);
        setShowActividadEconomica(!showActividadEconomica);
    };

    const deleteTiposCompras = () => {
        fetch("/tiposcompras/" + inputTiposCompras.id + "/delete")
            .then((response) => response.json())
            .then((data) => {
                if (data.type == "Success") {
                    setToastIcon("icon-check");
                    var new_data = actividadesEconomicas.filter(
                        (ae) => ae.id != inputTiposCompras.id
                    );
                    setActividadesEconomicas(new_data);
                } else {
                    setToastIcon("icon-error");
                }
                setToastMessage(data.message);
                setShowToast(true);
                setShowModalActividadEconomica(false);
            });
    };
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Localización" />
            <ToastContainer position="bottom-start">
                <Toast
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    delay={3000}
                    autohide
                >
                    <div
                        className={`notification-toast ${
                            toastIcon == "icon-error" ? "error" : "success"
                        }`}
                    >
                        <span
                            className={`toast-icon ${
                                toastIcon == "icon-error"
                                    ? "toast-danger"
                                    : "toast-success"
                            }`}
                        >
                            <span className={toastIcon}></span>
                        </span>
                        <p className="title">{toastMessage}</p>
                        <button
                            type="button"
                            className="icon-close m-auto"
                            onClick={() => setShowToast(false)}
                        />
                    </div>
                </Toast>
            </ToastContainer>
            <div className="contenedor-planes">
                <div className="posicion-opciones-planes">
                    <MenuOpciones />
                </div>
                <div className="bg-white overflow-auto w-full text-center margen-superior">
                    <h2 className="name_section_app">Tipos Compras</h2>
                    <div className="container mt-4">
                        <div className="tree_categorias tree_1">
                            <div className="tree_categorias__busqueda mb-3 mb-md-4">
                                <div className="mx-auto">
                                    <input
                                        type="text"
                                        placeholder="Buscar tipo de compra en Chile"
                                        autoComplete="off"
                                        className="form-control m-auto"
                                        onChange={filterTiposCompras}
                                    />
                                    <i className="icon-Cancelar"></i>
                                    <button
                                        type="button"
                                        className="icon-Buscar-click"
                                    >
                                        <i className="bi bi-search"></i>
                                    </button>

                                    {sectores.map((sector) => (
                                        <>
                                            {sector.id_padre_sub_categoria ==
                                                null && (
                                                <>
                                                    <div
                                                        className="tree-content mt-3 sector"
                                                        key={sector.id}
                                                        onClick={() =>
                                                            getSegmento(
                                                                sector.id
                                                            )
                                                        }
                                                    >
                                                        <i
                                                            className={`tree-arrow has-child ${
                                                                sector.childs
                                                                    .length > 0
                                                                    ? "bi bi-chevron-down"
                                                                    : ""
                                                            }`}
                                                        ></i>
                                                        <span className="tree-anchor">
                                                            <span className="tree-division tree-division1">
                                                                <span className="tree-division__title my-auto">
                                                                    {
                                                                        sector.nombre
                                                                    }
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    {showSegmento &&
                                                        sector.id ==
                                                            selectedSegmento && (
                                                            <ul className="tree-children">
                                                                {segmentos.map(
                                                                    (
                                                                        segmento
                                                                    ) => (
                                                                        <li
                                                                            data-id="20504"
                                                                            className="tree-node has-child expanded draggable"
                                                                        >
                                                                            <div
                                                                                className="tree-content segmento"
                                                                                onClick={() =>
                                                                                    getTiposCompras(
                                                                                        segmento.id
                                                                                    )
                                                                                }
                                                                            >
                                                                                <i className="tree-arrow expanded has-child ltr"></i>
                                                                                {/* <i className="tree-checkbox"></i> */}
                                                                                <input
                                                                                    type="radio"
                                                                                    name="actividad_economica"
                                                                                    onClick={() =>
                                                                                        checked(
                                                                                            segmento
                                                                                        )
                                                                                    }
                                                                                    checked={
                                                                                        segmento.id ==
                                                                                        inputTiposCompras.id
                                                                                            ? "checked"
                                                                                            : ""
                                                                                    }
                                                                                />

                                                                                {/* {()=>console.log()} */}
                                                                                <span className="tree-anchor">
                                                                                    <span className="tree-division tree-division1">
                                                                                        <span className="tree-division__title my-auto">
                                                                                            {
                                                                                                segmento.nombre
                                                                                            }
                                                                                        </span>
                                                                                    </span>
                                                                                </span>
                                                                            </div>

                                                                            {showActividadEconomica &&
                                                                                selectedActividadEconomica ==
                                                                                    segmento.id && (
                                                                                    <ul className="tree-children">
                                                                                        {actividadesEconomicas.map(
                                                                                            (
                                                                                                childs
                                                                                            ) => (
                                                                                                <li className="tree-node draggable">
                                                                                                    <div
                                                                                                        className="tree-content actividad-economica"
                                                                                                        onClick={() =>
                                                                                                            checked(
                                                                                                                childs
                                                                                                            )
                                                                                                        }
                                                                                                    >
                                                                                                        <span className="tree-anchor children">
                                                                                                            <span className="tree-division tree-division1">
                                                                                                                <span className="tree-division__title my-auto">
                                                                                                                    {
                                                                                                                        childs.nombre
                                                                                                                    }
                                                                                                                </span>
                                                                                                            </span>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </li>
                                                                                            )
                                                                                        )}
                                                                                    </ul>
                                                                                )}
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        )}
                                                </>
                                            )}
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Modal
                            show={showModalActividadEconomica}
                            onHide={handleCloseModalActividadEconomica}
                            id="removeActividadEconomica"
                            className="modal-dialog-centered"
                        >
                            <Modal.Header id="removeActividadEconomicaHeader">
                                <h5 className="modal-title">Eliminar</h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    onClick={handleCloseModalActividadEconomica}
                                ></button>
                            </Modal.Header>
                            <Modal.Body id="removeActividadEconomicaBody">
                                <p>
                                    Desea eliminar la comuna{" "}
                                    {inputTiposCompras.nombre}?
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <button
                                    type="submit"
                                    className="btn btnRadius btn-new-blue mr-2"
                                    onClick={handleCloseModalActividadEconomica}
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={deleteTiposCompras}
                                    className="btn btnRadius btn-new-red ml-2"
                                >
                                    Eliminar
                                </button>
                            </Modal.Footer>
                        </Modal>

                        <div className="botones">
                            <Nav.Link
                                href={route("createTiposCompras")}
                                className="flex  ml-4 text-probar "
                            >
                                <i className="bi bi-plus-square-fill"></i>
                            </Nav.Link>
                            <Nav.Link
                                onClick={editTiposCompras}
                                className="flex  ml-4 text-probar "
                            >
                                <i className="bi bi-pencil-fill"></i>
                            </Nav.Link>
                            <Nav.Link
                                onClick={handleShowModalActividadEconomica}
                                className="flex  ml-4 text-probar "
                            >
                                <i className="bi bi-trash3"></i>
                            </Nav.Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
