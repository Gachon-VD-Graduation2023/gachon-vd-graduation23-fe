'use client'
import React from 'react'
import styled from 'styled-components'
import { useBetterMediaQuery } from '@/utils/common.util'

export default function Footer() {
  const isMobile = useBetterMediaQuery('(max-width: 500px)')
  const baseUrl = process.env.NEXT_PUBLIC_URL
  return (
    <Container mobile={isMobile?.toString()}>
      <LogoImg src={baseUrl + '/images/title-logo.png'} />
      {!isMobile ? (
        <Credit>
          <div className='title'>2023 가천대학교 시각디자인과 졸업전시회</div>
          <div className='copyright'>{'<대박> Ⓒ 2023 Gachon VCD All rights reserved.'}</div>
        </Credit>
      ) : (
        <MobileCredit>
          {`2023 가천대학교 시각디자인과 졸업전시회 \n<대박> Ⓒ 2023 Gachon VCD All rights reserved.`}
        </MobileCredit>
      )}
    </Container>
  )
}

const Container = styled.div<{ mobile?: string }>`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  border-top: 1px solid black;
  width: 100%;
  height: ${(props) => (props.mobile === 'true' ? '76px;' : '101px')};
  padding-left: ${(props) => (props.mobile === 'true' ? '16px;' : '229px')};
  padding-right: ${(props) => (props.mobile === 'true' ? '16px;' : '40px')};

  font-family: 'Pretendard';
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

const MobileCredit = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  text-align: right;
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  color: #4d4d4d;
  white-space: pre-wrap;
`
