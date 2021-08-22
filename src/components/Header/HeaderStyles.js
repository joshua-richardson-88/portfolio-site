// react
import React from 'react'

// modules
import { IoIosArrowDropdown } from 'react-icons/io'
import styled from 'styled-components'

// project files
import theme from '../../themes/default'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`
export const Span = styled.span`
  font-size: 2rem;
`
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`
const Anchor = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: hsla(0, 0%, 100%, 0.75);
  transition: 0.4s ease;

  &:hover {
    color: hsl(0, 0%, 100%);
    opacity: 1;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`
export const NavLinks = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <Anchor href={href} onClick={onClick} ref={ref}>
      {children}
    </Anchor>
  )
})
NavLinks.displayName = 'NavLinks'
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: hsla(0, 0%, 100%, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: hsl(0, 0%, 100%);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
`
export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: hsl(220, 35%, 20%);
    transform: scale(1.2);
    cursor: pointer;
  }
`
