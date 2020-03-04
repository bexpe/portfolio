import React from "react"
import Header from "./header/header"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body {
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: 'Lato';
  background-color: #f7f7f7;

}
body, body * {
  box-sizing: border-box;
}
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{ children }</main>
    </>
  )
}

export default Layout