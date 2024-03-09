import img from "../../assets/istockphoto-1882165385-612x612.jpg";
import './login.css'

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    fetch("http://localhost:9999/back/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Maneja la respuesta del servidor aquí
        // Guarda la respuesta completa del servidor en localStorage
        localStorage.setItem("userData", JSON.stringify(data));
        // Redirige al usuario a la página deseada
        window.location.href = "/perfil"; // Redirige al usuario a la página de perfil después del login
      })
      .catch((error) => {
        console.error("Error al enviar los datos del formulario:", error);
      });
  };

  return (
    <div className="">
      <div className="containerRegister">
        <div>
          Img
        </div>
        <div>
          Form
        </div>
      </div>
      <div className="containerLogin">
      {/* left */}
      <div className="left">
        <form onSubmit={handleSubmit}>
          {/* <p className="P">Login</p> */}
          <div className="">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <br />
            <input
              className="input"
              type="text"
              id="email"
              name="email"
              autoComplete="email"
              required
            />
            <br />
          </div>
          <div className="">
            <label className="label" htmlFor="password">
              Password:
            </label>
            <br />
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              required
              autoComplete="current-password"
            />
            <br />
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
      {/* Right */}
      <div className="right">
        <div className="">
          <div className="">
            <span className="">
              Control de Usuario
            </span>
          </div>
          <img
            className="imgL"
            src={img}
            alt="logo"
          />
        </div>
      </div>
      </div>
    </div>
  );
}
