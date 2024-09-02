import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div>
    <div className="header-top">
        <img src="/public/img/Facebook-Logo-768x432.png" alt="FACEBOOK"/>
        <div>
            <div className="header-top-button">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="header-top-button">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    </div>
    <div className="header-bottom">
        <div className="header-left">
            <div className="fbIconContainer">
                <img className="fbicon" src={"/public/img/fbicon.png"} />
            </div>
            <div className="searchBar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input placeholder="Buscar en Facebook" />
            </div>
        </div>
        <div className="menu">
            <input type="radio" id="menu-item-home" name="menu-radioinput" checked/>
            <label for="menu-item-home">
                <div className="buttonItem button-item-selected">
                    <i className="fa-solid fa-house"></i>
                </div>
            </label>
            <input type="radio" id="menu-item-pages" name="menu-radioinput"/>
            <label for="menu-item-pages" onclick="location.href='/pages/pages_Index.html';">
                <div className="buttonItem button-item-selected">
                    <i className="fa-solid fa-flag"></i>
                </div>
            </label>
            <input type="radio" id="menu-item-videos" name="menu-radioinput"/>
            <label for="menu-item-videos" className="menu-input">

                <div className="buttonItem button-item-selected">
                    <i className="fa-solid fa-video"></i>
                </div>

            </label>
            <input type="radio" id="menu-item-store" name="menu-radioinput"/>
            <label for="menu-item-store" className="menu-input">
                <div className="buttonItem button-item-selected">
                    <i className="fa-solid fa-store"></i>
                </div>

            </label>
            <input type="radio" id="menu-item-games" name="menu-radioinput"/>
            <label for="menu-item-games" className="menu-input">
                <div className="buttonItem button-item-selected">
                    <i className="fa-solid fa-gamepad"></i>
                </div>

            </label>

        </div>
        <div className="navbar">
            <div className="navBarItem">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#e8eaed">
                    <path
                        d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" />
                </svg>
            </div>
            <div className="navBarItem">
                <i className="fa-brands fa-facebook-messenger"></i>
                <div className="notification">
                    <p>2</p>
                </div>
            </div>
            <div className="navBarItem">
                <i className="fa-solid fa-bell"></i>
            </div>
            <img className="avatar" src={"/public/img/chuwaca.png"} alt="FOto de perfil."/>
        </div>
        <div className="navBarMore">
            <i className="fa-solid fa-bars"></i>
        </div>
    </div>
</div>
    </header>
  )
}

export default Header