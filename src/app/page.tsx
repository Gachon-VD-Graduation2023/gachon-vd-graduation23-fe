'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { IconNext, IconVercel } from '../../public/svgs'
import MenuBar from '@/components/MenuBar'
import { styled } from 'styled-components'
import { useBetterMediaQuery, useVh } from '@/utils/common.util'
import { useState, useEffect } from 'react'

export default function Home() {
  const isMobile = useBetterMediaQuery('(max-width: 500px)')
  const [mounted, setMounted] = useState<boolean>(false)
  const vh = useVh()

  useEffect(() => {
    setMounted(true)

    // // window resize 이벤트 리스너 추가
    // const handleResize = () => {
    //   setMounted(false)
    //   setTimeout(() => setMounted(true), 0)
    // }

    // window.addEventListener('resize', handleResize)

    // // cleanup 함수에서 이벤트 리스너 제거
    // return () => window.removeEventListener('resize', handleResize)
  }, [isMobile]) // isMobile 값이 변경될 때 마다 실행

  return (
    mounted && (
      <Wrapper $vh={vh}>
        {isMobile ? (
          <TitleLogo src={process.env.NEXT_PUBLIC_URL + '/images/title-logo.png'} />
        ) : null}
        <IntroVideo>
          <Video
            src={
              isMobile
                ? process.env.NEXT_PUBLIC_URL + '/videos/video-home-mobile.mp4'
                : process.env.NEXT_PUBLIC_URL + '/videos/video-home-web.mp4'
            }
            muted
            autoPlay
            playsInline
          >
            <source
              src={
                isMobile
                  ? process.env.NEXT_PUBLIC_URL + '/videos/video-home-mobile.mp4'
                  : process.env.NEXT_PUBLIC_URL + '/videos/video-home-web.mp4'
              }
              type='video/mp4'
            />
          </Video>
          {/* <Video muted autoPlay loop playsinLine>
            <source
              src={isMobile ? '/videos/video-home-mobile.mp4' : '/videos/video-home-web.mp4'}
              type='video/mp4'
            />
          </Video> */}
        </IntroVideo>
      </Wrapper>
    )
  )
}

const TitleLogo = styled.img`
  width: 57px;
  height: auto;
  position: absolute;
  top: 20px;
  right: 20px;
  display: block;
  z-index: 900;
`

const Wrapper = styled.div<{ $vh: number }>`
  width: 100%;
  height: ${(props) => `${100 * props.$vh}px`};
  overflow: hidden;
  position: relative;
  touch-action: none;
`

const IntroVideo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
