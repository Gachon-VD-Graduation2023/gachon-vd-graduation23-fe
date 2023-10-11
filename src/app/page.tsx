'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { IconNext, IconVercel } from '../../public/svgs'
import MenuBar from '@/components/MenuBar'
import { styled } from 'styled-components'
import useBetterMediaQuery from '@/utils/common.util'
import { useState, useEffect } from 'react'

export default function Home() {
  const isMobile = useBetterMediaQuery('(max-width: 500px)')
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted && isMobile ? (
    <Wrapper>
      <IntroVideo>
        <Video muted autoPlay loop>
          <source
            src={process.env.NEXT_PUBLIC_URL + '/videos/video-home-mobile.mp4'}
            type='video/mp4'
          />
        </Video>
      </IntroVideo>
    </Wrapper>
  ) : (
    <Wrapper>
      <IntroVideo>
        <Video muted autoPlay loop>
          <source
            src={process.env.NEXT_PUBLIC_URL + '/videos/video-home-web.mp4'}
            type='video/mp4'
          />
        </Video>
      </IntroVideo>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

const IntroVideo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
