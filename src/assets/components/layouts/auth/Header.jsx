
const Header = () => {

  return (
    <div className="containerHeader">
      <div>
        <p className="cursorPointer gmailImagen"> Gmail </p>
      </div>
      <div>
        <p className="cursorPointer gmailImagen"> Imágenes </p>
      </div>
      <div className="apps">
      <i className="fi fi-sr-apps cursorPointer colorApps"></i>
      </div>
      <div>
        <input type="button" value="Iniciar Sesión" className="buttonLogin" />
      </div>
    </div>
  );
};

export { Header };
