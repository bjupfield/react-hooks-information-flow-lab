function Header({onDarkModeClick, isDarkMode}){
    console.log(onDarkModeClick)
    console.log(isDarkMode)
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
            </button>
      </header>
    )
}
export default Header;