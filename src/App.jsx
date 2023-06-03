function App() {

  const themeImg = 'https://www.svgrepo.com/show/267921/idea.svg'
  return (
    <>
      <header>
        <nav>
          <div className="nav-item">
            <img src="" alt="navItem" />
            <p>section</p>
          </div>

          <div className="nav-item">
            <img src="" alt="navItem" />
            <p>section</p>
          </div>

          <div className="nav-item">
            <img src="" alt="navItem" />
            <p>section</p>
          </div>
        </nav>

        <div className="theme-toggler">
          <img src={themeImg} alt="navThemeToggler" />
        </div>
      </header>

      <main></main>
    </>
  );
}

export default App;
