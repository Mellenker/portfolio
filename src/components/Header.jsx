function Header() {
    const name = "My Portfolio";

    return (
        <div className="App">
            <header className ='header'>
            <h1>{name}</h1> 
            <nav>
                <a href='#about'>About</a>
                <a href='#project'>Projects</a>
                <a href='#contact'>Contact</a>
            </nav>
            </header> 
        </div>
    )   
}

export default Header;
