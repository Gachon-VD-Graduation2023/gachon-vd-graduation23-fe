'use client'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Footer from '@/components/Footer'
import { useBetterMediaQuery, useVh } from '@/utils/common.util'
import { WorkDetailData } from '@/types/works.type'
import Image from 'next/image'
import { getWorkDetailData } from '@/app/api/works.api'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function WorksDetail({ params }: { params: { menu: string; id: string } }) {
  const isUnder1000 = useBetterMediaQuery('(max-width: 1000px)')
  const isUnder1470 = useBetterMediaQuery('(max-width: 1470px)')
  const isMobile = useBetterMediaQuery('(max-width: 500px)')
  const baseUrl = process.env.NEXT_PUBLIC_URL
  const vh = useVh()
  const [data, setData] = useState<WorkDetailData | null>(null)
  const [bannerLoaded, setBannerLoaded] = useState(false)
  const [detImgLoaded, setDetImgLoaded] = useState(false)

  const getData = async () => {
    try {
      const fetchedData: WorkDetailData = await getWorkDetailData(params.id)
      setData(fetchedData)
    } catch (error) {
      console.log('Error setting work data:', error)
    }
  }

  useEffect(() => {
    getData()
  }, [params.id])

  return (
    <>
      <TopBar $mobile={isMobile?.toString()} />
      <Container $mobile={isMobile?.toString()} $vh={vh}>
        <Banner>
          {data?.workbanner ? (
            <>
              <Image
                src={data?.workbanner}
                alt=''
                fill
                placeholder='blur'
                blurDataURL={data?.workbanner}
                onLoadingComplete={(e) => {
                  setBannerLoaded(true)
                }}
              />
              {bannerLoaded ? null : (
                <Skeleton width='100%' baseColor='#EAF1F3' height={isMobile ? '25vh' : '50vh'} />
              )}
            </>
          ) : (
            <Skeleton width='100%' baseColor='#EAF1F3' height={isMobile ? '25vh' : '50vh'} />
          )}
        </Banner>
        {!isUnder1000 ? (
          <>
            <Introduce>
              <Artist type='largeScreen' $mobile={isMobile?.toString()}>
                <IntroduceIndicator />
                <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                  {data?.artistName.map((artist, i) => {
                    return data.artistName.length === 2 && isUnder1470 ? (
                      <div key={artist}>
                        <ProfileImg
                          src={data?.artistImg[i]}
                          $mobile={isMobile?.toString()}
                          style={{ marginTop: '29px' }}
                        />
                        <div className='title'>{data?.artistName[i]}</div>
                        <div className='info' style={{ marginBottom: '8px' }}>
                          {data?.artistEmail[i]}
                        </div>
                        <div className='info'>{data?.artistInsta[i]}</div>
                      </div>
                    ) : (
                      <div className='wrapper' key={artist}>
                        <ProfileImg src={data?.artistImg[i]} $mobile={isMobile?.toString()} />
                        <div>
                          <div className='title'>{data?.artistName[i]}</div>
                          <div className='info' style={{ marginBottom: '8px' }}>
                            {data?.artistEmail[i]}
                          </div>
                          <div className='info'>{data?.artistInsta[i]}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Artist>
              <Describe type='largeScreen' $mobile={isMobile?.toString()}>
                <IntroduceIndicator />
                <div className='title'>{data?.workName}</div>
                <div className='info'>{data?.workDetail}</div>
              </Describe>
              <Object type='largeScreen'>
                <IntroduceIndicator />
                <img src={data?.workObj} />
              </Object>
            </Introduce>
          </>
        ) : (
          <div>
            <Describe type='smallScreen' $mobile={isMobile?.toString()}>
              <IntroduceIndicator />
              <div className='title'>{data?.workName}</div>
              <div className='info'>{data?.workDetail}</div>
            </Describe>
            <div style={{ display: 'flex' }}>
              <Artist type='smallScreen' $mobile={isMobile?.toString()}>
                <IntroduceIndicator />
                {data?.artistName.map((artist, i) => {
                  return (
                    <div className='wrapper' key={artist}>
                      <ProfileImg src={data.artistImg[i]} $mobile={isMobile?.toString()} />
                      <div style={{ wordBreak: 'break-all', wordWrap: 'break-word' }}>
                        <div className='title'>{data.artistName[i]}</div>
                        <div className='info' style={{ marginBottom: isMobile ? '6px' : '8px' }}>
                          {data.artistEmail[i]}
                        </div>
                        <div className='info'>{data.artistInsta[i]}</div>
                      </div>
                    </div>
                  )
                })}
              </Artist>
              <Object type='smallScreen'>
                <IntroduceIndicator />
                <img src={data?.workObj} />
              </Object>
            </div>
          </div>
        )}

        <Work>
          {params.id === '48' || params.id === '24'
            ? data?.workVid.map((vid, i) => {
                if (vid !== '')
                  return (
                    <div
                      style={{
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        overflow: 'hidden',
                      }}
                      key={vid}
                    >
                      <iframe
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none',
                        }}
                        width='100%'
                        height='720'
                        src={vid}
                      />
                    </div>
                  )
              })
            : null}
          {data?.workDetImgList ? (
            data?.workDetImgList.map((detImg, i) => {
              return (
                <React.Fragment key={detImg}>
                  {/* <Image
                    src={detImg}
                    fill
                    alt=''
                    onLoadingComplete={(e) => {
                      setDetImgLoaded(true)
                    }}
                    placeholder='blur'
                    blurDataURL={detImg}
                  /> */}
                  <img
                    src={detImg}
                    onLoad={() => {
                      setDetImgLoaded(true)
                    }}
                  />
                  {detImgLoaded ? null : (
                    <Skeleton
                      width='100%'
                      baseColor='#EAF1F3'
                      height={isMobile ? '25vh' : '50vh'}
                    />
                  )}
                </React.Fragment>
              )
            })
          ) : (
            <Skeleton width='100%' baseColor='#EAF1F3' height={isMobile ? '25vh' : '50vh'} />
          )}
          {params.id !== '48' && params.id !== '24'
            ? data?.workVid.map((vid, i) => {
                if (vid !== '')
                  return (
                    <div
                      style={{
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        overflow: 'hidden',
                      }}
                      key={vid}
                    >
                      <iframe
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none',
                        }}
                        width='100%'
                        height='720'
                        src={vid}
                      />
                    </div>
                  )
              })
            : null}
        </Work>
      </Container>
      <Footer />
    </>
  )
}

