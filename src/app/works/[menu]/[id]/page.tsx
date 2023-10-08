'use client'
import React from 'react'
import styled, { css } from 'styled-components'
import Footer from '@/components/Footer'
import { useBetterMediaQuery, useVh } from '@/utils/common.util'

export default function WorksDetail() {
  const isUnder1000 = useBetterMediaQuery('(max-width: 1000px)')
  const isMobile = useBetterMediaQuery('(max-width: 500px)')
  const baseUrl = process.env.NEXT_PUBLIC_URL
  const vh = useVh()
  return (
    <>
      <Container mobile={isMobile?.toString()} vh={vh}>
        <Banner>
          <BannerImg src={baseUrl + '/images/works/works_detail/banner_sample.png'} />
        </Banner>
        {!isUnder1000 ? (
          <Introduce>
            <Artist type='largeScreen' mobile={isMobile?.toString()}>
              <IntroduceIndicator />
              <ProfileImg
                src={baseUrl + '/images/works/works_detail/profile_sample.png'}
                mobile={isMobile?.toString()}
              />
              <div>
                <div className='title'>이름</div>
                <div className='info' style={{ marginBottom: '8px' }}>
                  chain1999@naver.com
                </div>
                <div className='info'>@naver_insta</div>
              </div>
            </Artist>
            <Describe type='largeScreen' mobile={isMobile?.toString()}>
              <IntroduceIndicator />
              <div className='title'>제목</div>
              <div className='info'>
                설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게
                적어봅시다. 설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게 적어봅시다.
                설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게
                적어봅시다. 설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게 적어봅시다.
                설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게
                적어봅시다.
              </div>
            </Describe>
            <Object type='largeScreen'>
              <IntroduceIndicator />
              <img src={baseUrl + '/images/works/works_detail/object_sample.png'} />
            </Object>
          </Introduce>
        ) : (
          <div>
            <Describe type='smallScreen' mobile={isMobile?.toString()}>
              <IntroduceIndicator />
              <div className='title'>제목</div>
              <div className='info'>
                설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게
                적어봅시다. 설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게 적어봅시다.
                설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게
                적어봅시다. 설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게 적어봅시다.
                설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게 적어봅시다. 설명을 길게
                적어봅시다.
              </div>
            </Describe>
            <div style={{ display: 'flex' }}>
              <Artist type='smallScreen' mobile={isMobile?.toString()}>
                <IntroduceIndicator />
                <ProfileImg
                  src={baseUrl + '/images/works/works_detail/profile_sample.png'}
                  mobile={isMobile?.toString()}
                />
                <div>
                  <div className='title'>이름</div>
                  <div className='info' style={{ marginBottom: isMobile ? '6px' : '8px' }}>
                    chain1999@naver.com
                  </div>
                  <div className='info'>@naver_insta</div>
                </div>
              </Artist>
              <Object type='smallScreen'>
                <IntroduceIndicator />
                <img src={baseUrl + '/images/works/works_detail/object_sample.png'} />
              </Object>
            </div>
          </div>
        )}

        <div>{/* 상세페이지 이미지 영역 */}</div>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div<{ mobile?: string; vh: number }>`
  padding-left: ${(props) => (props.mobile === 'true' ? '0px' : '201px')};
  // min-height: ${(props) => `${100 * props.vh}px`};
  background: white;
`
const Banner = styled.div`
  padding-top: 56px;
`
const BannerImg = styled.img`
  width: 100%;
  display: block;
  border-top: 1px solid black;
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

const Artist = styled.div<{ type: string; mobile?: string }>`
  border: 1px solid black;
  min-height: 281px;
  position: relative;
  // padding: 29px 0px 29px 24px;
  padding: ${(props) => (props.mobile === 'true' ? '20px 16px 20px 16px;' : '29px 0px 29px 24px')};
  display: flex;
  flex-wrap: wrap;

  ${(props) =>
    props.mobile === 'true'
      ? `
      padding: 20px 16px 24px 16px;
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
  `
      : `
    padding: 29px 0px 29px 24px;
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
const ProfileImg = styled.img<{ mobile?: string }>`
  ${(props) =>
    props.mobile === 'true'
      ? `
      width: 100%;
      height: auto;
      margin-right: 19px;
      margin-bottom: 20px;
    `
      : `
  width: 168px;
  height: 168px;
  margin-right: 19px;
  margin-bottom: 20px;
  `}
`
const Describe = styled.div<{ type: string; mobile?: string }>`
  border: 1px solid black;
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
    props.mobile === 'true'
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
const Object = styled.div<{ type: string; mobile?: string }>`
  border: 1px solid black;
  min-height: 281px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: auto;
    height: ${(props) => (props.mobile === 'true' ? '150px' : '170px')};
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
