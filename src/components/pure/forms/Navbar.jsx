import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../../assets/img/logo.png'
import CardWidget from './CardWidget'

function NavBar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <a href='#inicio' className='logoContainer'>
          <img src={logo} alt='logo' className='logo' />
        </a>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a href='/'>INICIO</a>
          <a onClick={handleClick} href='/'>PRODUCTOS</a>
          <a onClick={handleClick} href='/'>SOBRE MI</a>
          <a onClick={handleClick} href='/'>CONTACTO</a>
        </div>
        <div className='card'>
          <CardWidget></CardWidget>
        </div>
      </NavContainer>
    </>
  )
}

export default NavBar

const NavContainer = styled.nav`
  h2{
    color: #fff3fb;
    font-weight: 400;
  }
  padding: .4rem;
  background-color: #f5bdc6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: #fff3fb;
    text-decoration: none;
    margin-right: 1rem;
  }

  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: #fff3fb;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }

  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .CardWidgetButton{
    @media(min-width: 768px){
      display: none;
    }
  }

`