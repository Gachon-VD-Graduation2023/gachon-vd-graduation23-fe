'use client'
import React from 'react'
import styled from 'styled-components'

function MenuBar() {
  return (
    <MenuBarComponent>
      <MenuBak src='images/menu-bak.png' />
      <TitleLogo src='images/title-logo.png' />
    </MenuBarComponent>
  )
}

const MenuBarComponent = styled.div`
  width: 201px;
  height: 100vw;
  background: var(--unnamed, #f4f9fb);
  position: fixed;
  padding-top: 40px;
  padding-left: 24px;

  // border 두 줄 넣기
  border-right: 2px solid var(--unnamed, #000);
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 2px;
    bottom: 0px;
    border-right: 1px solid; /* 두 번째 border */
  }
`
const MenuBak = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 35px;
  height: 15px;
`
const TitleLogo = styled.img`
  width: 73px;
  height: 161px;
`

export default MenuBar
