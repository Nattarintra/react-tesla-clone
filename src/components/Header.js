import React, { useState } from "react"
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import { selectCars } from "../features/car/carSlice"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false) // closed
  const cars = useSelector(selectCars)

  console.log(cars)
  return (
    <Container>
      <Link to="#">
        <img src="/images/logo.svg" alt="" />
      </Link>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <Link key={index} to="#">
              {cars}{" "}
            </Link>
          ))}
      </Menu>
      <RightMenu>
        <Link to="#">Shop</Link>
        <Link to="#">Tesla Account</Link>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <Link key={index} to="#">
                {" "}
                {car}
              </Link>
            </li>
          ))}
        <li>
          <Link to="#"> Existing Inventory</Link>
        </li>
        <li>
          <Link to="#"> Used Inventory</Link>
        </li>
        <li>
          <Link to="#"> Roadster</Link>
        </li>
        <li>
          <Link to="#"> Semi</Link>
        </li>
        <li>
          <Link to="#"> Trade-in</Link>
        </li>
        <li>
          <Link to="#"> Charging</Link>
        </li>
        <li>
          <Link to="#"> Powerwall</Link>
        </li>
        <li>
          <Link to="#"> Commercial Energy</Link>
        </li>
        <li>
          <Link to="#"> Utilities</Link>
        </li>
        <li>
          <Link to="#"> Find Us</Link>
        </li>
        <li>
          <Link to="#"> Support</Link>
        </li>
        <li>
          <Link to="#"> Investor Relations</Link>
        </li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 16;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`
const CustomMenu = styled(MenuIcon)``
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;

  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }

  transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
`
