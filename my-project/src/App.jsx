import './App.css'

function App() {

  return (
    <>
    <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Landing Page</title>
  <link rel="stylesheet" href="../styles/landing.css" />
  <link rel="stylesheet" href="../styles/tailwind.css" />
  <header>
    <div className="miLogo">
      <img
        src=".\src\assets\images/pngtree-colorful-logo-design-png-transparent-png-image_3536702-removebg-preview.png"
        alt=""
      />
      <h2>Tu Pueblo Ideal</h2>
    </div>
    <div className="navegacion">
      <a href="votaciones.html">Elige lo mejor en tu pueblo</a>
      <a href="publicaciones.html">Publicaciones</a>
      <a href="anuncios.html">Anuncios</a>
    </div>
    <div className="session">
      <a href="register.html">Registrarse</a>
      <a href="login.html">Iniciar Sesión</a>
    </div>
  </header>
  <main>
    <div className="post-container">
      <h3 className="tituloPubli">Publicaciones</h3>
      <article className="contenedor-publi">
        <div className="gatoElfo">
          <img
            src=".\src\assets\images/gatos-elfo_6b131528_480740282_240906132928_600x600.jpg"
            alt=""
          />
          <span>Usuario 1</span>
        </div>
        <div className="contenidoPubli">
          <p>
            En el barrio circuito 5 especificamente en la avenida los
            constituyentes "arreglaron la avenida" pero hace 5 meses sigue todo
            roto y cuando voy manejando parece que voy a volar cada 5 metros
            ayuda.
          </p>
          <img src=".\src\assets\images/Calles en mal estado.jfif" alt="" />
        </div>
      </article>
      <article className="contenedor-publi">
        <div className="gatoElfo">
          <img src=".\src\assets\images/cuteKitty.png" alt="" />
          <span>Usuario 2</span>
        </div>
        <div className="contenidoPubli">
          <p>Mi auto se atasco ayer por culpa de este bache..</p>
          <img src=".\src\assets\images/bache.jpg" alt="" />
        </div>
      </article>
      <article className="contenedor-publi">
        <div className="gatoElfo">
          <img src=".\src\assets\images/profilephoto.png" alt="" />
          <span>Usuario 3</span>
        </div>
        <div className="contenidoPubli">
          <p>Estas tuberias necesitan mantenimiento urgente</p>
          <img src=".\src\assets\images/tuberia-rota.jpg" alt="" />
        </div>
      </article>
      <article className="contenedor-publi">
        <div className="gatoElfo">
          <img src=".\src\assets\images/gatitoNaranja.jpg" alt="" />
          <span>Usuario 4</span>
        </div>
        <div className="contenidoPubli">
          <p>Las calles estan feas, hay que asfaltarlas</p>
          <img src=".\src\assets\images/731878.jpg" alt="" />
        </div>
      </article>
      <article className="contenedor-publi">
        <div className="gatoElfo">
          <img src=".\src\assets\images/images.jfif" alt="" />
          <span>Usuario 5</span>
        </div>
        <div className="contenidoPubli">
          <p>ya no tengo donde sentarme a descansar cuando termino de trotar</p>
          <img src=".\src\assets\images/bancaRota.jpg" alt="" />
        </div>
      </article>
      <article className="contenedor-publi">
        <div className="gatoElfo">
          <img
            src=".\src\assets\images/gatos-elfo_6b131528_480740282_240906132928_600x600.jpg"
            alt=""
          />
          <span>Usuario 6</span>
        </div>
        <div className="contenidoPubli">
          <p>el hospital esta en mal estado</p>
          <img src=".\src\assets\images/img-20181217-wa00311-774x400.jpg" alt="" />
        </div>
      </article>
      <div className="dropdown">
        <button className="dropdown-post">Crear publicacion</button>
      </div>
    </div>
  </main>

    </>
  )
}

export default App
