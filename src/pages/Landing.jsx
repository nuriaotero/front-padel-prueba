import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="page-container landing">

      {/* HEADER MODERNO */}
      <header className="landing-header">
        
      </header>

      {/* HERO PRINCIPAL */}
      <section className="landing-hero">
        <div className="hero-grid">

          <div className="hero-left">
            

            <h1>
              Administra tu club de pádel
              <br />
              <span className="gradient">sin complicaciones</span>
            </h1>

            <p className="hero-text">
              Centraliza reservas, partidos, torneos y rankings en un panel
              moderno diseñado para clubes y jugadores. Menos gestión, más juego.
            </p>

            <div className="hero-buttons">
              <Link className="btn-primary" to="/register">
                Comenzar gratis
              </Link>
              <Link className="btn-secondary" to="/login">
                Ya tengo cuenta
              </Link>
            </div>

            
          </div>

          {/* TARJETA DESTACADA */}
          <div className="hero-right">
            <div className="card modern-card">
              <h3>Todo lo que tu club necesita</h3>
              <ul>
                <li> Gestión de pistas y horarios</li>
                <li> Roles y permisos</li>
                <li> Torneos y ligas</li>
                <li> Estadísticas y ranking</li>
              </ul>

             
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CARACTERÍSTICAS */}
     

      {/* FOOTER */}
      <footer className="landing-footer">
        <span>
          © {new Date().getFullYear()} Padel Hub — Todos los derechos reservados
        </span>
      </footer>
    </div>
  );
}
