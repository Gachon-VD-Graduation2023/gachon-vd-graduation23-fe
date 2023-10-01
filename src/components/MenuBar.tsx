'use client'
import React from 'react'
import styled from 'styled-components'
import '../../public/fonts/font.css'
import { useRouter } from 'next/navigation'

function MenuBar() {
  const router = useRouter()

  return (
    <MenuBarComponent>
      <MenuBak src='images/menu-bak.png' />
      <TitleLogo src={process.env.NEXT_PUBLIC_URL + '/images/title-logo.png'} />
      <MenuBtn onClick={() => router.push('/about')}>ABOUT</MenuBtn>
      <MenuBtn>WORKS</MenuBtn>
      <MenuBtn>OBJECT</MenuBtn>
      <MenuBtn onClick={() => router.push('/guest')}>GUEST BOOK</MenuBtn>
    </MenuBarComponent>
  )
}

const MenuBarComponent = styled.div`
  width: 201px;
  height: 100vh;
  background: var(--unnamed, #f4f9fb);
  position: fixed;
  padding-top: 40px;
  padding-left: 24px;

  // border 두 줄 넣기
  border-right: 2px solid var(--unnamed, #000);
  &::before,
  &::after {
    pointer-events: none;
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 2px;
    bottom: 0px;
    border-right: 1px solid; /* 두 번째 border */
  }
  z-index: 1000;
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
  margin-bottom: 60px;
`
const MenuBtn = styled.div`
  width: 150px;
  height: 34px;
  line-height: 34px;
  padding: 0px 16px;
  border: 1px solid var(--unnamed, #000);
  font-family: DOSSaemmul;
  font-size: 23px;
  margin-bottom: 27px;
  cursor: pointer;
  z-index: 999;
`

export default MenuBar
