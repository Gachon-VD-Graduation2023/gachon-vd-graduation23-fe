'use client'
import React from 'react'
import styled from 'styled-components'

interface PropsData {
  idx: number
}

function SplashThumbnail(props: PropsData) {
  const { idx } = props
  const baseUrl = process.env.NEXT_PUBLIC_URL

  return (
    <Container>
      {((idx + 1) / 7) % 3 === 0 ? (
        <BlueSplash src={baseUrl + '/images/works/splash_blue.png'} />
      ) : ((idx + 1) / 7) % 2 === 0 ? (
        <GreenSplash src={baseUrl + '/images/works/splash_green.png'} />
      ) : (
        <WhiteSplash src={baseUrl + '/images/works/splash_white.png'} />
      )}
    </Container>
  )
}

export default SplashThumbnail
const Container = styled.div`
  width: 288px;
  height: 357px;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(24px);
  box-shadow: 0px 0px 1px 0.5px black;
  display: flex;
  justify-content: center;
  align-items: center;
`
const WhiteSplash = styled.img`
  width: 217px;
  height: 231px;
`
const GreenSplash = styled.img`
  width: 234px;
  height: 249px;
`
const BlueSplash = styled.img`
  width: 308.75px;
  height: 319px;
`
