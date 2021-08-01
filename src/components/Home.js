import React from "react"
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
      <Section title="Model S" discription="Oder Online for Touchless Delivery" backgroundImg="model-s.jpg" leftBtnText="Custom Order" rightBtnText="Existing Inventory" />
      <Section title="Model Y" discription="Oder Online for Touchless Delivery" backgroundImg="model-y.jpg" leftBtnText="Custom Order" rightBtnText="Existing Inventory" />
      <Section title="Model 3" discription="Oder Online for Touchless Delivery" backgroundImg="model-3.jpg" leftBtnText="Custom Order" rightBtnText="Existing Inventory" />
      <Section title="Model X" discription="Oder Online for Touchless Delivery" backgroundImg="model-x.jpg" leftBtnText="Custom Order" rightBtnText="Existing Inventory" />
      <Section title="Lowest Cost Solar Panels in America" discription="Money-back garantee" backgroundImg="solar-panel.jpg" leftBtnText="Order now" rightBtnText="Learn more" />
      <Section title="Solar for New Roofs" discription="Soloar Roof costs less than a New Roof" backgroundImg="solar-roof.jpg" leftBtnText="Order now" rightBtnText="Learn more" />
      <Section title="Accessories" discription="" backgroundImg="accessories.jpg" leftBtnText="Shop now" rightBtnText="" />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`
