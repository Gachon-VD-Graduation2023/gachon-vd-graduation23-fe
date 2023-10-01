'use client'
import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  const baseUrl = process.env.NEXT_PUBLIC_URL
  return (
    <Container>
      <LogoImg src={baseUrl + '/images/title-logo.png'} />
      <Credit>
        <div className='title'>2023 가천대학교 시각디자인과 졸업전시회</div>
        <div className='copyright'>{'<대박> Ⓒ 2023 Gachon VCD All rights reserved.'}</div>
      </Credit>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid black;
  width: 100%;
  height: 101px;
  padding-left: 229px;
  padding-right: 40px;
`
const LogoImg = styled.img`
  display: block;
  width: 20px;
  height: auto;
`

const Credit = styled.div`
  text-align: right;

  .title {
    color: #232323;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .copyright {
    color: #4d4d4d;
    font-size: 12px;
    font-weight: 700;
  }
`
