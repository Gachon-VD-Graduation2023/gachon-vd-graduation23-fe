'use client'

import { styled } from 'styled-components'
import * as aboutData from './aboutData'
import ReactHtmlParser from 'html-react-parser'
import { IconDot, IconFont } from '../../../public/svgs'
import Image from 'next/image'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useBetterMediaQuery } from '@/utils/common.util'

const About = () => {
  const isMobile = useBetterMediaQuery('(max-width: 500px)')

  const aboutImageRef_1 = useRef<any>(null)
  const topContainer = useRef<any>(null)
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState<boolean>(false)

  const handleScroll = (e: any) => {
    if (topContainer && topContainer.current) {
      setScrollY(Math.abs(topContainer.current.getBoundingClientRect().top))
    }
  }

  useEffect(() => {
    setMounted(true)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // document.body.addEventListener('scroll', handleScroll)
    // return () => document.body.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    mounted &&
    (isMobile ? (
      <MobileContainer ref={topContainer}>
        <TopContainer top={'339px'} left={'42px'} style={{ zIndex: 1 }}>
          <MobileMainContainer width={239} height={67} padding={'8px 0'}>
            <IconDot style={{ position: 'absolute', top: '0', left: '0' }} />
            {ReactHtmlParser(aboutData.MOBILE_ABOUT_TITLE)}
          </MobileMainContainer>
          <MobileContentContainer
            width={269}
            height={419}
            padding={'20px'}
            style={{ marginLeft: '17px' }}
          >
            <div>{ReactHtmlParser(aboutData.ABOUT_CONTENT_1)}</div>
          </MobileContentContainer>
          <MobileOverlayContainer
            width={269}
            height={490}
            padding={'21px'}
            style={{ marginLeft: '17px' }}
          >
            {aboutData.MOBILE_CONTENT_ENG_1}
          </MobileOverlayContainer>
        </TopContainer>
        <Image
          src={process.env.NEXT_PUBLIC_URL + '/images/about/mobile/image-about-asset-1.png'}
          width={288}
          height={288}
          alt={''}
          style={{
            position: 'absolute',
            left: -88,
            top: scrollY < 620 ? 900 : 900 + (scrollY - 620) * 0.4,
          }}
          priority
        />
        <Image
          src={process.env.NEXT_PUBLIC_URL + '/images/about/mobile/image-about-asset-2.png'}
          width={341}
          height={1852}
          alt={''}
          style={{
            position: 'absolute',
            left: 5,
            top: scrollY < 1200 ? 1100 : 1100 + (scrollY - 1200) * 0.3,
          }}
        />
        <Image
          src={process.env.NEXT_PUBLIC_URL + '/images/about/mobile/image-about-asset-3.png'}
          width={475}
          height={2124}
          alt={''}
          style={{
            position: 'absolute',
            left: -60,
            top: scrollY < 1400 ? 500 : 500 + (scrollY - 1400) * 0.5,
          }}
        />
        <Image
          src={process.env.NEXT_PUBLIC_URL + '/images/about/mobile/image-about-asset-4.png'}
          width={1200}
          height={1405}
          alt={''}
          style={{
            position: 'absolute',
            left: -248,
            top: scrollY < 2255 ? 2450 : 2450 + (scrollY - 2255) * 0.4,
          }}
        />
        <Image
          src={process.env.NEXT_PUBLIC_URL + '/images/about/mobile/image-about-asset-5.png'}
          width={502}
          height={585}
          alt={''}
          style={{
            position: 'absolute',
            left: 20,
            top: scrollY * 0.4,
          }}
        />
        <Image
          src={process.env.NEXT_PUBLIC_URL + '/images/about/mobile/image-poster.png'}
          width={289}
          height={410}
          alt={''}
          style={{ position: 'absolute', left: 42, top: 1499 }}
        />
        <TopContainer top={'2161px'} left={'42px'}>
          <MobileSubTitleContainer width={186} height={35} padding={'0'}>
            <IconDot style={{ position: 'absolute', top: '0', left: '0' }} />
            <div>{aboutData.ABOUT_SUB_TITLE_1}</div>
          </MobileSubTitleContainer>
          <MobileContentContainer
            width={269}
            height={187}
            padding={'20px'}
            style={{ marginLeft: '18px' }}
          >
            {aboutData.MOBILE_ABOUT_CONTENT_2}
          </MobileContentContainer>
          <MobileOverlayContainer
            width={269}
            height={202}
            padding={'20px'}
            style={{ marginLeft: '18px' }}
          >
            {aboutData.MOBILE_CONTENT_ENG_2}
          </MobileOverlayContainer>
        </TopContainer>
        <TopContainer top={'2789px'} left={'40px'} style={{ zIndex: 1 }}>
          <MobileSubTitleContainer
            width={270}
            height={73}
            padding={'10px 0px 10px 24px'}
            style={{ fontSize: '20px', justifyContent: 'flex-start', lineHeight: '130%' }}
          >
            <IconDot style={{ position: 'absolute', top: '0', left: '0' }} />
            <div>{aboutData.MOBILE_ABOUT_SUB_TITLE_2}</div>
          </MobileSubTitleContainer>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '19px' }}>
            <MobileContentContainer
              width={269}
              height={259}
              padding='20px 0 20px 20px'
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}
            >
              {aboutData.ABOUT_CATEGORIES.map(({ title, content }, index) => {
                return (
                  <div key={index} style={{ fontSize: '14px', fontWeight: 500 }}>
                    <div style={{ marginBottom: '5px' }}>
                      <b>{title}</b>
                    </div>
                    <div>{content}</div>
                  </div>
                )
              })}
            </MobileContentContainer>
            <MobileOverlayContainer
              width={269}
              height={281}
              padding='20px'
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}
            >
              {aboutData.MOBILE_ABOUT_CATEGORIES_ENG.map(({ title, content }, index) => {
                return (
                  <div key={index} style={{ fontSize: '14px', fontWeight: 500 }}>
                    <div style={{ marginBottom: '5px' }}>
                      <b>{title}</b>
                    </div>
                    <div>{content}</div>
                  </div>
                )
              })}
            </MobileOverlayContainer>
          </div>
        </TopContainer>
        <TopContainer top={'3532px'} left={'0'} style={{ zIndex: 1, alignItems: 'center' }}>
          <SubTitleContainer width={199} height={44}>
            <IconDot style={{ position: 'absolute', top: '0', left: '0' }} />
            <div>{aboutData.ABOUT_SUB_TITLE_3}</div>
          </SubTitleContainer>
          <MobileLastContainer>
            {aboutData.MOBILE_ABOUT_CONTENT_3.map(({ title, subContent }, index) => {
              return (
                <MobileTable key={index}>
                  <div style={{ width: '90px' }}>{title === '' ? <div></div> : title}</div>
                  {title === '졸업준비위원회' ? (
                    <div
                      style={{
                        width: '230px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '16px 0',
                      }}
                    >
                      {subContent.map(({ subTitle, name }, id) => {
                        return (
                          <MobileFinalInnerTable
                            style={{ width: id % 2 == 0 ? '100px' : 'auto' }}
                            key={id}
                          >
                            <div
                              style={{
                                width: '36px',
                                color: '#6A6A6A',
                                fontWeight: 500,
                                letterSpacing: subTitle === '웹 팀' ? '3.5px' : '0',
                              }}
                            >
                              {subTitle}
                            </div>
                            {name.length > 1 ? (
                              <div
                                style={{
                                  width: '80px',
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  gap: '8px',
                                }}
                              >
                                {name.map((obj, idx) =>
                                  obj === '차인' ? (
                                    <p key={idx} style={{ letterSpacing: '10px' }}>
                                      <b>{obj}</b>
                                    </p>
                                  ) : (
                                    <p key={idx}>
                                      <b>{obj}</b>
                                    </p>
                                  ),
                                )}
                              </div>
                            ) : (
                              <div>
                                {name.map((obj, idx) => (
                                  <p key={idx}>{obj}</p>
                                ))}
                              </div>
                            )}
                          </MobileFinalInnerTable>
                        )
                      })}
                    </div>
                  ) : (
                    <div>
                      {subContent.map(({ subTitle, name }, id) => {
                        return (
                          <MobileFinalInnerTable key={id}>
                            <div
                              style={{
                                width: subTitle === '폰트' ? '38px' : '42px',
                                marginBottom: '16px',
                                color: '#6A6A6A',
                                fontWeight: 500,
                                letterSpacing: subTitle === '폰트' ? '8.5px' : '0',
                              }}
                            >
                              {subTitle}
                            </div>
                            <div style={{ display: 'flex' }}>
                              {name.map((obj, idx) => (
                                <p key={idx} style={{ marginRight: '8px' }}>
                                  {obj}
                                </p>
                              ))}
                            </div>
                          </MobileFinalInnerTable>
                        )
                      })}
                    </div>
                  )}
                </MobileTable>
              )
            })}
          </MobileLastContainer>
          <MobileTag>GCVD 2023 Graduation Exhibition</MobileTag>
        </TopContainer>
      </MobileContainer>
    ) : (
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
            top: -225 + scrollY * 0.4,
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
            top: scrollY < 600 ? 1300 : 1300 + (scrollY - 600) * 0.4,
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
            top: scrollY < 1300 ? 1200 : 1200 + (scrollY - 1300) * 0.4,
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
            top: scrollY < 400 ? 800 : 800 + (scrollY - 400) * 0.6,
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
            top: scrollY < 350 ? 700 : 700 + (scrollY - 350) * 0.3,
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
        <TopContainer
          top={'2872px'}
          left={'calc(50%)'}
          style={{
            zIndex: 1,
            transform: 'translateX(-50%)',
            width: 'calc(100vw - 201px)',
            alignItems: 'center',
          }}
        >
          <SubTitleContainer width={411} height={50}>
            <IconDot style={{ position: 'absolute', top: '0', left: '0' }} />
            <div>{aboutData.ABOUT_SUB_TITLE_2}</div>
          </SubTitleContainer>
          <div style={{ display: 'flex' }}>
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
                    <div>
                      <b>{title}</b>
                    </div>
                    <div>{content}</div>
                  </Table>
                )
              })}
            </ContentContainer>
            <OverlayContainer
              width={483}
              height={248}
              padding='40px 0 40px 40px'
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}
            >
              {aboutData.MOBILE_ABOUT_CATEGORIES_ENG.map(({ title, content }, index) => {
                return (
                  <Table key={index} style={{ fontSize: '14px' }}>
                    <div style={{ width: '130px' }}>
                      <b>{title}</b>
                    </div>
                    <div>{content}</div>
                  </Table>
                )
              })}
            </OverlayContainer>
          </div>
        </TopContainer>
        <TopContainer
          top={'3289px'}
          left={'calc(50%)'}
          style={{
            zIndex: 1,
            alignItems: 'center',
            transform: 'translateX(-50%)',
          }}
        >
          <SubTitleContainer width={199} height={44}>
            <IconDot style={{ position: 'absolute', top: '0', left: '0' }} />
            <div>{aboutData.ABOUT_SUB_TITLE_3}</div>
          </SubTitleContainer>
          <LastContainer>
            {aboutData.ABOUT_CONTENT_3.map(({ title, subContent }, index) => {
              return (
                <FinalTable key={index}>
                  <div>
                    <b>{title === '' ? <div style={{ height: '24px' }}></div> : title}</b>
                  </div>
                  <div>
                    {subContent.map(({ subTitle, name }, id) => {
                      return (
                        <FinalInnerTable key={id}>
                          <div
                            style={{
                              width: '70px',
                              color: '#6A6A6A',
                              marginBottom: '20px',
                              letterSpacing: subTitle === '폰트' ? '13.3px' : '0',
                            }}
                          >
                            {subTitle}
                          </div>
                          {title === '졸업준비위원회' ? (
                            <div style={{ width: '60px' }}>
                              {name.map((obj, idx) => (
                                <p key={idx}>
                                  <b>{obj}</b>
                                </p>
                              ))}
                            </div>
                          ) : title === '' ? (
                            <div
                              style={{
                                width: '100px',
                                display: 'flex',
                                flexWrap: 'wrap',
                              }}
                            >
                              {name.map((obj, idx) =>
                                obj === '차인' ? (
                                  <p key={idx} style={{ letterSpacing: '11px' }}>
                                    <b>{obj}</b>
                                  </p>
                                ) : (
                                  <p key={idx}>
                                    <b>{obj}</b>
                                  </p>
                                ),
                              )}
                            </div>
                          ) : title === '후원' ? (
                            <div>
                              {name.map((obj, idx) => (
                                <div style={{ display: 'flex', gap: '12px' }} key={idx}>
                                  <b>{obj}</b>
                                  <IconFont />
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div>
                              {name.map((obj, idx) => (
                                <p key={idx}>
                                  <b>{obj}</b>
                                </p>
                              ))}
                            </div>
                          )}
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
    ))
  )
}

export default About

const MobileContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 4061px;
  background: linear-gradient(180deg, #18b6ec 0%, #d0f0fb 41.98%, #fff 100%);

  position: relative;
  overflow: hidden;
`

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

const MobileContentContainer = styled.div<{
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

  font-size: 14px;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.35px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
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

const MobileLastContainer = styled.div`
  width: 100vw;
  max-width: 500px;
  height: 440px;
  padding: 36px 0 0 20px;

  border-top: 1px solid #080504;
  background: #fff;
  font-family: Pretendard;

  word-wrap: break-word;
  white-space: pre-line;
  word-break: break-all;

  font-size: 12px;
  font-style: normal;
  font-weight: 700;

  display: flex;
  gap: 60px;
  flex-direction: column;
  position: relative;
`

const LastContainer = styled.div`
  width: calc(100vw - 201px);
  height: 342px;
  padding: 48px 135px 89px 74px;

  border-top: 1px solid #080504;
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
const MobileMainContainer = styled(MobileContentContainer)`
  color: var(--, #000);
  font-size: 20px;
  font-weight: 700;
  line-height: 133.5%; /* 42.72px */

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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

const MobileOverlayContainer = styled(MobileContentContainer)`
  background: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  font-size: 12px;
  word-break: keep-all;
  line-height: 150%;
`

const OverlayContainer = styled(ContentContainer)`
  background: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
`

const MobileSubTitleContainer = styled(MobileContentContainer)`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;

  display: flex;
  align-items: center;
  justify-content: center;
`

const SubTitleContainer = styled(ContentContainer)`
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;

  display: flex;
  align-items: center;
  justify-content: center;
`

const MobileTable = styled.div`
  display: flex;
  gap: 17px;
`

const Table = styled.div`
  display: flex;
  gap: 36px;
`

const FinalTable = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 38px;
  font-weight: 500;
`
const MobileFinalInnerTable = styled.div`
  display: flex;
  gap: 8px;
`

const FinalInnerTable = styled.div`
  display: flex;
  gap: 20px;
  & > div {
    width: 200px;
    display: flex;
    gap: 8px;
  }
`

const MobileTag = styled.div`
  width: 100vw;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;

  color: #575757;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 12px */
`
