'use client'
import React from 'react'
import styled from 'styled-components'

type DataInfo = {
  img: string
  title: string
  artist: string
}

interface PropsData {
  data: DataInfo
}

function WorkThumbnail(props: PropsData) {
  const { img, title, artist } = props.data

  return (
    <Container>
      <ThumbnailImage>
        <img src='http://www.goldinglass.com/images/Projects/288x288-Matrimandir.jpg' />
      </ThumbnailImage>
      <InfoContainer>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </InfoContainer>
    </Container>
  )
}

export default WorkThumbnail
const Container = styled.div`
  width: 288px;
  height: 357px;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(24px);
  box-shadow: 0px 0px 1px 0.5px black;
`
const ThumbnailImage = styled.div`
  width: 288px;
  height: 288px;
`
const InfoContainer = styled.div`
  height: 69px;
  padding: 16px;
  margin-top: 0px;
`
const Title = styled.div`
  color: #141414;
  font-size: 16px;
  font-weight: 700;
`
const Artist = styled.div`
  color: #6a6a6a;
  text-align: right;
  font-size: 14px;
  font-weight: 700;
`
