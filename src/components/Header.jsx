import logo from "/new-logo.webp"

function Header() {
  return (
    <>
      <header>
        <div className="container | header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="newsletter">
            <h1>Newsletter</h1>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
