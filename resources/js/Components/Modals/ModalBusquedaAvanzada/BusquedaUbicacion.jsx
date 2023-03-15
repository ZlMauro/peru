import React, { useEffect, useState } from "react";
import "./BusquedaUbicacion.css";
import Modal from "react-bootstrap/Modal";

export const BusquedaUbicacion = ({
    showBusquedaUbicacion,
    handleCloseBusquedaUbicacion,
}) => {
    useEffect(() => {
        fetch("/localizacion/json")
            .then((response) => response.json()) // convertir a json
            .then((data) => {
                setSectores(data);
                setFakeSectores(data);
                setOpenSectores([]);
            }) //imprimir los datos en la consola
            .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores
    }, []);

    const onHandleSectores = ({ sectores }) => {};

    const [sectores, setSectores] = useState([]);
    const [fakeSectores, setFakeSectores] = useState([]);

    const [openSectores, setOpenSectores] = useState([]);
    const [openSegmentos, setOpenSegmentos] = useState([]);
    const [sectoresIds, setSectoresIds] = useState([]);

    useEffect(() => {
        var full_array = [];
        fakeSectores.forEach((sector) => {
            if (sector.childs.length > 0) {
                var array_segmentos = [];
                var array_tipos_compras = [];
                if (sector.id_padre_sub_categoria == null) {
                    //Sectores
                    sector.childs.forEach((segmento) => {
                        array_segmentos.push(segmento.id);
                        var segmento_object = fakeSectores.filter(
                            (sectores) => sectores.id == segmento.id
                        )[0];
                        if (segmento_object.childs.length > 0) {
                            segmento_object.childs.forEach((tipo_compra) => {
                                array_tipos_compras.push(tipo_compra.id);
                            });
                        }
                    });
                    full_array[sector.id] = ["sectores"];
                    full_array[sector.id]["segmentos"] = array_segmentos;
                    full_array[sector.id]["tipos_compras"] =
                        array_tipos_compras;
                }
            }
        });
        setSectoresIds(full_array);
        // console.log("esto es todo el array:", full_array);
    }, []);

    const [checksTiposCompras, setChecksTiposCompras] = useState([]);
    const [segmentos, setSegmentos] = useState([]);
    const [tiposCompras, setTiposCompras] = useState([]);

    const getSegmento = (parent) => {
        var dom_sector = document.getElementById("sector_" + parent);
        dom_sector.classList.toggle("expanded");
        if (openSectores.includes(parent)) {
            //SE ELIMINA EL SECTOR AL QUE SE LE DIO CLICK SI YA EXISTE EN EL ARRAY openSectores
            setOpenSectores(
                openSectores.filter((element) => element != parent)
            );
        } else {
            //SE AGREGA EL SECTOR AL QUE SE LE DIO CLICK SI NO EXISTE EN EL ARRAY openSectores
            //Se añade el nuevo parent
            setOpenSectores([...openSectores, parent]);
        }

        //SE BUSCAN LOS SEGMENTOS QUE TENGAN EL id_padre_sub_categoria == AL SECTOR QUE SE LE DIO CLICK
        const pattern = new RegExp(parent, "i");
        const FilteredSegmentos = sectores.filter(function (el) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });

        //EN LOS SEGMENTOS QUE SE ENCONTRARON
        FilteredSegmentos.forEach((element) => {
            if (!segmentos.includes(element)) {
                //SI NO EXISTE, SE AGREGA
                segmentos.push(element);
            } else {
                //SI YA EXISTE, SE ELIMINA
                const resultado = segmentos.filter(
                    (segmento) => segmento.id_padre_sub_categoria != parent
                );
                setSegmentos(resultado);
            }
        });
    };

    const getTipoCompra = (parent) => {
        var dom_segmento = document.getElementById("segmento_" + parent);
        dom_segmento.classList.toggle("expanded");
        if (openSegmentos.includes(parent)) {
            //SE ELIMINA EL SECTOR AL QUE SE LE DIO CLICK SI YA EXISTE EN EL ARRAY openSegmentos
            setOpenSegmentos(
                openSegmentos.filter((element) => element != parent)
            );
        } else {
            //SE AGREGA EL SECTOR AL QUE SE LE DIO CLICK SI NO EXISTE EN EL ARRAY openSegmentos
            setOpenSegmentos([...openSegmentos, parent]); //Se añade el nuevo parent
        }

        //SE BUSCAN LOS SEGMENTOS QUE TENGAN EL id_padre_sub_categoria == AL SECTOR QUE SE LE DIO CLICK
        const pattern = new RegExp(parent, "i");
        const FilteredTiposCompras = sectores.filter(function (el) {
            if (pattern.test(el.id_padre_sub_categoria)) {
                return el;
            }
        });

        //EN LOS SEGMENTOS QUE SE ENCONTRARON
        FilteredTiposCompras.forEach((element) => {
            if (!tiposCompras.includes(element)) {
                //SI NO EXISTE, SE AGREGA
                tiposCompras.push(element);
            } else {
                //SI YA EXISTE, SE ELIMINA
                const resultado = tiposCompras.filter(
                    (segmento) => segmento.id_padre_sub_categoria != parent
                );
                setTiposCompras(resultado);
            }
        });
    };

    const checked = (current) => {
        var array_checks = []; //Conserva el id de las actividades economicas
        checksTiposCompras.forEach((checks) => {
            array_checks.push(checks);
        });
        var segmentos = fakeSectores.filter(
            (fs) => fs.id_padre_sub_categoria == current.id
        );
        if (segmentos.length > 0) {
            //Click en check sector
            if (!array_checks.includes(current.id)) {
                //Si no esta seleccionado el sector
                array_checks.push(current.id); //Se agrega el sector
                array_checks = toggleCheked(
                    array_checks,
                    segmentos,
                    "segmento",
                    "remove"
                );
                array_checks = toggleCheked(
                    array_checks,
                    segmentos,
                    "segmento",
                    "add"
                );
            } else {
                //Si ya esta seleccionado el sector
                array_checks = deleteTipoCompra(array_checks, current.id); //Se elimina el sector
                array_checks = toggleCheked(
                    array_checks,
                    segmentos,
                    "segmento",
                    "remove"
                );
            }
        } else {
            //Click en segmento o actividad economica
            var tipos_compras = fakeSectores.filter(
                (fs) => fs.id_padre_sub_categoria == current.id
            );
            //Si tiene actividades economicas es un segmento
            if (tipos_compras.length > 0) {
                //Click en segmento
                if (!array_checks.includes(current.id)) {
                    //Si no esta seleccionada el segmento
                    //checksTiposCompras.push(current.id_padre_sub_categoria)
                    //array_checks.push(current.id_padre_sub_categoria)//Se agrega el segmento
                    array_checks.push(current.id); //Se agrega el segmento
                    array_checks = toggleCheked(
                        array_checks,
                        tipos_compras,
                        "tipos_compras",
                        "remove"
                    );
                    array_checks = toggleCheked(
                        array_checks,
                        tipos_compras,
                        "tipo_compra",
                        "add"
                    );
                }
            } else {
                //Click en actividad economica
                if (!array_checks.includes(current.id)) {
                    array_checks.push(current.id);
                } else {
                    array_checks = deleteTipoCompra(array_checks, current.id);
                }
            }
        }
        array_checks = [...new Set(array_checks)];
        setChecksTiposCompras(array_checks);
        checkClassValidate(array_checks, current);
    };

    //array = todas las actividades economicas que estan seleccionadas actualmente
    //current = actividad economica seleccionada actualmente
    const checkClassValidate = (array, current) => {
        if (isType(current.id, "tipos_compras")) {
            var array_tipos_compras = getTiposCompras(array, "tipos_compras");
            var response = getCheckValidator(
                array_tipos_compras,
                current,
                "tipos_compras"
            );
            var sectorValidator = response[0];
            var sectorValidatorTotal = response[1];
            var segmentoValidator = true;
            var segmentoValidatorTotal = 0;
            var actividades_economicas_segmento_actual = getChildsIds(
                current,
                "tipos_compras"
            );

            actividades_economicas_segmento_actual.forEach((el) => {
                if (!array_tipos_compras.includes(el)) {
                    segmentoValidator = false;
                } else {
                    segmentoValidatorTotal += 1;
                }
            });
            if (segmentoValidator) {
                array.push(current.id_padre_sub_categoria);
                toggleClassCheckMinus(
                    "segmento_check_" + current.id_padre_sub_categoria,
                    "remove"
                );
            } else {
                array = deleteTipoCompra(array, current.id_padre_sub_categoria);
                array = deleteTipoCompra(
                    array,
                    current.id_abuelo_sub_categoria
                );
                setChecksTiposCompras(array);
                if (segmentoValidatorTotal > 0) {
                    toggleClassCheckMinus(
                        "segmento_check_" + current.id_padre_sub_categoria,
                        "add"
                    );
                } else {
                    toggleClassCheckMinus(
                        "segmento_check_" + current.id_padre_sub_categoria,
                        "remove"
                    );
                }
                if (sectorValidatorTotal > 0) {
                    toggleClassCheckMinus(
                        "sector_check_" + current.id_abuelo_sub_categoria,
                        "add"
                    );
                } else {
                    toggleClassCheckMinus(
                        "sector_check_" + current.id_abuelo_sub_categoria,
                        "remove"
                    );
                }
            }
            if (sectorValidator) {
                array.push(current.id_abuelo_sub_categoria);
            }
        }
        if (isType(current.id, "segmentos")) {
            var array_segmentos = getTiposCompras(array, "segmentos");
            var response = getCheckValidator(
                array_segmentos,
                current,
                "segmentos"
            );
            var sectorValidator = response[0];
            var sectorValidatorTotal = response[1];

            if (sectorValidator) {
                array.push(current.id_padre_sub_categoria);
            } else {
                array = deleteTipoCompra(array, current.id_padre_sub_categoria);
                setChecksTiposCompras(array);
                //(sectorValidator)
                if (sectorValidatorTotal > 0) {
                    toggleClassCheckMinus(
                        "sector_check_" + current.id_padre_sub_categoria,
                        "add"
                    );
                } else {
                    toggleClassCheckMinus(
                        "sector_check_" + current.id_padre_sub_categoria,
                        "remove"
                    );
                    toggleClassCheckMinus(
                        "segmento_check_" + current.id,
                        "remove"
                    );
                }
            }
        }
        if (isType(current.id, "sector")) {
            toggleClassCheckMinus("sector_check_" + current.id, "remove");
            var segmentos = getChildsIds(current, "segmentos");
            segmentos.forEach((id) => {
                toggleClassCheckMinus("segmento_check_" + id, "remove");
            });
        }
    };

    //Retorna los ids de los hijos del primer nivel
    const getChildsIds = (sector, type) => {
        var data = [];
        fakeSectores.forEach((el) => {
            switch (type) {
                case "tipos_compras":
                    if (
                        el.id_padre_sub_categoria ==
                        sector.id_padre_sub_categoria
                    ) {
                        data.push(el.id);
                    }
                    break;
                case "segmentos":
                    if (el.id_padre_sub_categoria == sector.id) {
                        data.push(el.id);
                    }
                    break;
                default:
                    break;
            }
        });
        return data;
    };
    //Retorna un array con los ids de las actividades economicas seleccionadas segun el tipo que se necesite (ae, sector, segmento)
    const getTiposCompras = (array, type) => {
        var response = [];
        array.forEach((el) => {
            if (isType(el, type)) {
                response.push(el);
            }
        });
        return response;
    };

    const isType = (id, type) => {
        var sector = fakeSectores.filter((el) => el.id == id)[0];
        switch (type) {
            case "tipos_compras":
                if (
                    sector.id_abuelo_sub_categoria != null &&
                    sector.id_padre_sub_categoria != null
                ) {
                    return sector;
                } else {
                    return false;
                }
                break;
            case "segmentos":
                if (
                    sector.id_abuelo_sub_categoria == null &&
                    sector.id_padre_sub_categoria != null
                ) {
                    return sector;
                } else {
                    return false;
                }
                break;
            case "sector":
                if (
                    sector.id_abuelo_sub_categoria == null &&
                    sector.id_padre_sub_categoria == null
                ) {
                    return sector;
                } else {
                    return false;
                }
                break;
            default:
                break;
        }
    };

    const getCheckValidator = (array, current, type) => {
        var sectorValidator = true;
        var sectorValidatorTotal = 0;
        if (array.length > 0) {
            //Se recorren todas las actividades economicas seleccionadas
            var tipo_compra = fakeSectores.filter(
                (item) => item.id == current.id
            )[0];
            var parent = 0;

            switch (type) {
                case "tipos_compras":
                    parent = tipo_compra.id_abuelo_sub_categoria;
                    break;
                case "segmentos":
                    parent = tipo_compra.id_padre_sub_categoria;
                    break;
                case "sector":
                    parent = tipo_compra.id;
                    break;
                default:
                    break;
            }
            //Se compara con las todas las actividades economicas que tiene el sector
            sectoresIds[parent][type].forEach((el) => {
                //Si en algun momento no encuentra una actividad economica del sector en las que estan seleccionadas actualmente, asigna false
                if (!array.includes(el)) {
                    sectorValidator = false;
                } else {
                    sectorValidatorTotal += 1;
                }
            });
        } else {
            sectorValidator = false;
        }
        return [sectorValidator, sectorValidatorTotal];
    };

    const toggleClassCheckMinus = (id, action) => {
        var input = document.getElementById(id);
        if (action == "add") {
            input.classList.add("check-minus");
        } else {
            input.classList.remove("check-minus");
        }
    };

    const deleteTipoCompra = (array, id_actividad_economica) => {
        const index = array.indexOf(id_actividad_economica);
        if (index > -1) {
            array.splice(index, 1);
        }
        return array;
    };

    //Se eliminan/agregan los segmentos y/o actividades economicas
    const toggleCheked = (array, sectores, level = null, action) => {
        sectores.forEach((sc) => {
            switch (action) {
                case "add":
                    array.push(sc.id);
                    if (level == "segmento") {
                        const tipos_compras = fakeSectores.filter(
                            (fsa) => fsa.id_padre_sub_categoria == sc.id
                        );
                        tipos_compras.forEach((ac) => {
                            array.push(ac.id);
                        });
                    }
                    break;
                case "remove":
                    array = deleteTipoCompra(array, sc.id);
                    if (level == "segmento") {
                        const tipos_compras = fakeSectores.filter(
                            (fsa) => fsa.id_padre_sub_categoria == sc.id
                        );
                        tipos_compras.forEach((ac) => {
                            array = deleteTipoCompra(array, ac.id);
                        });
                    }
                    break;

                default:
                    break;
            }
        });
        return array;
    };

    const inputSearchTipoCompra = (e) => {
        if (e.target.value == "") {
            setSectores(fakeSectores);
            setSegmentos([]);
            setTiposCompras([]);
            setOpenSectores([]);
            setOpenSegmentos([]);
            return;
        }

        if (e.key === "Enter") {
            //SE BUSCAN LAS ACTIVIDADES ECONOMICAS QUE COINCIDAN CON EL NOMBRE QUE SE INGRESO
            const pattern = new RegExp(e.target.value, "i");

            const FilteredTiposCompras = fakeSectores.filter(function (el) {
                if (pattern.test(el.nombre) || e.target.value == el.id) {
                    return el;
                }
            });

            var sectores_filtrados = [];
            var segmentos_filtrados = [];
            var actividades_economicas_filtrados = [];
            var open_segmentos = [];
            var open_sectores = [];

            FilteredTiposCompras.forEach((element) => {
                //SI ES ACTIVIDAD ECONOMICA, SE GUARDA SECTOR Y SEGMENTOS TAMBIEN
                if (
                    element.id_abuelo_sub_categoria != null &&
                    element.id_padre_sub_categoria != null
                ) {
                    //BUSCAMOS LA ACTIVIDAD ECONOMICA
                    actividades_economicas_filtrados.push(element);
                    //BUSCAMOS EL SEGMENTO DE LA ACTIVIDAD ECONOMICA
                    var segmento = fakeSectores.filter(
                        (fs) => fs.id == element.id_padre_sub_categoria
                    )[0];
                    if (!segmentos_filtrados.includes(segmento)) {
                        segmentos_filtrados.push(segmento);
                    }
                    if (
                        !open_segmentos.includes(element.id_padre_sub_categoria)
                    ) {
                        open_segmentos.push(element.id_padre_sub_categoria);
                    }

                    //BUSCAMOS EL SECTOR DE LA ACTIVIDAD ECONOMICA
                    var sector = fakeSectores.filter(
                        (fs) => fs.id == element.id_abuelo_sub_categoria
                    )[0];
                    if (!sectores_filtrados.includes(sector)) {
                        sectores_filtrados.push(sector);
                    }
                    if (
                        !open_sectores.includes(element.id_abuelo_sub_categoria)
                    ) {
                        open_sectores.push(element.id_abuelo_sub_categoria);
                    }
                }

                //SI ES SEGMENTO, SE GUARDA SECTOR TAMBIEN
                if (
                    element.id_abuelo_sub_categoria == null &&
                    element.id_padre_sub_categoria != null
                ) {
                    if (!segmentos_filtrados.includes(element)) {
                        segmentos_filtrados.push(element);
                    }
                    if (!open_segmentos.includes(element.id)) {
                        open_segmentos.push(element.id);
                    }

                    //BUSCAMOS EL SECTOR DEL SEGMENTOS
                    var sector = fakeSectores.filter(
                        (fs) => fs.id == element.id_padre_sub_categoria
                    )[0];
                    if (!sectores_filtrados.includes(sector)) {
                        sectores_filtrados.push(sector);
                    }
                    if (
                        !open_sectores.includes(element.id_padre_sub_categoria)
                    ) {
                        open_sectores.push(element.id_padre_sub_categoria);
                    }
                }

                //SECTOR
                if (
                    element.id_abuelo_sub_categoria == null &&
                    element.id_padre_sub_categoria == null
                ) {
                    if (!sectores_filtrados.includes(element)) {
                        sectores_filtrados.push(element);
                    }
                    if (!open_sectores.includes(element.id)) {
                        open_sectores.push(element.id);
                    }
                }
            });

            setSectores(sectores_filtrados);
            setSegmentos(segmentos_filtrados);
            setTiposCompras(actividades_economicas_filtrados);
            setOpenSectores(open_sectores);
            setOpenSegmentos(open_segmentos);
        }
    };

    useEffect(() => {
        onHandleSectores(checksTiposCompras);
    }, [checksTiposCompras]);

    return (
        <Modal
            size="xl"
            dialogClassName=""
            contentClassName=""
            backdropClassName=""
            className=""
            centered
            show={showBusquedaUbicacion}
            onHide={handleCloseBusquedaUbicacion}
        >
            <>
                <Modal.Header closeButton className="header">
                    <h2 className="name_section_app">
                        Seleccione la modalidad.
                    </h2>
                </Modal.Header>
                <Modal.Body
                    id="BusquedaUbicacion"
                    className="contenedor-planes"
                >
                    <div className="bg-white overflow-auto w-full text-center margen-superior custom-scroll">
                        <div className="container mt-4">
                            <div className="tree_categorias tree_1">
                                <div className="tree_categorias__busqueda mb-3 mb-md-4">
                                    <div className="mx-60 mt-30 d-flex">
                                        <button
                                            button
                                            type="button"
                                            className="icon-Buscar-click"
                                        ></button>
                                        <input
                                            type="text"
                                            placeholder="Busca por modalidad"
                                            autoComplete="off"
                                            className="form-control busqueda-input"
                                            onKeyDown={inputSearchTipoCompra}
                                        />
                                    </div>
                                    <div>
                                        <ul className="tree-root">
                                            {sectores.map((sector) => (
                                                <>
                                                    {sector.id_padre_sub_categoria ==
                                                        null && (
                                                        <li
                                                            className={`tree-node has-child draggable ${
                                                                openSectores.includes(
                                                                    sector.id
                                                                )
                                                                    ? "expanded"
                                                                    : ""
                                                            }`}
                                                            id={
                                                                "sector_" +
                                                                sector.id
                                                            }
                                                        >
                                                            <div
                                                                id={sector.id}
                                                                className="tree-content mt-3 sector"
                                                                key={sector.id}
                                                            >
                                                                <i
                                                                    className={`tree-arrow has-child ${
                                                                        sector
                                                                            .childs
                                                                            .length >
                                                                        0
                                                                            ? "bi bi-chevron-down"
                                                                            : ""
                                                                    }`}
                                                                ></i>
                                                                <input
                                                                    id={
                                                                        "sector_check_" +
                                                                        sector.id
                                                                    }
                                                                    type="checkbox"
                                                                    name="tipo_compra"
                                                                    onChange={() =>
                                                                        checked(
                                                                            sector
                                                                        )
                                                                    }
                                                                    checked={
                                                                        checksTiposCompras.includes(
                                                                            sector.id
                                                                        )
                                                                            ? "checked"
                                                                            : ""
                                                                    }
                                                                />
                                                                <span className="tree-anchor">
                                                                    <span
                                                                        className="tree-division tree-division1"
                                                                        onClick={() =>
                                                                            getSegmento(
                                                                                sector.id
                                                                            )
                                                                        }
                                                                    >
                                                                        <span className="tree-division__title my-auto">
                                                                            {
                                                                                sector.nombre
                                                                            }
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            {openSectores.includes(
                                                                sector.id
                                                            ) && (
                                                                <ul className="tree-children new-class">
                                                                    {segmentos.map(
                                                                        (
                                                                            segmento,
                                                                            index
                                                                        ) => (
                                                                            <>
                                                                                {sector.id ==
                                                                                    segmento.id_padre_sub_categoria && (
                                                                                    <li
                                                                                        className={`tree-node has-child draggable segmento ${
                                                                                            openSegmentos.includes(
                                                                                                segmento.id
                                                                                            )
                                                                                                ? "expanded"
                                                                                                : ""
                                                                                        }`}
                                                                                        id={
                                                                                            "segmento_" +
                                                                                            segmento.id
                                                                                        }
                                                                                    >
                                                                                        <div className="tree-content segmento">
                                                                                            <i className="tree-arrow expanded has-child ltr"></i>
                                                                                            <input
                                                                                                id={
                                                                                                    "segmento_check_" +
                                                                                                    segmento.id
                                                                                                }
                                                                                                type="checkbox"
                                                                                                name="tipo_compra"
                                                                                                onChange={() =>
                                                                                                    checked(
                                                                                                        segmento
                                                                                                    )
                                                                                                }
                                                                                                checked={
                                                                                                    checksTiposCompras.includes(
                                                                                                        segmento.id
                                                                                                    )
                                                                                                        ? "checked"
                                                                                                        : ""
                                                                                                }
                                                                                            />
                                                                                            <span className="tree-anchor">
                                                                                                <span
                                                                                                    className="tree-division tree-division1"
                                                                                                    // onClick={() =>
                                                                                                    //     getTipoCompra(
                                                                                                    //         segmento.id
                                                                                                    //     )
                                                                                                    // }
                                                                                                >
                                                                                                    <>
                                                                                                        {index %
                                                                                                            2 ==
                                                                                                        0 ? (
                                                                                                            <span className="tree-division__title my-auto">
                                                                                                                {
                                                                                                                    segmento.nombre
                                                                                                                }
                                                                                                            </span>
                                                                                                        ) : (
                                                                                                            <span className="tree-division__title-gray my-auto">
                                                                                                                {
                                                                                                                    segmento.nombre
                                                                                                                }
                                                                                                            </span>
                                                                                                        )}
                                                                                                    </>
                                                                                                </span>
                                                                                            </span>
                                                                                        </div>
                                                                                        {openSegmentos.includes(
                                                                                            segmento.id
                                                                                        ) && (
                                                                                            <ul className="tree-children actividad-economica">
                                                                                                {tiposCompras.map(
                                                                                                    (
                                                                                                        childs,
                                                                                                        index
                                                                                                    ) => (
                                                                                                        <>
                                                                                                            {segmento.id ==
                                                                                                                childs.id_padre_sub_categoria && (
                                                                                                                <li className="tree-node draggable">
                                                                                                                    <div
                                                                                                                        className="tree-content actividad-economica"
                                                                                                                        onClick={() =>
                                                                                                                            checked(
                                                                                                                                childs
                                                                                                                            )
                                                                                                                        }
                                                                                                                    >
                                                                                                                        <input
                                                                                                                            type="checkbox"
                                                                                                                            name="tipo_compra"
                                                                                                                            onChange={() =>
                                                                                                                                checked(
                                                                                                                                    childs
                                                                                                                                )
                                                                                                                            }
                                                                                                                            checked={
                                                                                                                                checksTiposCompras.includes(
                                                                                                                                    childs.id
                                                                                                                                )
                                                                                                                                    ? "checked"
                                                                                                                                    : ""
                                                                                                                            }
                                                                                                                        />
                                                                                                                        <span className="tree-anchor children">
                                                                                                                            <span className="tree-division tree-division1">
                                                                                                                                <>
                                                                                                                                    <span className="tree-division__title my-auto">
                                                                                                                                        {
                                                                                                                                            childs.nombre
                                                                                                                                        }
                                                                                                                                    </span>
                                                                                                                                </>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                </li>
                                                                                                            )}
                                                                                                        </>
                                                                                                    )
                                                                                                )}
                                                                                            </ul>
                                                                                        )}
                                                                                    </li>
                                                                                )}
                                                                            </>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    )}
                                                </>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </>
        </Modal>
    );
};

export default BusquedaUbicacion;
