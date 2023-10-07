'use client'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter, usePathname } from 'next/navigation'
import '../../public/fonts/font.css'
import { useBetterMediaQuery, useVh } from '@/utils/common.util'

function MenuBar() {
  const isMobile = useBetterMediaQuery('(max-width: 500px)')
  const menuList = ['about', 'works', 'object', 'guest book']
  const worksMenuList = ['all', 'bx', 'graphic', 'illustration', 'media', 'uxui']
  const baseUrl = process.env.NEXT_PUBLIC_URL
  const router = useRouter()
  const pathname = usePathname()
  const [currentMenu, setCurrentMenu] = useState('')
  const [currentWorksMenu, setCurrentWorksMenu] = useState('')
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const vh = useVh()

  const getCurrentMenu = () => {
    //url에서 현재 메뉴 값 받아오기
    const parts = pathname.split('/')
    setCurrentMenu(parts[1])
  }

  const getCurrentWorksMenu = () => {
    //현재 works 페이지 일 경우, works 메뉴 값 받아오기
    const parts = pathname.split('/')
    if (parts[1] === 'works') setCurrentWorksMenu(parts[2])
    else setCurrentWorksMenu('')
  }

  useEffect(() => {
    getCurrentMenu()
    getCurrentWorksMenu()
  }, [pathname])

  return (
    <>
      {!isMobile ? (
        <MenuBarComponent>
          <MenuBak src={baseUrl + '/images/menu-bak.png'} />
          <TitleLogo src={baseUrl + '/images/title-logo.png'} />
          {menuList.map((menu, i) => {
            return (
              <div key={i}>
                {menu === currentMenu ? (
                  <SelectedMenuBtn mobile='false'>
                    <BottomLeftCorner />
                    <BottomRightCorner />
                    <TopRightCorner />
                    <TopLeftCorner />
                    {menu.toUpperCase()}
                  </SelectedMenuBtn>
                ) : (
                  <MenuBtn
                    mobile='false'
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
                    {worksMenuList.map((worksMenu, j) => (
                      <div key={j}>
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
              </div>
            )
          })}
        </MenuBarComponent>
      ) : (
        <>
          <HamburgerIcon
            src={baseUrl + '/images/menu-hamburger.png'}
            onClick={() => {
              setShowMobileMenu(true)
            }}
          />
          {showMobileMenu ? <MobileBgArea vh={vh} /> : null}
          <MobileMenuBarComponent showmenu={showMobileMenu.toString()} vh={vh}>
            <div style={{ display: 'flex' }}>
              <MobileTitleLogo src={baseUrl + '/images/title-logo.png'} />
              <img
                className='close-icon'
                src={baseUrl + '/images/close-icon.png'}
                onClick={() => {
                  setShowMobileMenu(false)
                }}
              />
            </div>

            {menuList.map((menu, i) => {
              return (
                <div key={i}>
                  {menu === currentMenu ? (
                    <SelectedMenuBtn mobile='true'>
                      <BottomLeftCorner />
                      <BottomRightCorner />
                      <TopRightCorner />
                      <TopLeftCorner />
                      {menu.toUpperCase()}
                    </SelectedMenuBtn>
                  ) : (
                    <MenuBtn
                      mobile='true'
                      onClick={() => {
                        setShowMobileMenu(false)
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
                          router.push('/works/bx')
                        }
                      }}
                    >
                      {menu.toUpperCase()}
                    </MenuBtn>
                  )}
                </div>
              )
            })}
            <div className='bottom-logo'>Gachon University</div>
          </MobileMenuBarComponent>
        </>
      )}
    </>
  )
}

const MenuBarComponent = styled.div`
  width: 201px;
  height: 100vh;
  background: #f4f9fb;
  position: fixed;
  padding-top: 40px;
  padding-left: 24px;

  // border 두 줄 넣기
  border-right: 2px solid;
  &::before,
  &::after {
    pointer-events: none;
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 2px;
    bottom: 0px;
    border-right: 1px solid #666; /* 두 번째 border */
  }

  z-index: 1000;
`
//모바일 메뉴 활성화 되어있을 때 메뉴 이외에 검은색 반투명 레이어
const MobileBgArea = styled.div<{ vh: number }>`
  width: 100vw;
  height: ${(props) => `${100 * props.vh}px`};
  position: absolute;
  z-index: 900;
  background: rgba(0, 0, 0, 0.4);
`
const MobileMenuBarComponent = styled.div<{ showmenu: string; vh: number }>`
  width: 235px;
  height: ${(props) => `${100 * props.vh}px`};
  padding-top: 16px;
  padding-left: 16px;
  position: absolute;
  top: 0;
  left: ${(props) => (props.showmenu === 'true' ? '0' : '-235px')};
  transition: left 0.3s ease;
  z-index: 999;
  background: white;

  border-right: 1px solid;
  &::before,
  &::after {
    pointer-events: none;
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 2px;
    bottom: 0px;
    border-right: 1px solid #666; /* 두 번째 border */
  }

  .close-icon {
    width: 24px;
    height: 24px;
    margin-left: 119px;
    cursor: pointer;
  }

  .bottom-logo {
    position: absolute;
    bottom: 14px;
    right: 17px;
    color: #767676;
    font-family: DOSSaemmul;
    font-size: 12px;
    font-weight: 500;
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
const MobileTitleLogo = styled.img`
  width: 59px;
  height: 135px;
  margin-bottom: 46px;
`

const MenuBtn = styled.div<{ mobile: string }>`
  width: 150px;
  height: 34px;
  line-height: 34px;
  padding: 0px 16px;
  border: 1px solid var(--unnamed, #000);
  font-family: DOSSaemmul;
  font-size: ${(props) => (props.mobile === 'true' ? '16px' : '23px')};
  margin-bottom: ${(props) => (props.mobile === 'true' ? '16px' : '27px')};
  cursor: pointer;
  z-index: 999;
`
const SelectedMenuBtn = styled.div<{ mobile: string }>`
  width: 150px;
  height: 34px;
  line-height: 34px;
  padding: 0px 16px;
  border: 1px solid var(--unnamed, #000);
  font-family: DOSSaemmul;
  font-size: ${(props) => (props.mobile === 'true' ? '16px' : '23px')};
  margin-bottom: ${(props) => (props.mobile === 'true' ? '16px' : '27px')};
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

const HamburgerIcon = styled.img`
  position: fixed;
  top: 16px;
  left: 16px;
  width: 24px;
  height: 16px;
  cursor: pointer;
  z-index: 999;
`

export default MenuBar
