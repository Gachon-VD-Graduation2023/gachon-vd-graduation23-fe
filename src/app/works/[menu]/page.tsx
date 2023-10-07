'use client'
import React from 'react'
import WorkThumbnail from '@/components/Works/WorkThumbnail'
import SplashThumbnail from '@/components/Works/SplashThumbnail'
import styled from 'styled-components'
import Footer from '@/components/Footer'

export default function Works() {
  const data = [
    { img: '', title: '작품1', artist: '작가1' },
    { img: '', title: '작품2', artist: '작가2' },
    { img: '', title: '작품3', artist: '작가3' },
    { img: '', title: '작품4', artist: '작가4' },
    { img: '', title: '작품5', artist: '작가5' },
    { img: '', title: '작품6', artist: '작가6' },
    { img: '', title: '작품7', artist: '작가7' },
    { img: '', title: '작품8', artist: '작가8' },
    { img: '', title: '작품9', artist: '작가9' },
    { img: '', title: '작품10', artist: '작가10' },
    { img: '', title: '작품11', artist: '작가11' },
    { img: '', title: '작품12', artist: '작가12' },
    { img: '', title: '작품13', artist: '작가13' },
    { img: '', title: '작품14', artist: '작가14' },
    { img: '', title: '작품15', artist: '작가15' },
    { img: '', title: '작품16', artist: '작가16' },
    { img: '', title: '작품17', artist: '작가17' },
    { img: '', title: '작품18', artist: '작가18' },
    { img: '', title: '작품19', artist: '작가19' },
    { img: '', title: '작품20', artist: '작가20' },
    { img: '', title: '작품20', artist: '작가21' },
    { img: '', title: '작품20', artist: '작가22' },
  ]
  return (
    <>
      <Root>
        <Container>
          <Contents>
            {data.map((data, i) =>
              i !== 0 && (i + 1) % 7 === 0 ? (
                <SplashThumbnail idx={i} />
              ) : (
                <WorkThumbnail data={data} key={i} />
              ),
            )}
          </Contents>
        </Container>
      </Root>
      <Footer />
    </>
  )
}
const Root = styled.div`
  background-color: white;
  min-height: 100vh;
  background-image: url(https://i.imgur.com/yCV1WP3.jpg);
  background-size: cover;
`
const Container = styled.div`
  padding: 62px 0px 62px 201px;
  min-height: 100vh;
`
const Contents = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(289px, max-content));
  justify-content: center;
  grid-row-gap: 10px;
`
