'use client'

import { styled } from 'styled-components'
import * as aboutData from './aboutData'
import ReactHtmlParser from 'react-html-parser'
import { IconDot } from '../../../public/svgs'
import Image from 'next/image'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

const About = () => {
  const aboutImageRef_1 = useRef<any>(null)
  const topContainer = useRef<any>(null)
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [speeds, setSpeeds] = useState([1]) // 이미지마다 다른 속도 적용
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScroll = (e: any) => {
    setScrollY(Math.abs(topContainer.current.getBoundingClientRect().top))
    console.log(topContainer.current.getBoundingClientRect().top)

    console.log(window.scrollY)
  }
  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll)
    return () => document.body.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    mounted && (
      <Container ref={topContainer}>
        <TopContainer top={'239px'} left={'56px'} style={{ zIndex: 1 }}>
          <MainContainer width={380} height={106} padding={'10px 0px'}>
            <IconDot style={{ position: 'absolute', top: '0', left: '0' }} />
            {ReactHtmlParser(aboutData.ABOUT_TITLE)}
          </MainContainer>
          <ContentContainer width={483} height={365} padding={'0 40px'}>
            <div>{ReactHtmlParser(aboutData.ABOUT_CONTENT_1)}</div>
          </ContentContainer>
          <OverlayContainer width={483} height={504} padding={'37px 46px 34px 44px'}>
            {aboutData.ABOUT_CONTENT_ENG_1}
          </OverlayContainer>
        </TopContainer>
        <Image
          src={process.env.NEXT_PUBLIC_URL + '/images/about/image-about-asset-1.png'}
          width={1250}
          height={1456}
          alt={''}
          style={{
            position: 'absolute',
            left: 380,
            top: scrollY > 400 ? -225 + 400 * 0.4 : -225 + scrollY * 0.4,
          }}
          ref={aboutImageRef_1}
          priority
        />
        <Image
          src={process.env.NEXT_PUBLIC_URL + '/images/about/image-about-asset-2.png'}
          width={610}
          height={610}
          alt={''}
          style={{
            position: 'absolute',
            left: -230,
            top:
              scrollY < 600
                ? 1478
                : scrollY > 1400
                ? 1478 + (1400 - 600) * 0.4
                : 1478 + (scrollY - 600) * 0.4,
          }}
        />
        <Image
          src={process.env.NEXT_PUBLIC_URL + '/images/about/image-about-asset-3.png'}
          width={2582.5}
          height={3021}
          alt={''}
          style={{
            position: 'absolute',
            left: -355,
            top:
              scrollY < 1400
                ? 1400
                : scrollY > 2000
                ? 1400 + (scrollY - 1400) * 0.4
                : 1400 + (scrollY - 1400) * 0.4,
          }}
        />
        <Image
          src={process.env.NEXT_PUBLIC_URL + '/images/about/image-about-asset-4.png'}
          width={791}
          height={847}
          alt={''}
          style={{
            position: 'absolute',
            left: 328,
            top:
              scrollY < 400
                ? 1259
                : scrollY > 1200
                ? 1259 + (1200 - 400) * 0.6
                : 1259 + (scrollY - 400) * 0.6,
          }}
        />
        <Image
          src={process.env.NEXT_PUBLIC_URL + '/images/about/image-about-asset-5.png'}
          width={854}
          height={1693}
          alt={''}
          style={{
            position: 'absolute',
            left: 86,
            top:
              scrollY < 350
                ? 900
                : scrollY > 1200
                ? 900 + (1200 - 350) * 0.3
                : 900 + (scrollY - 350) * 0.3,
          }}
        />
        <Image
          src={process.env.NEXT_PUBLIC_URL + '/images/about/image-poster.png'}
          width={496}
          height={702}
          alt={''}
          style={{ position: 'absolute', left: 686, top: 1161 }}
        />
        <TopContainer top={'1730px'} left={'56px'}>
          <SubTitleContainer width={268} height={50} padding={'0'}>
            <IconDot style={{ position: 'absolute', top: '0', left: '0' }} />
            <div>{aboutData.ABOUT_SUB_TITLE_1}</div>
          </SubTitleContainer>
          <ContentContainer
            width={483}
            height={174}
            padding={'0 32px'}
            style={{ marginLeft: '31px' }}
          >
            {aboutData.ABOUT_CONTENT_2}
          </ContentContainer>
          <OverlayContainer
            width={483}
            height={225}
            padding={'0 40px'}
            style={{ marginLeft: '31px' }}
          >
            {aboutData.ABOUT_CONTENT_ENG_2}
          </OverlayContainer>
        </TopContainer>
        <TopContainer top={'2872px'} left={'418px'} style={{ zIndex: 1 }}>
          <SubTitleContainer width={411} height={50}>
            <IconDot style={{ position: 'absolute', top: '0', left: '0' }} />
            <div>{aboutData.ABOUT_SUB_TITLE_2}</div>
          </SubTitleContainer>
          <div style={{ display: 'flex', marginLeft: '-284px' }}>
            <ContentContainer
              width={483}
              height={248}
              padding='40px 0 40px 40px'
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}
            >
              {aboutData.ABOUT_CATEGORIES.map(({ title, content }, index) => {
                return (
                  <Table key={index}>
                    <div>{title}</div>
                    <div>{content}</div>
                  </Table>
                )
              })}
            </ContentContainer>
            <OverlayContainer width={483} height={248} padding='0 40px'>
              {aboutData.ABOUT_CONTENT_ENG_3}
            </OverlayContainer>
          </div>
        </TopContainer>
        <TopContainer top={'3289px'} left={'0'} style={{ zIndex: 1, alignItems: 'center' }}>
          <SubTitleContainer width={199} height={44}>
            <IconDot style={{ position: 'absolute', top: '0', left: '0' }} />
            <div>{aboutData.ABOUT_SUB_TITLE_3}</div>
          </SubTitleContainer>
          <LastContainer>
            {aboutData.ABOUT_CONTENT_3.map(({ title, subContent }, index) => {
              return (
                <FinalTable key={index}>
                  <div>{title === '' ? <div></div> : title}</div>
                  <div>
                    {subContent.map(({ subTitle, name }, index) => {
                      return (
                        <FinalInnerTable key={index}>
                          <div style={{ width: 'auto' }}>{subTitle}</div>
                          <p>{name}</p>
                        </FinalInnerTable>
                      )
                    })}
                  </div>
                </FinalTable>
              )
            })}
          </LastContainer>
        </TopContainer>
      </Container>
    )
  )
}

