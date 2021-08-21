// react
import React from 'react'

// project files
import { Container } from './LayoutStyles'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
