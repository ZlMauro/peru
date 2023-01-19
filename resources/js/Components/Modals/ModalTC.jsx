import React from "react";
import Modal from "react-bootstrap/Modal";
//
import { Head } from "@inertiajs/inertia-react";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import "@/Components/Modals/ModalTC.css";
import "@fontsource/poppins";

export const ModalTC = ({ showTC, handleCloseTC }) => {
    const [key, setKey] = useState("home");

    const print = (val) => {
        setKey(val);
    };
    return (
        <Modal
            fullscreen
            dialogClassName="modal-tc"
            centered
            show={showTC}
            onHide={handleCloseTC}
        >
            <Modal.Header closeButton>
                {/* <Modal.Title>Modal Heading</Modal.Title>  */}
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <Head title="Terminos y condiciones" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto&display=swap"
                        rel="stylesheet"
                    ></link>
                    <div className="container container-termcond">
                        <div
                            data-spy="scroll"
                            data-target=".Nav"
                            data-offset="50"
                            className="termcond"
                        >
                            <Nav
                                className=""
                                activeKey={key}
                                onSelect={(selectedKey) =>
                                    print(`${selectedKey}`)
                                }
                            >
                                <ul>
                                    <li>
                                        <p className="termcond-title-cont">
                                            &nbsp;&nbsp;&nbsp;&nbsp;Contenido
                                        </p>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link className="" href="#home">
                                            | Inicio
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#definiciones"
                                        >
                                            Definiciones
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#condiciones-generales"
                                        >
                                            Condiciones generales<br></br> de
                                            uso del servicio
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link className="" href="#niveles">
                                            Niveles de servicio
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link className="" href="#registro">
                                            Registro
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#activacion"
                                        >
                                            Activación del servicio
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#soporte-usuario"
                                        >
                                            Soporte al usuario
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#planes-ofrecidos"
                                        >
                                            Planes ofrecidos
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#perfiles-negocio"
                                        >
                                            Perfiles de negocio
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#sistema-subcuentas"
                                        >
                                            Sistema de subcuentas
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#sistema-seguimiento"
                                        >
                                            Sistema de seguimiento
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#notificaciones-correo"
                                        >
                                            Notificaciones al correo <br></br>{" "}
                                            electrónico
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#contratos-especiales"
                                        >
                                            Contratos especiales
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#app-movil"
                                        >
                                            App móvil
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#autorizacion-informacion"
                                        >
                                            Autorización de uso de <br></br>
                                            nuestra información
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#limitacion-responsabilidad"
                                        >
                                            Limitación de la <br></br>{" "}
                                            responsabilidad
                                        </Nav.Link>
                                    </li>
                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#cancelacion-cuenta"
                                        >
                                            Cancelación de la cuenta
                                        </Nav.Link>
                                    </li>

                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#desarrollo-aplicativos"
                                        >
                                            Desarrollo aplicativos
                                        </Nav.Link>
                                    </li>

                                    <hr className="termcond" />
                                    <li>
                                        <Nav.Link
                                            className=""
                                            href="#aceptacion-condiciones"
                                        >
                                            Aceptación de estas condiciones
                                        </Nav.Link>
                                    </li>
                                </ul>
                            </Nav>
                        </div>
                        <div className="termcond-info">
                            <h2 id="home" className="text-center">
                                <span
                                    className="termcond-title"
                                    style={{ color: "#686868b6" }}
                                >
                                    Contrato de software como servicio{" "}
                                </span>
                                <span
                                    className="termcond-title"
                                    style={{ color: "#00a1c9" }}
                                >
                                    Licitaciones.info
                                </span>
                                <br />
                                <span
                                    className="termcond-title"
                                    style={{ color: "#686868b6" }}
                                >
                                    Acuerdo nivel de servicio
                                </span>
                            </h2>
                            <hr className="politicspri" />
                            <br />
                            <p>
                                LICITACIONES.INFO SAS proporciona a sus usuarios
                                el procesamiento de datos y alojamiento de
                                información sobre oportunidades de negocio con
                                entidades públicas, descentralizadas y privadas
                                en Colombia, Ecuador y Panamá por medio de las
                                plataformas www.licitaciones.info,
                                col.licitaciones.info, ecu.licitaciones.info y
                                pan.licitaciones.info, proporcionando diversas
                                herramientas y funcionalidades a las que se
                                puede acceder desde cualquier lugar y en
                                cualquier dispositivo{" "}
                            </p>
                            <br />
                            <p>
                                Todos los datos que transmitimos son únicamente
                                informativos y no constituyen una oferta, ni una
                                invitación para participar en un proceso de
                                contratación.
                            </p>
                            <br />
                            <p>
                                A continuación, presentamos los términos y
                                condiciones que rigen el contrato de software
                                como servicio (SaaS) entre Licitaciones.info y
                                cada uno de sus usuarios.Estas condiciones son
                                revisadas y actualizadas periódicamente y pueden
                                ser consultadas en cualquier momento a través de
                                la página web www.licitaciones.info.
                            </p>
                            <br />
                            <p>
                                La referencia al término Usuario hace relación a
                                cualquier persona que utiliza el servicio de
                                Licitaciones.info a través de cualquier
                                dispositivo en nombre propio y/o en
                                representación de una Empresa u otra Entidad
                                legal.
                            </p>
                            <br />
                            <p>
                                Al hacer clic en la casilla "Soy mayor de edad y
                                acepto las políticas de privacidad y los
                                Términos y condiciones”, nuestros Usuarios
                                aceptan expresamente los Términos y Condiciones
                                del presente contrato, siendo condición esencial
                                para la utilización del servicio de
                                Licitaciones.info SAS.
                            </p>
                            <br />
                            <p>
                                ESTIMADO USUARIO: EN EL EVENTO EN QUE SE
                                ENCUENTRE EN DESACUERDO CON ESTOS TÉRMINOS Y
                                CONDICIONES, NO UTILICE NUESTROS SERVICIOS.
                            </p>
                            <br />
                            <p>
                                Sus inquietudes y observaciones serán atendidas
                                en el correo
                                servicioalcliente@licitaciones.info.
                            </p>
                            <br />
                            <spam
                                id="definiciones"
                                className="termcond-subtitles"
                            >
                                Definiciones
                            </spam>
                            <br />
                            <br />
                            <p>
                                {" "}
                                Servicio o Servicios: Hace referencia a la
                                funcionalidad que el Usuario opera en su
                                dispositivo o computador al utilizar la
                                “Plataforma”, el “Aplicativo”, la “Aplicación” o
                                la “API” suministrado por Licitaciones.info SAS.
                                Los términos anteriormente mencionados serán
                                utilizados de forma sinónima en este Acuerdo.
                            </p>
                            <br />
                            <p>
                                Pago por el Servicio o Pago por suscripción o
                                Pago: Se refiere al pago por la suscripción para
                                hacer uso de la Aplicación o de servicios
                                conexos a la misma, todo esto dentro de los
                                criterios estipulados en el presente Acuerdo.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Duración del servicio: Periodo de tiempo durante
                                el cual el usuario podrá hacer uso del servicio.
                            </p>
                            <br />
                            <p>
                                Cuenta de Usuario o Usuario registrado: Es el
                                mecanismo a través del cual cada persona accede
                                al Servicio, utilizando su Usuario y contraseña
                                individual e intransferible. La Cuenta de
                                Usuario solo puede ser utilizada por una persona
                                física a la vez.{" "}
                            </p>
                            <br />
                            <p>
                                Mantenimiento planeado: Mantenimiento de rutina
                                ejecutado por Licitaciones.info SAS para dar
                                soporte y actualizar la Aplicación.
                            </p>
                            <br />
                            <p>
                                Mantenimiento no-planeado: Mantenimiento
                                correctivo o de emergencia ejecutado por
                                Licitaciones.info SAS para dar soporte a la
                                aplicación y corregir una eventualidad que no se
                                encontraba prevista Por definición, los
                                Mantenimientos No-planeados ocurren
                                aleatoriamente y por ende son ejecutados en
                                cualquier horario y muchas veces no es posible
                                informarlos con anticipación al Usuario.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Datos del Cliente: Son los datos personales que
                                el Usuario ingrese o registre en la plataforma
                                una vez comienza a operar el Servicio.
                            </p>
                            <br />
                            <p>
                                El o los plazos de renovación: significa los
                                períodos de renovación sucesivos durante los
                                cuales el Cliente se suscribe a los Servicios.
                            </p>
                            <br />
                            <p>
                                Periodo de prueba: Es un Servicio que se
                                suministra sin cargo, es decir gratuito, con el
                                fin de que el usuario conozca el manejo y
                                alcance de la plataforma antes de tomar la
                                decisión de suscripción.
                            </p>
                            <br />
                            <p>
                                Planes: Son las opciones en tiempo de
                                suscripción a las cuales el usuario puede
                                acogerse para acceder al servicio al finalizar
                                el periodo de prueba.
                            </p>
                            <br />
                            <span
                                id="condiciones-generales"
                                className="termcond-subtitles"
                            >
                                Condiciones generales de uso del servicio
                            </span>
                            <br />
                            <br />
                            <p>
                                En LICITACIONES.INFO SAS reunimos, procesamos y
                                almacenamos estratégicamente los datos sobre
                                procesos de contratación publicados en internet
                                por entidades públicas y de economía mixta de
                                Colombia, Ecuador y Panamá. Contamos con un
                                equipo de analistas quienes revisan la
                                información de cada convocatoria para confirmar
                                su autenticidad, sin embargo, no asumimos
                                ninguna responsabilidad por errores ni omisiones
                                cometidas por las entidades contratantes al
                                momento de presentar la información a la
                                comunidad.
                            </p>
                            <br />
                            <p>
                                Nuestros analistas revisan los datos públicos
                                dispuestos en los portales web en donde se
                                encuentra cada convocatoria para identificar su
                                cuantía, actividad económica, ubicación
                                geográfica y tipo de contratación con el fin de
                                organizarlos y ponerlos en nuestra plataforma a
                                disposición de los usuarios que coincidan en sus
                                perfiles de negocio con dichas convocatorias,
                                por lo tanto, como usuario debe comprender que
                                no revisamos los datos que se encuentran en los
                                documentos anexos a los procesos de
                                contratación.
                            </p>
                            <br />
                            <p>
                                Quienes utilizan el servicio se comprometen a
                                hacer un uso prudente y diligente de la
                                información almacenada en nuestra página web;
                                así mismo, deberán validar la información
                                contenida antes de hacer uso de esta,
                                especialmente para la toma de decisiones. En
                                todo caso, ante cualquier duda, deberán
                                contactar a la entidad contratante.
                            </p>
                            <br />
                            <p>
                                El alcance del servicio es entregar información
                                a nuestro público interesado y proporcionar
                                herramientas para el manejo y aprovechamiento de
                                dicha informacion, esto excluye todo
                                acompañamiento, gestión y garantía sobre la
                                participación en los diferentes procesos de
                                contratación. En este sentido, si nuestros
                                usuarios necesitan acompañamiento y/o asesoría
                                para participar en procesos de contratación,
                                serviremos de medio para que contacten a un
                                aliado experto de nuestra base de datos,
                                entendiendo que la relación comercial entre
                                nuestros usuarios y nuestros aliados no está
                                bajo nuestra supervisión, ni seguimiento, ni
                                beneficio económico, por lo que todas las
                                acciones que se desarrollen en el acompañamiento
                                y/o asesoría serán ajenas al alcance de nuestra
                                responsabilidad.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Licitaciones.info SAS se reserva el derecho de
                                modificar, alterar o suprimir los contenidos de
                                la página sin necesidad de previo aviso.
                            </p>
                            <br />
                            <spam id="niveles" className="termcond-subtitles">
                                Niveles de servicio
                            </spam>
                            <br />
                            <br />
                            <p>
                                Durante el Término de Duración del Servicio,
                                Licitaciones.info SAS se compromete a lo
                                siguiente:{" "}
                            </p>
                            <br />
                            <p>
                                Disponibilidad: La plataforma está disponible
                                para el usuario de forma permanente salvo en los
                                periodos de mantenimientos programados y no
                                programados.
                            </p>
                            <br />
                            <p>
                                Mantenimiento planeado: En consecuencia, de lo
                                anterior, Licitaciones.info SAS se compromete a
                                desplegar tareas de mantenimiento en horarios
                                por fuera de los definidos como críticos, a
                                saber: lunes a sábado de 11 pm a 4 am; domingo y
                                feriados de 7pm a 6am.
                            </p>
                            <br />
                            <p>
                                En caso de requerirse un mantenimiento que
                                requiera mucho tiempo, este se realizará en lo
                                posible los domingos o feriados a partir del
                                mediodía. De igual forma, Licitaciones.info SAS
                                procurará razonablemente informar a sus Usuarios
                                con 48 horas de anticipación sobre los horarios
                                que efectivamente se utilizarán para dar
                                mantenimiento planeado a la Plataforma.
                            </p>
                            <br />
                            <p>
                                Mantenimiento no-planeado: Con el propósito de
                                garantizar la integridad y seguridad del
                                Software, Licitaciones.info SAS tendrá el
                                derecho de desplegar mantenimientos no planeados
                                cada vez que lo estime necesario y con la
                                frecuencia que estime necesaria. procurando
                                avisar a los Usuarios con la mayor anticipación
                                permitida por la situación sobre dichos
                                mantenimientos, los cuales podrán ocurrir sin
                                limitaciones de horario y, debido a los
                                inconvenientes que pretenden solventar, de
                                manera imprevista y no avisada.
                            </p>
                            <br />
                            <p>
                                Enlaces: El servicio incluye la entrega de los
                                enlaces a las fuentes originales de información,
                                llevando al usuario a páginas web sobre las
                                cuales Licitaciones.info SAS no tiene control.
                                Los enlaces de nuestro portal a otra página web
                                (o un enlace de otra página web a nuestro
                                Portal) no constituye remisión, respaldo,
                                aprobación, publicidad, oferta o solicitud en
                                relación con dicha página web, sus contenidos, o
                                cualquier otro producto o servicios publicitado
                                o distribuido a través de dicha página web. Así
                                mismo, la disponibilidad y el nivel de servicio
                                de dichos portales no son de alcance ni
                                responsabilidad de Licitaciones.info SAS.
                            </p>
                            <br />
                            <spam id="registro" className="termcond-subtitles">
                                Registro
                            </spam>
                            <br />
                            <br />
                            <p>
                                Para tener acceso al servicio es necesario crear
                                una cuenta en www.licitaciones.info. Esta cuenta
                                podrá ser creada por el usuario individualmente,
                                en compañía de un consultor comercial de
                                licitaciones.info SAS o por alguno de los
                                consultores comerciales con previa autorización
                                del usuario. En cualquier caso, los usuarios
                                registrados declaran que entregan información
                                verídica y legal. Si hay necesidad de
                                actualizar, modificar o eliminar la información,
                                el usuario debe informarlo mediante alguno de
                                los canales de contacto.
                            </p>
                            <br />
                            <p>
                                La contraseña proporcionada es privada y solo el
                                Usuario la conoce. En caso de olvido, nuestro
                                equipo asignará una contraseña provisional, la
                                cual debe ser modificada para garantizar la
                                confidencialidad en el manejo de la cuenta.
                            </p>
                            <br />
                            <p>
                                Nuestros usuarios aceptan notificar
                                inmediatamente a licitaciones.info SAS de
                                cualquier uso no autorizado de la contraseña o
                                cuenta o cualquier otra violación de seguridad.
                            </p>
                            <br />
                            <p>
                                Es importante asegurarse de salir de la cuenta
                                al final de cada sesión. Licitaciones.info SAS
                                no será responsable de ninguna pérdida o daño
                                que surja de la omisión de esta recomendación.
                            </p>
                            <br />
                            <p>
                                Al registrarse por medio de cualquier mecanismo
                                mencionado, nuestros usuarios declaran que son
                                mayores de edad, que proporcionan información
                                verdadera, precisa, actual y completa según lo
                                solicitado en el formulario de registro.
                            </p>
                            <br />
                            <p>
                                Al momento de identificar que un usuario
                                proporciono información falsa, inexacta o
                                incompleta o si se tienen motivos razonables
                                para sospechar que dicha información es falsa,
                                inexacta o incompleta Licitaciones.info SAS
                                cuenta con el derecho de cancelar o suspender la
                                cuenta y rechazar cualquier uso actual o futuro
                                del servicio.
                            </p>
                            <br />
                            <p>
                                Los datos de registro y otra información sobre
                                nuestros usuarios están sujetos a nuestra
                                Política de privacidad. Nuestros usuarios
                                comprenden que, a través del uso del Servicio,
                                aceptan la recopilación y uso (según lo
                                establecido en la Política de Privacidad) de
                                esta información.
                            </p>
                            <br />
                            <spam
                                id="activacion"
                                className="termcond-subtitles"
                            >
                                Activación del servicio
                            </spam>
                            <br />
                            <br />
                            <p>
                                La relación entre LICITACIONES.INFO SAS y los
                                usuarios del servicio se formaliza mediante el
                                diligenciamiento y envío del formulario de
                                registro y la confirmación del correo
                                electrónico suministrado.
                            </p>
                            <br />
                            <p>
                                {" "}
                                En la mayoría de los casos el correo de
                                confirmación es aceptado por los diferentes
                                servidores de correo público como Hotmail,
                                Gmail, Yahoo entre otros, sin embargo, en
                                algunos casos puede ser enviado a la carpeta de
                                correo no deseado o spam.
                            </p>
                            <br />
                            <p>
                                {" "}
                                En cuanto a los servidores privados, en algunos
                                casos será necesaria la configuración por parte
                                del encargado del área de sistemas para que
                                nuestra información sea aceptada y considera
                                como confiable, de lo contrario no será posible
                                acceder a la mayoría de las funcionalidades de
                                nuestro servicio y debe entenderse que son
                                situaciones ajenas a nuestro control técnico y
                                administrativo.
                            </p>
                            <br />

                            <span
                                id="soporte-usuario"
                                className="termcond-subtitles"
                            >
                                Soporte al usuario
                            </span>
                            <br />
                            <br />
                            <p>
                                Soporte telefónico: Al momento del registro el
                                equipo comercial de Licitaciones.info SAS
                                realizará una llamada telefónica al usuario para
                                explicarle el alcance y bondades de la
                                plataforma y también para brindarle asistencia a
                                inquietudes cuando se presenten. Al aceptar
                                estos términos y condiciones el cliente acepta
                                el contacto inicial via telefónica, WhatsApp o
                                correo electrónico. En caso de que como usuario
                                no desee ser contactado posteriormente debe
                                manifestarlo al consultor en la llamada de lo
                                contrario se entiende que acepta que continuemos
                                en contacto por los medios citados.
                            </p>
                            <br />
                            <p>
                                A lo largo de la duración del servicio,
                                licitaciones.info SAS ofrecerá soporte
                                telefónico para la atención de preguntas de los
                                Usuarios en el horario de lunes a viernes de
                                8:00 am a 12:00 m y de 2:00 pm a 6:00 pm.
                            </p>
                            <br />
                            <p>
                                Soporte por Chat: La plataforma cuenta con la
                                comunicación mediante chat el cual estará
                                habilitado para la atención de las peticiones,
                                quejas reclamos, sugerencias o inquietudes de
                                los usuarios, en el horario de lunes a viernes
                                de 8:00 am a 12:00 m y de 2:00 pm a 6:00 pm.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Consultores comerciales: Cada uno de los
                                usuarios del servicio tendrá asignado un
                                consultor comercial por toda la duración del
                                servicio con quien podrán solucionar inquietudes
                                o situaciones relacionadas con el este. En
                                ocasiones el consultor podrá prestar asistencia
                                a través de acceso remoto entre computadores
                                previa autorización del usuario. Al momento de
                                brindar acceso remoto a algún consultor de
                                Licitaciones.info SAS, el usuario es responsable
                                de toda la información almacenada en el
                                dispositivo al cual le habilito el acceso y
                                exime a Licitaciones.info SAS de cualquier
                                pérdida.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Ayudas e instructivos en línea para la
                                utilización del servicio: Licitaciones.info SAS
                                facilitará a los usuarios documentación de
                                apoyo, videos instructivos y otras ayudas en
                                línea a través de su Portal de Clientes, en la
                                zona “centro de ayuda”. Adicionalmente,
                                Licitaciones.info SAS a través del consultor
                                comercial ofrecerá una sesión personalizada sin
                                ningún costo para explicar el uso y bondades de
                                la plataforma.
                            </p>
                            <br />
                            <p>
                                Soporte presencial: Licitaciones.info SAS no
                                ofrece asistencia presencial a los usuarios del
                                servicio, sin embargo, Licitaciones.info se
                                reserva el derecho a crear paquetes comerciales
                                con diferentes niveles y ofertas de soporte
                                presencial.
                            </p>
                            <br />
                            <span
                                id="planes-ofrecidos"
                                className="termcond-subtitles"
                            >
                                Planes ofrecidos
                            </span>
                            <br />
                            <br />
                            <p>
                                LICITACIONES.INFO SAS brinda un periodo de
                                prueba gratuito durante 30 días. Una vez
                                terminado el periodo de prueba el usuario deberá
                                acogerse a uno de los planes publicados en la
                                plataforma para poder seguir teniendo acceso al
                                servicio.
                            </p>
                            <br />
                            <p>
                                La duración del servicio durante el periodo de
                                prueba se puede ver interrumpida al detectar que
                                los datos suministrados en el formulario de
                                registro son fraudulentos, incoherentes o
                                irreales así como en las ocasiones en las que se
                                evidencie un uso incorrecto de los datos y de la
                                información a la cual se le brindo acceso.
                            </p>
                            <br />
                            <p>
                                {" "}
                                LICITACIONES.INFO SAS, ofrece un mismo servicio
                                en diferentes planes los cuales varían en costo
                                según el tiempo al cual desea vincularse. El
                                valor del servicio permanece publicado y se
                                puede consultar en cualquier momento en la
                                plataforma. En determinados periodos del año, el
                                equipo comercial podrá realizar ofertas
                                especiales, las cuales no serán modificables ni
                                transferibles y tendrán una vigencia única, lo
                                que implica que el acogerse a una oferta
                                comercial especial no garantiza el sostenimiento
                                del costo del servicio en el futuro.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Para la vinculación en un plan se debe
                                manifestar por escrito el plan al cual desea
                                acogerse junto con los datos de facturación
                                electrónica, procedimiento de radicación de
                                factura (si aplica) y contacto con el área
                                contable para realizar seguimiento al abono
                                respectivo. Inicialmente se enviará una factura
                                proforma para que el usuario corrobore los datos
                                que finalmente se registraran en la factura
                                electrónica de venta la cual también será
                                remitida a la Dian.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Una vez se envía la factura electrónica de venta
                                o la factura proforma al usuario se le concede
                                un plazo máximo de quince días para el pago
                                total de la factura emitida, salvo en algunas
                                circunstancias en la que las políticas
                                empresariales de los usuarios indiquen un plazo
                                mayor el cual debe ser indicado por escrito al
                                correo contabilidad@licitaciones.info.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Una vez realizado el pago el usuario debe enviar
                                el comprobante según las indicaciones brindadas
                                por el área contable de nuestra compañía con el
                                fin de actualizar el estado de la cuenta del
                                usuario habilitándola por la duración del plan
                                adquirido. Si pasado el plazo establecido para
                                recibir el pago aún no se ha reportado se
                                iniciará proceso de gestión de cuentas por
                                cobrar. En caso de no llegar a un acuerdo de
                                pago nos reservamos el derecho de suspender
                                temporalmente la cuenta de usuario.
                            </p>
                            <br />
                            <span
                                id="perfiles-negocio"
                                className="termcond-subtitles"
                            >
                                Perfiles de negocio
                            </span>
                            <br />
                            <br />
                            <p>
                                Un perfil de negocio contiene la información
                                clave para relacionar a un usuario con los
                                diferentes objetos de las convocatorias por
                                medio de la segmentación de actividades
                                económicas, modalidades de contratación,
                                ubicación geográfica y cuantías.
                            </p>
                            <br />
                            <p>
                                Para hacer uso del servicio es indispensable que
                                el usuario haya creado al menos un perfil de
                                negocio en www.licitaciones.info accediendo con
                                su usuario y contraseña.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Los perfiles de negocio serán creados,
                                modificados y eliminados por el titular de la
                                cuenta principal. El titular de la cuenta
                                principal es responsable de otorgar autorización
                                a los titulares de sus subcuentas para que
                                realicen las modificaciones en los perfiles de
                                negocio de las subcuentas.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Los consultores comerciales asesoran y brindan
                                orientación para ajustar los perfiles de negocio
                                según las características comerciales del
                                usuario, sin embargo, la parametrización de los
                                perfiles de negocio y la configuración de la
                                cuenta de usuario es responsabilidad del
                                usuario.
                            </p>
                            <br />
                            <p>
                                {" "}
                                El usuario puede crear la cantidad de perfiles
                                de negocio que necesite.
                            </p>
                            <br />
                            <span
                                id="sistema-subcuentas"
                                className="termcond-subtitles"
                            >
                                Sistema de subcuentas
                            </span>
                            <br />
                            <br />
                            <p>
                                {" "}
                                Al momento de realizar el registro en la
                                plataforma, se crea una cuenta denominada cuenta
                                principal a la cual se le pueden asociar dos
                                cuentas adicionales denominadas subcuentas. Las
                                subcuentas han sido creadas con el fin de
                                permitir a los usuarios compartir la información
                                con diferentes personas de su equipo de trabajo.
                                Una subcuenta tiene los mismos atributos que la
                                cuenta principal excepto dos: la opción de
                                realizar pago en línea y la opción de tener
                                subcuentas.
                            </p>
                            <br />
                            <p>
                                La cuenta principal es la responsable de crear,
                                editar y eliminar las subcuentas que le han sido
                                asignadas. Solo mediante comunicación escrita
                                por parte del titular de la cuenta principal el
                                equipo de Licitaciones.info SAS podrá gestionar
                                las solicitudes relacionadas con las subcuentas.
                            </p>
                            <br />
                            <p>
                                {" "}
                                En ocasiones los usuarios podrán ver la
                                necesidad de tener más de dos subcuentas para
                                distribuirlas en su equipo de trabajo, en estos
                                casos se asignará sin costo adicional hasta un
                                máximo de diez subcuentas siempre y cuando
                                tengan el mismo dominio corporativo de la cuenta
                                principal y que no sean dominios comerciales
                                como yahoo, Hotmail, Gmail, otulook, msn y todos
                                los que son de libre uso, en estos casos solo se
                                conservará la disponibilidad de dos subcuentas.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Las personas asignadas a las subcuentas aceptan
                                estos términos y condiciones.
                            </p>
                            <br />
                            <span
                                id="sistema-seguimiento"
                                className="termcond-subtitles"
                            >
                                Sistema de seguiemiento
                            </span>
                            <br />
                            <br />
                            <p>
                                {" "}
                                Este sistema permite programar una alerta en los
                                procesos de contratación con entidades públicas
                                para que se envíe un correo al usuario cada vez
                                que se publique un nuevo documento relacionado
                                con el proceso de contratación seleccionado y/o
                                cada que el estado del proceso se actualice. La
                                funcionalidad de seguimiento envía
                                notificaciones con los documentos hasta la
                                adjudicación. Después de esta etapa no se envían
                                los documentos relacionados con el contrato y su
                                ejecución, sin embargo, el sistema continuará
                                notificando el cambio en el estado del proceso
                                hasta su finalización.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Tanto el envío de los documentos como del estado
                                del proceso dependen de la oportuna
                                actualización por parte de la entidad
                                contratante, por lo tanto, Licitaciones.info SAS
                                no asume ninguna responsabilidad por errores,
                                omisiones o incumplimiento en la oportuna
                                publicación de la información por parte de la
                                entidad contratante a través de los mecanismos
                                que el gobierno ha habilitado para garantizar la
                                transparencia y trazabilidad de la información.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Los usuarios pueden incluir en la opción de
                                seguimiento todos los contratos que deseen,
                                siempre y cuando correspondan a un proceso con
                                una entidad pública que paute su contratación a
                                través de las plataformas que el gobierno ha
                                dispuesto para ello, SECOP 1 Y SECOP 2 en
                                Colombia, SERCOP en Ecuador y PANAMÁ COMPRA en
                                Panamá. No se hace seguimiento a procesos de
                                entidades descentralizadas, ni del régimen
                                especial ni privados que no estén obligadas a
                                pautar la trazabilidad de sus procesos de
                                contratación en los portales públicos.
                            </p>
                            <br />
                            <span
                                id="notificaciones-correo"
                                className="termcond-subtitles"
                            >
                                Notificaciones al correo electrónico
                            </span>
                            <br />
                            <br />
                            <p>
                                {" "}
                                Al momento de suscribirse, nuestros usuarios
                                aceptan el envío de notificaciones al correo
                                electrónico. El usuario puede limitar o
                                suspender el envío de alertas a su correo
                                electrónico ingresando con su usuario y
                                contraseña. En caso de suspender el envío de
                                información al correo electrónico, nuestros
                                usuarios se responsabilizan de ingresar a su
                                cuenta de usuario en www.licitaciones.info para
                                hacer uso del servicio o a través del aplicativo
                                móvil.
                            </p>
                            <br />
                            <p>
                                {" "}
                                En algunos casos la información enviada desde
                                nuestros servidores puede estar bloqueada por
                                parámetros de seguridad del usuario. En caso de
                                presentarse rebote o bloqueo de la información,
                                el usuario se responsabiliza de seguir las
                                recomendaciones del consultor comercial que
                                orientará la solución. En caso de no encontrar
                                solución a pesar de haber realizado todos los
                                procedimientos técnicos y protocolos pertinentes
                                el usuario debe suministrar otra cuenta de
                                correo electrónico para recibir la información o
                                debe ingresar a la plataforma
                                www.licitaciones.info o por medio de la App
                                móvil.
                            </p>
                            <br />
                            <span
                                id="contratos-especiales"
                                className="termcond-subtitles"
                            >
                                Contratos especiales
                            </span>
                            <br />
                            <br />
                            <p>
                                {" "}
                                Desarrollamos herramientas y funcionalidades
                                sobre medida para investigación, segmentación,
                                prospección, inteligencia de mercados y todas
                                las actividades relacionadas con el análisis y
                                sistematización de datos. Estos contratos se
                                ejecutan de manera personalizada con los
                                usuarios interesados y se establecen los
                                términos y condiciones adecuados según los
                                requisitos y necesidades a satisfacer.
                            </p>
                            <br />
                            <spam id="app-movil" className="termcond-subtitles">
                                App móvil
                            </spam>
                            <br />
                            <br />
                            <p>
                                {" "}
                                La aplicación para dispositivos móviles ha sido
                                creada como una herramienta adicional para la
                                gestión y almacenamiento de la información de
                                procesos de contratación. A través de la APP se
                                tendrá acceso a todas las funcionalidades del
                                servicio. Licitaciones.info podrá adicionar,
                                modificar o eliminar las funcionalidades en
                                cualquier momento, lo cual acepta el usuario
                                mediante la instalación de la aplicación.
                            </p>
                            <br />
                            <p>
                                {" "}
                                El usuario deberá contar con un dispositivo
                                móvil inteligente (Smartphone) o Tableta con
                                sistema operativo Android o IOS, cualquiera de
                                estos con acceso a internet, ambos seguros y
                                confiables. Licitaciones.info SAS, no será
                                responsable por la seguridad de los equipos
                                Smartphone propiedad de los usuarios utilizados
                                para el acceso a la APP, ni por la
                                disponibilidad del servicio en los dispositivos
                                en los cuales se descargue la aplicación.
                            </p>
                            <br />
                            <p>
                                {" "}
                                En la forma permitida por la ley, los materiales
                                de la aplicación se suministran sin garantía de
                                ningún género, expresa o implícita, incluyendo
                                sin limitación las garantías de calidad
                                satisfactoria, comerciabilidad, adecuación para
                                un fin particular o no infracción, por tanto,
                                Licitaciones.info no garantiza el funcionamiento
                                adecuado en los distintos sistemas operativos o
                                dispositivos en los cuales se haga uso de la
                                aplicación.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Para acceder a la aplicación, el usuario debe
                                contar con Usuario y Contraseña, los cuales
                                serán los mismos utilizados en el portal web. El
                                Usuario se obliga a usar la aplicación y los
                                contenidos encontrados en ella de una manera
                                diligente, correcta y lícita.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Con la descarga de la APP el usuario acepta y
                                autoriza que Licitaciones.info SAS, utilice sus
                                datos en calidad de responsable del tratamiento
                                para fines derivados de la utilización de la
                                APP. Nuestros usuarios podrán ejercer sus
                                derechos a conocer, actualizar, rectificar y
                                suprimir su información personal; así como el
                                derecho a revocar el consentimiento otorgado
                                para el tratamiento de datos personales de
                                acuerdo con nuestra política de tratamiento de
                                información disponible en ¡Error! Referencia de
                                hipervínculo no válida.; en caso de tener alguna
                                solicitud relacionada con sus datos personales
                                se puede realizar a través del correo
                                servicioalcliente@licitaciones.info o al
                                teléfono +57 3103708276.
                            </p>
                            <br />
                            <span
                                id="autorizacion-informacion"
                                className="termcond-subtitles"
                            >
                                Autorización de uso de nuestra información
                            </span>
                            <br />
                            <br />
                            <p>
                                {" "}
                                La información suministrada por nuestra
                                plataforma o enviada directamente al correo
                                electrónico de nuestros clientes puede ser
                                entregada a terceros, únicamente si se reconoce
                                a LICITACIONES.INFO SAS como el transmisor de
                                dicha información, entendiendo que esta
                                información no es autoría ni responsabilidad de
                                LICITACIONES.INFO SAS, adicionalmente esta
                                información no debe venderse a terceros.
                            </p>
                            <br />
                            <p className="termcond-subtitles">
                                Autorización de unso de nuestra información
                            </p>
                            <br />
                            <p>
                                {" "}
                                La información suministrada por nuestra
                                plataforma o enviada directamente al correo
                                electrónico de nuestros clientes puede ser
                                entregada a terceros, únicamente si se reconoce
                                a LICITACIONES.INFO SAS como el transmisor de
                                dicha información, entendiendo que esta
                                información no es autoría ni responsabilidad de
                                LICITACIONES.INFO SAS, adicionalmente esta
                                información no debe venderse a terceros.
                            </p>
                            <br />
                            <span
                                id="limitacion-responsabilidad"
                                className="termcond-subtitles"
                            >
                                Limitación de la responsabilidad
                            </span>
                            <br />
                            <br />
                            <p>
                                LICITACIONES.INFO SAS, no se hace responsable de
                                los errores, mal uso o no actualización en la
                                información suministrada por la fuente de las
                                ofertas.
                            </p>
                            <br />
                            <p>
                                LICITACIONES.INFO, se reserva el derecho de
                                publicar o no la información.{" "}
                            </p>
                            <br />
                            <span
                                id="cancelacion-cuenta"
                                className="termcond-subtitles"
                            >
                                Cancelación de la cuenta
                            </span>
                            <br />
                            <br />
                            <p>
                                {" "}
                                LICITACIONES.INFO, se reserva el derecho de
                                cancelar la cuenta que a su juicio vaya en
                                contra de las leyes colombianas, mal uso de la
                                información, violación de los presentes
                                términos, o que se vea afectado el buen nombre
                                de LICITACIONES.INFO.
                            </p>
                            <br />
                            <span
                                id="desarrollo-aplicativos"
                                className="termcond-subtitles"
                            >
                                Desarrollo de aplicativos
                            </span>
                            <br />
                            <br />
                            <p>
                                {" "}
                                El servicio es proporcionado a los usuarios a
                                través de herramientas tecnológicas de alta
                                complejidad. Estas herramientas podrán ser
                                actualizadas en cualquier momento con el ánimo
                                de optimizar funcionalidades y mejorar la
                                calidad del servicio.
                            </p>
                            <br />
                            <p className="termcond-subtitles">
                                Atribución de la propiedad intelectual de las
                                imágenes online
                            </p>
                            <br />
                            <p>
                                {" "}
                                Las imágenes utilizadas en nuestro sitio web son
                                de uso libre y se encuentran protegidas bajo la
                                licencia de uso Atribución 4.0 Internacional (CC
                                by 4.0). Dicho material no ha sido modificado y
                                se atribuye su crédito al creador:<br></br>
                                Copyright 2020 Twitter, Inc., and other
                                contributors<br></br>
                                https://twemoji.twitter.com/<br></br>
                                code licensed under the MIT License:
                                http://opensource.org/licenses/MIT<br></br>
                                Graphics licensed under CC-BY 4.0:
                                https://creativecommons.org/licenses/by/4.0/
                            </p>
                            <br />
                            <span
                                id="aceptacion-condiciones"
                                className="termcond-subtitles"
                            >
                                Aceptación de estas condiciones
                            </span>
                            <br />
                            <br />
                            <p>
                                {" "}
                                Licitaciones.info SAS se reserva el derecho de
                                modificar los términos y condiciones del
                                contrato de servicio, por lo que es importante
                                revisar las condiciones periódicamente. Si no
                                son aceptadas las presentes condiciones y sus
                                modificaciones, se recomienda suspender el uso
                                del servicio. Se debe tener en cuenta que no
                                existe ninguna responsabilidad de parte de
                                licitaciones.info de rembolsar el valor
                                cancelado ni de indemnizar a los usuarios de
                                ninguna manera por la no aceptación de las
                                condiciones de servicio.
                            </p>
                            <br />
                            <p>
                                {" "}
                                Si tiene alguna duda, con gusto la resolveremos.
                                Encuentre nuestros medios de contacto{" "}
                                <a id="contacto" href="/contacto">
                                    aquí.
                                </a>{" "}
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleCloseTC}>
                    Close
                </Button> */}
            </Modal.Footer>
        </Modal>
    );
};

export default ModalTC;