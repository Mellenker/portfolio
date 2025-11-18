function Header() {
    const name = "Melker Stafverfeldt";

    return (
        <div className="App">
            <header className ='header'>
            <h1>{name}</h1> 
            <nav>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </nav>
            </header> 
        </div>
    )   
}

export default Header;
