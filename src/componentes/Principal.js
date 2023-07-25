import React, { useState, useEffect } from "react"
import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import Twitter from '../img/gorjeo.png'
import Youtube from '../img/youtube.png'
import WhatsApp from '../img/whatsapp.png'
import Fondo from '../img/pxgray.png'
import Img1 from '../img/que-es-una-landing-page.png'
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"

const Principal = () => {

    return (

        <body className="bg-image" style={{ background: {Img1} }}>

            <nav className="navbar bg-dark navbar-expand-lg " data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Evaluate</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link de Descargas</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Cursos Online
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/">Inicio</Link></li>
                                    <li><Link to="/ejercicio">Ejercicio</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Politicas de Seguridad</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                        <Outlet />
                    </div>
                </div>
            </nav>
            <wrap className="Container d-flex justify-content-center">
                <div style={{ width: "1500px" }}>
                    <section>
                        <div className="d-flex justify-content-center ">
                            <div class="card m-4 " style={{ width: "14rem" }}>
                                <img src={Facebook} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Sigueme en mi red social de Facebook para unirte a nuestro grupo de
                                        tecnologia..</p>
                                </div>

                            </div>

                            <div class="card m-4" style={{ width: "14rem" }}>
                                <img src={Instagram} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Sigueme en mi red social de Instragram para unirte a nuestro grupo de
                                        tecnologia..</p>
                                </div>
                            </div>

                            <div class="card m-4" style={{ width: "14rem" }}>
                                <img src={Twitter} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Sigueme en mi red social de Twitter para unirte a nuestro grupo de
                                        tecnologia.</p>
                                </div>
                            </div>

                            <div class="card m-4" style={{ width: "14rem" }}>
                                <img src={Youtube} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Sigueme en mi red social de Twitter para unirte a nuestro grupo de
                                        tecnologia.</p>
                                </div>
                            </div>

                            <div class="card m-4" style={{ width: "14rem" }}>
                                <img src={WhatsApp} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Sigueme en mi red social de Twitter para unirte a nuestro grupo de
                                        tecnologia.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="d-flex flex-justify-content-row">
                        <aside className="d-flex flex-column align-items-end">
                            <div style={{ width: "300px" }}>
                                <div className="p-2 m-5">
                                    <form>
                                        <div className="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Rut:</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Contraseña:</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Email::</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Nombre Completo:</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div class="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>


                                <div className="p-2 w-30">

                                    <h3>Más Articulos</h3>
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Como hacer una pagina web con html
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                Las páginas web se pueden clasificar por su forma, tecnología y funcionalidad. Se crean
                                                        en formato HTML y se utilizan en blogs, foros, instituciones, medios de comunicación,
                                                        buscadores, webs corporativas, tiendas online, entre muchas más opciones.

                                                        HTML, a primera vista, parece complicado y laborioso, pero saber utilizarlo te permitirá
                                                        construir tu página con los elementos que necesitas sin restricciones, y realizar
                                                        cambios concretos dentro de tu sitio. Aprender HTML es más fácil de lo que crees y con
                                                        nuestra guía verás lo rápido que te familiarizarás con él.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Maquetar una pagina Web con CSS
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                <p>En este artículo voy a explicar cómo modelar una página con una cabecera, un menú, dos
                                                        columnas y el píe de página.

                                                        Como se puede observar el diseño de esta formado por una cabecera, un menú, dos divs
                                                        flotando uno a la derecha y otro a la izquierda y un pie de página.

                                                        Para realizar este diseño se necesitan dos ficheros, uno HTML y uno CSS. A continuación
                                                        puedes ver el código HTML. Es realmente sencillo. Hay seis divs en total de los cuales
                                                        uno contiene a los otros cinco y dos de ellos están flotando a la derecha y a la
                                                        izquierda respectivamente.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Lenguajes de Programacion
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>

                    
                        <div className="d-flex flex-column-1 align-items-start m-5" style={{ width: "1000px" }}>    
                            <article>
                                <div className="data">
                                    <span>Fecha: 03 May</span>
                                    <span>Categoria: Pagina Web</span>
                                </div>
                                <h2>Todo sobre la Landing Page</h2>
                                <h4>
                                    ¿Que es una Landing Page?
                                </h4>
                                <p>
                                    Landing Pages son páginas de un sitio web que tienen un objetivo concreto: la conversión. Por eso,
                                    estas páginas tienen menos elementos que una página tradicional, centrándose sólo en la oferta
                                    ofrecida por ella.
                                </p>
                                <h4>
                                    ¿Cuál es la diferencia entre Landing Pages y páginas web?
                                </h4>
                                <p>
                                    A pesar de la creencia de algunas personas de que ambos son sinónimos, existen diferencias
                                    significativas entre Landing Pages y páginas web.
                                    <br /><br />
                                    Según lo que recién explicamos, la Landing Page tiene el rol de lograr la conversión de usuarios a
                                    leads, mientras que la página web brinda contenidos relevantes a tu público.
                                    <br /><br />
                                    Por lo tanto, dentro de tu estrategia digital, es importante que tu página web tenga una buena
                                    estructura de SEO para que sea encontrado en los motores de búsqueda. Por ello, un buen consejo es
                                    difundir la Landing Page en CTAs dentro de tu página web para transformar a los visitantes en leads.
                                </p>
                                <img src={Img1} alt="lading-page" />
                                <h4>¿Cuáles son las ventajas de tener una landing page?</h4>
                                <p>
                                    Si bien son excelentes herramientas de generación de leads, este no es el único motivo por el cual
                                    las landing pages son esenciales en tu estrategia.
                                    <br /><br />
                                    Además, también son responsables de:
                                </p>
                                <h4>Permite segmentar tus contactos</h4>
                                <p>
                                    Además, dependiendo de la conversión en un determinado material o de la información solicitada en el
                                    formulario puedes segmentar mejor sus contactos.
                                    <br /><br />
                                    Si actúas, por ejemplo, con más de un producto y, con ello, más de una persona, puedes distinguirlas
                                    a través de la conversión en la landing page.
                                    <br /><br />
                                    Otra posibilidad es buscar la forma de saber exactamente quiénes son las personas que interactúan
                                    contigo, especialmente para empresas que no trabajan con un segmento o porte de empresa definido.
                                    <br /><br />
                                    En el caso de mercados B2B, una solución puede ser definir una persona dentro de la empresa-cliente
                                    que sea la más interesante para el contacto.
                                </p>
                            </article>
                        </div>
                    </div>

                </div>
            </wrap>
        </body>

    )
}

export default Principal