export const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-item" style={{fontWeight: "600"}}>
          <i className="fa-sharp fa-solid fa-house"></i>
          <p>Home</p>
        </div>
        <div className="nav-item" style={{fontWeight: "400"}}>
          {/* <i className="fa-sharp fa-solid fa-user"></i> */}
          <i className="fa-solid fa-address-card"></i>
          <p>About</p>
        </div>
        <div className="nav-item" style={{fontWeight: "400"}}>
          <i className="fa-sharp fa-solid fa-envelope"></i>
          <p>Contact</p>
        </div>
      </nav>

      <div className="theme-toggler">
        <i className="fa-sharp fa-solid fa-circle-half-stroke"></i>
      </div>
    </header>
  );
};
