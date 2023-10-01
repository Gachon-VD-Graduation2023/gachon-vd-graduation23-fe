'use client'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter, usePathname } from 'next/navigation'
import '../../public/fonts/font.css'
import { subscribe } from 'diagnostics_channel'

function MenuBar() {
  const menuList = ['about', 'works', 'object', 'guest book']
  const worksMenuList = ['all', 'bx', 'graphic', 'illustration', 'media', 'uxui']
  const baseUrl = process.env.NEXT_PUBLIC_URL
  const router = useRouter()
  const pathname = usePathname()

  const getCurrentMenu = () => {
    const parts = pathname.split('/')
    return parts[1] || ''
  }
  const [currentMenu, setCurrentMenu] = useState(getCurrentMenu())

  const getCurrentWorksMenu = () => {
    if (currentMenu === 'works') {
      const parts = pathname.split('/')
      return parts[2] || ''
    } else return ''
  }
  const [currentWorksMenu, setCurrentWorksMenu] = useState(getCurrentWorksMenu())

  useEffect(() => {
    getCurrentMenu()
  }, [pathname])

  return (
    <MenuBarComponent>
      <MenuBak src={baseUrl + '/images/menu-bak.png'} />
      <TitleLogo src={baseUrl + '/images/title-logo.png'} />
      {menuList.map((menu, i) => {
        return (
          <>
            {menu === currentMenu ? (
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
                  if (menu === 'object') {
                    setCurrentMenu('object')
                    setCurrentWorksMenu('')
                    router.push('/object/all')
                  } else if (menu !== 'works') {
                    setCurrentMenu(menu)
                    setCurrentWorksMenu('')
                    router.push(`/${menu}`)
                  } else {
                    setCurrentMenu('works')
                  }
                }}
              >
                {menu.toUpperCase()}
              </MenuBtn>
            )}

            {menu === 'works' && currentMenu === 'works' ? (
              <WorksMenuContainer>
                {worksMenuList.map((worksMenu, i) => (
                  <div>
                    {worksMenu === currentWorksMenu ? (
                      <SelectedWorksMenu>
                        {worksMenu === 'uxui' ? 'UX/UI' : worksMenu.toUpperCase()}
                      </SelectedWorksMenu>
                    ) : (
                      <WorksMenu
                        onClick={() => {
                          setCurrentWorksMenu(worksMenu)
                          router.push(`/works/${worksMenu}`)
                        }}
                      >
                        {worksMenu === 'uxui' ? 'UX/UI' : worksMenu.toUpperCase()}
                      </WorksMenu>
                    )}
                  </div>
                ))}
              </WorksMenuContainer>
            ) : null}
          </>
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
const WorksMenuContainer = styled.div`
  padding-left: 11px;
  padding-top: 20px;
  padding-bottom: 4px;
  margin-top: -27px;
`
const SelectedWorksMenu = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: black;
    margin-right: 6px; /* 박스와 텍스트 사이 간격 조절 */
  }
`
const WorksMenu = styled.div`
  color: #7a7a7a;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  cursor: pointer;
  margin-left: 14px;
`

export default MenuBar
