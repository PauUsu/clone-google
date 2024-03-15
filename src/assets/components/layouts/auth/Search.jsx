
const Search = () => {
    return(
        <div className="containerSearch">
            <div className="inputSearch">
            <input type="text" className="styleInput" />
            </div>
            <i className="fi fi-bs-search cursorPointer iconSearch"></i>
            <i className="fi fi-sr-microphone cursorPointer iconMicrophone"></i>
            <i className="fi fi-sr-picture cursorPointer iconImg"></i>
        </div>
    )
}

export {Search}