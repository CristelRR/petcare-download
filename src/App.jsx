import logo from "./assets/logo.png";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white flex items-center justify-center p-4 md:p-10">

      {/* CARD PRINCIPAL */}
      <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 max-w-2xl w-full text-center border border-gray-200 relative overflow-hidden">

        {/* DESTELLOS */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-20 animate-ping"></div>

        {/* LOGO */}
        <div className="relative flex justify-center mb-6">
          <div className="absolute w-32 h-32 bg-blue-200/40 blur-xl rounded-xl animate-[pulse_3s_ease-in-out_infinite]"></div>
          
          <img
            src={logo}
            alt="PetCare Logo"
            className="w-24 md:w-32 z-10 rounded-xl shadow-xl animate-[pulse_4s_ease-in-out_infinite]"
          />
        </div>

        {/* TÍTULO */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-4">
          PetCare
        </h1>

        {/* DESCRIPCIÓN */}
        <p className="text-gray-700 text-md md:text-lg leading-relaxed mb-6 px-2">
          PetCare es una aplicación diseñada para que puedas registrar, organizar y visualizar 
          la información más importante de tus mascotas: datos generales, fotos, recordatorios, 
          historial y mucho más. Todo desde una interfaz rápida, moderna e intuitiva. 🐾
        </p>

        {/* SECCIÓN DE FUNCIONES */}
        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">
          ¿Cómo funciona?
        </h2>

        <div className="text-gray-700 text-left space-y-3 mb-8 px-4">
          <p>🐾  <b>1.</b> Abre la app e inicia sesión o crea una cuenta.</p>
          <p>🐾  <b>2.</b> Registra a tus mascotas con sus datos y su foto.</p>
          <p>🐾  <b>3.</b> Consulta su perfil, historial y actualiza su información.</p>
          <p>🐾  <b>4.</b> Comparte fotos e historias en la comunidad PetCare.</p>
          <p>🐾  <b>5.</b> Gestiona todo desde un solo lugar.</p>
        </div>

        {/* BOTÓN DE DESCARGA */}
        <a
          href="https://drive.google.com/file/d/1eWwsP4sBQ_vGYpeMB4uj9u3unv5yvwFB/view?usp=sharing"
          download
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg transition transform hover:scale-105 hover:-translate-y-1"
        >
          📥 Descargar APK (Android)
        </a>

        {/* FOOTER */}
        <p className="mt-8 text-sm text-gray-600">
          © 2025 PetCare — Proyecto Universitario UTNG     </p>
      </div>
    </div>
  );
}
