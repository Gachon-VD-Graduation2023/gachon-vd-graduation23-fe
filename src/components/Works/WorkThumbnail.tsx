'use client'
import React from 'react'
import styled from 'styled-components'
import { useBetterMediaQuery } from '@/utils/common.util'
import { WorkListData } from '@/types/works.type'
import { useRouter } from 'next/navigation'

interface PropsData {
  data: WorkListData
  menu: string
}

export default function WorkThumbnail(props: PropsData) {
  const { artistName, workId, workName, workThumb } = props.data
  const isMobile = useBetterMediaQuery('(max-width: 500px)')
  const router = useRouter()

  return (
    <div
      onClick={() => {
        router.push(`/works/${props.menu}/${workId}`)
      }}
    >
      {!isMobile ? (
        <Container>
          <ThumbnailImage mobile='false'>
            <img src={workThumb} />
          </ThumbnailImage>
          <InfoContainer mobile='false'>
            <Title mobile='false'>{workName}</Title>
            <Artist mobile='false'>{artistName.join(' ')}</Artist>
          </InfoContainer>
        </Container>
      ) : (
        <MobileContainer>
          <ThumbnailImage mobile='true'>
            <img src={workThumb} />
          </ThumbnailImage>
          <InfoContainer mobile='true'>
            <Title mobile='true'>{workName}</Title>
            <Artist mobile='true'>{artistName.join(' ')}</Artist>
          </InfoContainer>
        </MobileContainer>
      )}
    </div>
  )
}

const Container = styled.div`
  position: relative;
  width: 288px;
  height: 357px;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(24px);
  box-shadow: 0px 0px 1px 0.5px black;
  cursor: pointer;
`
const MobileContainer = styled.div`
  position: relative;
  width: 167px;
  height: 235px;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(24px);
  box-shadow: 0px 0px 1px 0.5px black;
  cursor: pointer;
`

const ThumbnailImage = styled.div<{ mobile: string }>`
  width: ${(props) => (props.mobile === 'true' ? '167px' : '288px')};
  height: ${(props) => (props.mobile === 'true' ? '167px' : '288px')};

  img {
    width: 100%;
    height: 100%;
  }
`
const InfoContainer = styled.div<{ mobile: string }>`
  height: 69px;
  padding: ${(props) => (props.mobile === 'true' ? '12px' : '16px')};
  margin-top: 0px;
`
const Title = styled.div<{ mobile: string }>`
  position: absolute;
  color: #141414;
  font-size: ${(props) => (props.mobile === 'true' ? '14px' : '16px')};
  font-weight: 700;
`
const Artist = styled.div<{ mobile: string }>`
  position: absolute;
  right: ${(props) => (props.mobile === 'true' ? '12px' : '16px')};
  bottom: ${(props) => (props.mobile === 'true' ? '12px' : '16px')};
  color: #6a6a6a;
  text-align: right;
  font-size: ${(props) => (props.mobile === 'true' ? '14px' : '16px')};
  font-weight: 700;
`
