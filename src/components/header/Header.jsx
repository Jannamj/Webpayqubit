import "./Header.css"


function Header() {
  return (
    <>
      <header>
        <div className='logo'>
            <img src="../src/assets/payqubitlogo.png" alt="" />
        </div>
        <div className='sections'>
          <a href="">Industrias y Verticales</a>
          <a href="">Soporte</a>
          <a href="">Core Team</a>
        </div>
      </header>
    </>
  )
}

export default Header