import React, { useState, useEffect } from "react"
import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import Twitter from '../img/gorjeo.png'
import Youtube from '../img/youtube.png'
import WhatsApp from '../img/whatsapp.png'
import Img1 from '../img/que-es-una-landing-page.png'
import Img2 from '../img/factoriales-1.png'
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"


const Principal = () => {

    const [number, setNumber] = useState('');
    const [factorial, setFactorial] = useState('');
  
    const evento = (event) => {
      setNumber(event.target.value);
    };
    
    const calcularFactorial = () => {
      const num = parseInt(number);
      if (isNaN(num)) {
        setFactorial('Por favor, ingrese un número valido');
      } else if (num < 0) {
        setFactorial('El factorial no está definido para números negativos');
      } else {
        let result = 1;
        for (let i = 2; i <= num; i++) {
          result *= i;
        }
        var message = setFactorial(`El factoril de ${num} es ${result}`)
        alert(message)
      }
    };

    

    return (

        <body className="bg-image" style={{ background: { Img1 } }}>

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
                        <Outlet/>
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


                        <div className="d-flex flex-column-1 justify-content-center m-5" style={{ width: "1000px" }}>
                            <article>
                                <h2>EJERCICIO PROPUESTO EN UNA ASIGNATURA FRONT END</h2>
                                <div className="border border-2 p-5 m-5 d-flex flex-text-align-center">
                                    <form class="row g-3">
                                        <div className="col-auto">
                                            <label for="numeros" className="visually-hidden">Ingrese un Número</label>
                                            <input type="text" readonly className="form-control-plaintext" id="numeros" />
                                        </div>
                                        <div className="col-auto">
                                            <label for="number" className="visually-hidden">12345</label>
                                            <input type="number" className="form-control" id="number" placeholder="12345" value={number} onChange={evento}/>
                                          
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn btn-primary mb-3" onClick={calcularFactorial}  >Obtener Factorial</button>
                                        </div>
                                        <p>{factorial}</p>
                                        
                                    </form>
                                    
                                   
                                 
                                </div>
                                <div>
                                    <h2>¿Que es la función factorial?</h2>
                                    <p>
                                    La función factorial se representa con un signo de exclamación “!” detrás de un número. Esta exclamación quiere decir que hay que multiplicar todos los números enteros positivos que hay entre ese número y el 1
                                    </p>
                                    Por ejemplo:
                                    <img src={Img2}/>
                                    <p>
                                    A este número, 6! le llamamos generalmente “6 factorial”, aunque también es correcto decir “factorial de 6”.

                                    En tu calculadora podrás ver una tecla con “n!” o “x!”. Esta tecla te servirá para calcular directamente el factorial del número que quieras.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>

                </div>
            </wrap>
        </body>

    )
}




export default Principal

