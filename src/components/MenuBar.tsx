'use client'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter, usePathname } from 'next/navigation'
import '../../public/fonts/font.css'

function MenuBar() {
  const menuList = ['about', 'works', 'object', 'guest book']
  const [currentMenu, setCurrentMenu] = useState('')
  const baseUrl = process.env.NEXT_PUBLIC_URL
  const router = useRouter()
  const pathname = usePathname()

  const getCurrentMenu = () => {
    //url에서 현재 메뉴 값 받아오기
    const url = window.location.href
    const startIndex = url.indexOf(baseUrl!) + baseUrl!.length + 1 // 시작 인덱스
    const endIndex = url.indexOf('/', startIndex) // '/' 다음 인덱스를

    const subString =
      endIndex !== -1 ? url.substring(startIndex, endIndex) : url.substring(startIndex)

    setCurrentMenu(subString)
  }

  useEffect(() => {
    getCurrentMenu()
  }, [pathname])

  return (
    <MenuBarComponent>
      <MenuBak src={baseUrl + '/images/menu-bak.png'} />
      <TitleLogo src={baseUrl + '/images/title-logo.png'} />
      {menuList.map((menu, i) => {
        return menu === currentMenu ? (
          <SelectedMenuBtn>
            <BottomLeftCorner />
            <BottomRightCorner />
            <TopRightCorner />
            <TopLeftCorner />
            {menu.toUpperCase()}
          </SelectedMenuBtn>
        ) : (
          <MenuBtn
            onClick={() => {
              if (menu === 'object') router.push('/object/all')
              else router.push(`${menu}`)
            }}
          >
            {menu.toUpperCase()}
          </MenuBtn>
        )
      })}
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
    pointer-events: none;
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
const SelectedMenuBtn = styled.div`
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
  position: relative;
`

const TopLeftCorner = styled.div`
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  width: 8px;
  height: 8px;
  background-color: white;
  border: 1px solid;
`

const TopRightCorner = styled.div`
  content: '';
  position: absolute;
  top: -4px;
  right: -4px;
  width: 8px;
  height: 8px;
  background-color: white;
  border: 1px solid;
`

const BottomLeftCorner = styled.div`
  content: '';
  position: absolute;
  bottom: -4px;
  left: -4px;
  width: 8px;
  height: 8px;
  background-color: white;
  border: 1px solid;
`

const BottomRightCorner = styled.div`
  content: '';
  position: absolute;
  bottom: -4px;
  right: -4px;
  width: 8px;
  height: 8px;
  background-color: white;
  border: 1px solid;
`

export default MenuBar
