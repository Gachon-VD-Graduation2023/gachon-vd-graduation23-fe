'use client'
import React, { useEffect, useState } from 'react'
import WorkThumbnail from '@/components/Works/WorkThumbnail'
import SplashThumbnail from '@/components/Works/SplashThumbnail'
import styled from 'styled-components'
import Footer from '@/components/Footer'
import { useBetterMediaQuery, useVh } from '@/utils/common.util'
import { useRouter, usePathname } from 'next/navigation'
import {
  getAllWorkList,
  getBxWorkList,
  getGraphicWorkList,
  getIllustrationWorkList,
  getMediaWorkList,
  getUxuiWorkList,
} from '@/app/api/works.api'
import { WorkListData } from '@/types/works.type'

export default function Works({ params }: { params: { menu: string } }) {
  const isMobile = useBetterMediaQuery('(max-width: 500px)')
  const [data, setData] = useState<WorkListData[] | null>(null)
  const router = useRouter()
  const menu = ['BX', 'Graphic', 'Illustration', 'Media', 'UXUI']

  const getWorkList = async () => {
    try {
      if (params.menu === 'all') {
        const fetchedData: WorkListData[] = await getAllWorkList()
        setData(fetchedData)
      } else if (params.menu === 'bx') {
        const fetchedData: WorkListData[] = await getBxWorkList()
        setData(fetchedData)
      } else if (params.menu === 'graphic') {
        const fetchedData: WorkListData[] = await getGraphicWorkList()
        setData(fetchedData)
      } else if (params.menu === 'illustration') {
        const fetchedData: WorkListData[] = await getIllustrationWorkList()
        setData(fetchedData)
      } else if (params.menu === 'media') {
        const fetchedData: WorkListData[] = await getMediaWorkList()
        setData(fetchedData)
      } else if (params.menu === 'uxui') {
        const fetchedData: WorkListData[] = await getUxuiWorkList()
        setData(fetchedData)
      }
    } catch (error) {
      console.error('Error setting work list:', error)
    }
  }

  useEffect(() => {
    getWorkList()
  }, [params.menu])

  const vh = useVh()
  return (
    <>
      {!isMobile ? (
        <>
          <Root>
            <Container>
              <Contents>
                {data?.map((data, i) =>
                  i !== 0 && (i + 1) % 7 === 0 ? (
                    <SplashThumbnail idx={i} key={i} />
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
                <SelectedMenuBtn key={i}>{menu === 'UXUI' ? 'UX/UI' : menu}</SelectedMenuBtn>
              ) : (
                <MenuBtn
                  onClick={() => {
                    router.push(`/works/${menu.toLowerCase()}`)
                  }}
                  key={i}
                >
                  {menu === 'UXUI' ? 'UX/UI' : menu}
                </MenuBtn>
              )
            })}
          </MenuBar>
          <MobileContents vh={vh}>
            {data?.map((data, i) =>
              i !== 0 && (i + 1) % 5 === 0 ? (
                <SplashThumbnail idx={i} key={i} />
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
