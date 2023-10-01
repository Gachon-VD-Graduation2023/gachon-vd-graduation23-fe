'use client'
import React from 'react'
import styled, { css } from 'styled-components'
import useBetterMediaQuery from '@/utils/common.util'
import Footer from '@/components/Footer'

export default function WorksDetail() {
  const isUnder1000 = useBetterMediaQuery('(max-width: 1000px)')
  const baseUrl = process.env.NEXT_PUBLIC_URL
  return (
    <>
      <Container>
        <Banner>
          <BannerImg src={baseUrl + '/images/works/works_detail/banner_sample.png'} />
        </Banner>
        {!isUnder1000 ? (
          <Introduce>
            <Artist type='largeScreen'>
              <IntroduceIndicator />
              <ProfileImg src={baseUrl + '/images/works/works_detail/profile_sample.png'} />
              <div>
                <div className='title'>이름</div>
                <div className='info' style={{ marginBottom: '8px' }}>
                  chain1999@naver.com
                </div>
                <div className='info'>@naver_insta</div>
              </div>
            </Artist>
            <Describe type='largeScreen'>
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
            <Describe type='smallScreen'>
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
              <Artist type='smallScreen'>
                <IntroduceIndicator />
                <ProfileImg src={baseUrl + '/images/works/works_detail/profile_sample.png'} />
                <div>
                  <div className='title'>이름</div>
                  <div className='info' style={{ marginBottom: '8px' }}>
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

const Container = styled.div`
  padding-left: 201px;
  min-height: 100vh;
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

const Artist = styled.div<{ type: string }>`
  border: 1px solid black;
  min-height: 281px;
  position: relative;
  padding: 29px 0px 29px 24px;
  display: flex;
  flex-wrap: wrap;

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
const ProfileImg = styled.img`
  width: 168px;
  height: 168px;
  margin-right: 19px;
  margin-bottom: 20px;
`
const Describe = styled.div<{ type: string }>`
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
    `}

  min-height: 281px;
  position: relative;
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
`
const Object = styled.div<{ type: string }>`
  border: 1px solid black;
  min-height: 281px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: auto;
    height: 200px;
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