export default About

const Container = styled.div`
  width: calc(100vw - 201px);
  height: 3675px;
  background: linear-gradient(180deg, #17b6ec 0%, #fcfeff 100%);
  margin-left: 201px;
  position: relative;
  overflow: hidden;
`

const TopContainer = styled.div<{
  top: string
  left: string
}>`
  position: absolute;
  top: ${(props) => `${props.top}`};
  left: ${(props) => `${props.left}`};

  display: flex;
  flex-direction: column;
`

const ContentContainer = styled.div<{
  width: number
  height: number
  padding?: string
}>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  padding: ${(props) => (props.padding ? `${props.padding}` : '0px')};

  border: 1px solid #080504;
  background: #fff;
  font-family: Pretendard;

  word-wrap: break-word;
  white-space: pre-line;
  word-break: break-all;

  font-size: 16px;
  font-weight: 500;
  line-height: 150%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`

const LastContainer = styled.div`
  width: 100vw;
  height: 342px;
  padding: 48px 135px 89px 74px;

  border: 1px solid #080504;
  background: #fff;
  font-family: Pretendard;

  word-wrap: break-word;
  white-space: pre-line;
  word-break: break-all;

  font-size: 16px;
  font-weight: 500;
  line-height: 150%;

  display: flex;
  gap: 100px;
  position: relative;
`

const MainContainer = styled(ContentContainer)`
  color: var(--, #000);
  font-size: 32px;
  font-weight: 700;
  line-height: 133.5%; /* 42.72px */

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const OverlayContainer = styled(ContentContainer)`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(15px);
`

const SubTitleContainer = styled(ContentContainer)`
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Table = styled.div`
  display: flex;
  gap: 36px;
`

const FinalTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 38px;
`

const FinalInnerTable = styled.div`
  display: flex;
  gap: 20px;
`