const TopBar = styled.div<{ $mobile?: string }>`
  height: ${(props) => (props.$mobile === 'true' ? '50px' : '56px')};
  width: 100vw;
  position: ${(props) => (props.$mobile === 'true' ? 'fixed' : '')};
  background: white;
  z-index: 997;
  border-bottom: 1px solid black;
  font-family: 'Pretendard';
`

const Container = styled.div<{ $mobile?: string; $vh: number }>`
  padding-left: ${(props) => (props.$mobile === 'true' ? '0px' : '201px')};
  // min-height: ${(props) => `${100 * props.$vh}px`};
  margin-top: ${(props) => (props.$mobile === 'true' ? '50px' : '0px')};
  background: white;
`
const Banner = styled.div`
  position: relative;
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    position: relative !important;
  }
`
const BannerImg = styled.img`
  width: 100%;
  display: block;
`
const Introduce = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
const IntroduceIndicator = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  width: 16px;
  height: 16px;
  background: black;
`

const Artist = styled.div<{ type: string; $mobile?: string }>`
  border: 1px solid black;
  min-height: 281px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Pretendard';
  // -webkit-box-decoration-break: clone;
  // box-decoration-break: clone;

  ${(props) =>
    props.$mobile === 'true'
      ? `
      padding: 0px 16px 24px 16px;
    .title {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .info {
      color: #3F3F3;
      font-size: 14px;
      font-weight: 500;
    }
    .wrapper{
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      width: 100%;
      box-sizing: border-box;
    }
  `
      : `
    padding: 0px 0px 29px 24px;
    .title {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .info {
      color: #3F3F3;
      font-size: 16px;
      font-weight: 500;
    }
    .wrapper{
      display: flex;
      flex-wrap: wrap;
      margin-right: 5px;
      margin-top: 29px;
    }
  `}

  ${(props) =>
    props.type === 'smallScreen' &&
    css`
      width: 50%;
    `}
  ${(props) =>
    props.type !== 'smallScreen' &&
    css`
      width: 32.5%;
    `}
`
const ProfileImg = styled.img<{ $mobile?: string }>`
  ${(props) =>
    props.$mobile === 'true'
      ? `
      width: 100%;
      height: auto;
      margin-bottom: 20px;
    `
      : `
  width: 168px;
  height: 168px;
  margin-right: 19px;
  margin-bottom: 20px;
  `}
`
const Describe = styled.div<{ type: string; $mobile?: string }>`
  border: 1px solid black;
  font-family: 'Pretendard';
  ${(props) =>
    props.type === 'smallScreen' &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.type !== 'smallScreen' &&
    css`
      width: 47.5%;
      min-height: 281px;
    `}

  position: relative;
  padding: 29px 34px 29px 28px;

  ${(props) =>
    props.$mobile === 'true'
      ? `
      padding: 20px 16px 24px 16px;
    .title {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 16px;
    }
    .info {
      color: #3F3F3;
      font-size: 14px;
      font-weight: 500;
      line-height: 150%;
    }
  `
      : `
    padding: 29px 34px 29px 28px;
    .title {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .info {
      color: #3F3F3;
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
    }
  `}
`
const Object = styled.div<{ type: string; $mobile?: string }>`
  border: 1px solid black;
  min-height: 281px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: auto;
    height: ${(props) => (props.$mobile === 'true' ? '150px' : '170px')};
  }

  ${(props) =>
    props.type === 'smallScreen' &&
    css`
      width: 50%;
    `}
  ${(props) =>
    props.type !== 'smallScreen' &&
    css`
      width: 20%;
    `}
`

const Work = styled.div`
  // & > img {
  //   width: 100%;
  //   display: block;
  // }
  position: relative;
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    position: relative !important;
  }
`

const Video = styled.div``
