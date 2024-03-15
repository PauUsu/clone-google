const Buttons = () => {
  return (
    <div className="containerElements">
      <div className="containerButtons">
        <input type="button" value="Buscar en Google" className="styleButtons" />
        <input type="button" value="Voy a tener suerte" className="styleButtons" />
      </div>
      <div className="styleLink">
        <p>Ofrecido por Google en: </p>
        <a href="https://www.google.com/"> Español (Latinoamérica) </a>
      </div>
    </div>
  );
};

export { Buttons };
