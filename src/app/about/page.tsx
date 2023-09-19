'use client'

import { styled } from 'styled-components'
import * as aboutData from './aboutData'
import ReactHtmlParser from 'react-html-parser'
import { IconDot } from '../../../public/svgs'
import Image from 'next/image'

const About = () => {
  return (
    <Container>
      <TopContainer top={239} left={56} style={{ zIndex: 1 }}>
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
        style={{ position: 'absolute', left: 350 }}
      />
      <Image
        src={process.env.NEXT_PUBLIC_URL + '/images/about/image-about-asset-2.png'}
        width={610}
        height={610}
        alt={''}
        style={{ position: 'absolute', left: -230, top: 1478 }}
      />
      <Image
        src={process.env.NEXT_PUBLIC_URL + '/images/about/image-about-asset-3.png'}
        width={2582.5}
        height={3021}
        alt={''}
        style={{ position: 'absolute', left: -350, bottom: -800 }}
      />
      <Image
        src={process.env.NEXT_PUBLIC_URL + '/images/about/image-about-asset-4.png'}
        width={791}
        height={847}
        alt={''}
        style={{ position: 'absolute', left: 328, top: 1259 }}
      />
      <Image
        src={process.env.NEXT_PUBLIC_URL + '/images/about/image-about-asset-5.png'}
        width={854}
        height={1693}
        alt={''}
        style={{ position: 'absolute', left: 86, top: 900 }}
      />
      <TopContainer top={1730} left={56}>
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
      <TopContainer top={2872} left={418} style={{ zIndex: 1 }}>
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
                <Table>
                  <p>{title}</p>
                  <p>{content}</p>
                </Table>
              )
            })}
          </ContentContainer>
          <OverlayContainer width={483} height={248} padding='0 40px'>
            {aboutData.ABOUT_CONTENT_ENG_3}
          </OverlayContainer>
        </div>
      </TopContainer>
      <TopContainer top={3289} left={418} style={{ zIndex: 1 }}>
        <SubTitleContainer width={199} height={44}>
          <IconDot style={{ position: 'absolute', top: '0', left: '0' }} />
          <div>{aboutData.ABOUT_SUB_TITLE_3}</div>
        </SubTitleContainer>
        <LastContainer>
          {aboutData.ABOUT_CONTENT_3.map(({ title, subContent }, index) => {
            return (
              <FinalTable>
                <p>{title === '' ? <div></div> : title}</p>
                <p>
                  {subContent.map(({ subTitle, name }, index) => {
                    return (
                      <FinalInnerTable>
                        <div style={{ width: 'auto' }}>{subTitle}</div>
                        <p>{name}</p>
                      </FinalInnerTable>
                    )
                  })}
                </p>
              </FinalTable>
            )
          })}
        </LastContainer>
      </TopContainer>
    </Container>
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
  top: number
  left: number
}>`
  position: absolute;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};

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
  margin-left: -418px;

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
