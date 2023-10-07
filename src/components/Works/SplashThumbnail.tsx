'use client'
import React from 'react'
import styled from 'styled-components'
import { useBetterMediaQuery } from '@/utils/common.util'

interface PropsData {
  idx: number
}

function SplashThumbnail(props: PropsData) {
  const { idx } = props
  const baseUrl = process.env.NEXT_PUBLIC_URL
  const isMobile = useBetterMediaQuery('(max-width: 500px)')

  return (
    <>
      {!isMobile ? (
        <Container mobile='false'>
          {((idx + 1) / 7) % 3 === 0 ? (
            <BlueSplash src={baseUrl + '/images/works/splash_blue.png'} mobile='false' />
          ) : ((idx + 1) / 7) % 2 === 0 ? (
            <GreenSplash src={baseUrl + '/images/works/splash_green.png'} mobile='false' />
          ) : (
            <WhiteSplash src={baseUrl + '/images/works/splash_white.png'} mobile='false' />
          )}
        </Container>
      ) : (
        <Container mobile='true'>
          {((idx + 1) / 5) % 3 === 0 ? (
            <BlueSplash src={baseUrl + '/images/works/splash_blue.png'} mobile='true' />
          ) : ((idx + 1) / 5) % 2 === 0 ? (
            <GreenSplash src={baseUrl + '/images/works/splash_green.png'} mobile='true' />
          ) : (
            <WhiteSplash src={baseUrl + '/images/works/splash_white.png'} mobile='true' />
          )}
        </Container>
      )}
    </>
  )
}

export default SplashThumbnail
const Container = styled.div<{ mobile: string }>`
  width: ${(props) => (props.mobile === 'true' ? '167px' : '288px')};
  height: ${(props) => (props.mobile === 'true' ? '235px' : '357px')};
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(24px);
  box-shadow: 0px 0px 1px 0.5px black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const WhiteSplash = styled.img<{ mobile: string }>`
  width: ${(props) => (props.mobile === 'true' ? '126px' : '217px')};
  height: auto;
`
const GreenSplash = styled.img<{ mobile: string }>`
  width: ${(props) => (props.mobile === 'true' ? '135px' : '234px')};
  height: auto;
`
const BlueSplash = styled.img<{ mobile: string }>`
  width: ${(props) => (props.mobile === 'true' ? '179px' : '308.75px')};
  height: auto;
`
