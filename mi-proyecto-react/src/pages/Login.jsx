import logo from "../assets/logo.png";

function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
        <img src="https://yt3.googleusercontent.com/ytc/AIdro_kffVaplN5r8eBb8X4ZjIYzeAysTUSHNjx14m6nWh5H2Q=s900-c-k-c0x00ffffff-no-rj" className="logo" alt="Digital Academy" />
        <h2>Una de las academias</h2>
        <h2>virtuales líderes en Latinoamérica Formación digital de calidad para impulsar tu crecimiento profesional.</h2>
      </div>

      <div className="login-right">
        <h3>INICIAR SESIÓN</h3>
        <p>Ingresa con tu cuenta</p>

        <form className="form">
          <label>Correo Electrónico</label>
          <input type="email" placeholder="Ingrese su correo electrónico" />

          <label>Contraseña</label>
          <input type="password" placeholder="Ingrese su contraseña" />


          <a className="register-link" href="#">Registrate</a>

          <button type="submit">Iniciar Sesión</button>
        </form>


      </div>
    </div>
  );
}

export default Login;
