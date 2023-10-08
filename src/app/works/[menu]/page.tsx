'use client'
import React, { useEffect } from 'react'
import WorkThumbnail from '@/components/Works/WorkThumbnail'
import SplashThumbnail from '@/components/Works/SplashThumbnail'
import styled from 'styled-components'
import Footer from '@/components/Footer'
import { useBetterMediaQuery, useVh } from '@/utils/common.util'
import { useRouter, usePathname } from 'next/navigation'

export default function Works({ params }: { params: { menu: string } }) {
  const isMobile = useBetterMediaQuery('(max-width: 500px)')
  const data = [
    { img: '', title: '작품1', artist: '작가1' },
    { img: '', title: '작품2', artist: '작가2' },
    { img: '', title: '작품3', artist: '작가3' },
    { img: '', title: '작품4', artist: '작가4' },
    { img: '', title: '작품5', artist: '작가5' },
    { img: '', title: '작품6', artist: '작가6' },
    { img: '', title: '작품7', artist: '작가7' },
    { img: '', title: '작품8', artist: '작가8' },
    { img: '', title: '작품9', artist: '작가9' },
    { img: '', title: '작품10', artist: '작가10' },
    { img: '', title: '작품11', artist: '작가11' },
    { img: '', title: '작품12', artist: '작가12' },
    { img: '', title: '작품13', artist: '작가13' },
    { img: '', title: '작품14', artist: '작가14' },
    { img: '', title: '작품15', artist: '작가15' },
    { img: '', title: '작품16', artist: '작가16' },
    { img: '', title: '작품17', artist: '작가17' },
    { img: '', title: '작품18', artist: '작가18' },
    { img: '', title: '작품19', artist: '작가19' },
    { img: '', title: '작품20', artist: '작가20' },
    { img: '', title: '작품21', artist: '작가21' },
    { img: '', title: '작품22', artist: '작가22' },
  ]
  const router = useRouter()
  const menu = ['BX', 'Graphic', 'Illustration', 'Media', 'UXUI']
  const vh = useVh()
  return (
    <>
      {!isMobile ? (
        <>
          <Root>
            <Container>
              <Contents>
                {data.map((data, i) =>
                  i !== 0 && (i + 1) % 7 === 0 ? (
                    <SplashThumbnail idx={i} />
                  ) : (
                    <WorkThumbnail data={data} key={i} />
                  ),
                )}
              </Contents>
            </Container>
          </Root>
        </>
      ) : (
        <>
          <MenuBar>
            {menu.map((menu, i) => {
              return menu.toLowerCase() === params.menu ? (
                <SelectedMenuBtn>{menu === 'UXUI' ? 'UX/UI' : menu}</SelectedMenuBtn>
              ) : (
                <MenuBtn
                  onClick={() => {
                    router.push(`/works/${menu.toLowerCase()}`)
                  }}
                >
                  {menu === 'UXUI' ? 'UX/UI' : menu}
                </MenuBtn>
              )
            })}
          </MenuBar>
          <MobileContents vh={vh}>
            {data.map((data, i) =>
              i !== 0 && (i + 1) % 5 === 0 ? (
                <SplashThumbnail idx={i} />
              ) : (
                <WorkThumbnail data={data} key={i} />
              ),
            )}
          </MobileContents>
        </>
      )}
      <Footer />
    </>
  )
}
const Root = styled.div`
  background-color: white;
  min-height: 100vh;
  background-image: url(https://i.imgur.com/yCV1WP3.jpg);
  background-size: cover;
`
const Container = styled.div`
  padding: 62px 0px 62px 201px;
  min-height: 100vh;
`
const Contents = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(289px, max-content));
  justify-content: center;
  grid-row-gap: 10px;
`
// const MobileContainer = styled.div<{ vh: number }>`
//   // overflow-y: hidden;
//   background-color: white;
//   height: ${(props) => `${100 * props.vh}px`};
//   // background-image: url(https://i.imgur.com/6Vak1vl.png);
//   // background-size: cover;
//   // min-height: ${(props) => `${100 * props.vh}px`};
// `
const MobileContents = styled.div<{ vh: number }>`
  overflow-y: scroll;
  min-height: ${(props) => `${100 * props.vh}px`};
  background-image: url(https://i.imgur.com/6Vak1vl.png);
  background-size: cover;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(157px, max-content));
  background-attachment: scroll;
  justify-content: center;
  grid-gap: 8px;
  padding-top: 100px;
  padding-bottom: 56px;
`
const MenuBar = styled.div`
  background-image: url(https://i.imgur.com/6Vak1vl.png);
  background-size: cover;
  overflow-y: hidden;
  display: flex;
  width: 100%;
  padding-top: 56px;
  position: fixed;
  z-index: 998;
`
const MenuBtn = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 0.5px solid black;
  border-right: 0.5px solid black;
  padding: 3px 0px 3px 0px;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
  &:first-child {
    border-left: none;
  }
  &:last-child {
    border-right: none;
  }
`
const SelectedMenuBtn = styled.div`
  border: 1px solid black;
  padding: 3px 0px 3px 0px;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  background-color: black;
  color: white;
  flex-grow: 1;
  text-align: center;
`
