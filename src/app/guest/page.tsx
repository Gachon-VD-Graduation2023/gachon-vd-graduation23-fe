'use client'

import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { IconSend } from '../../../public/svgs'
import GuestBookObject from './guestBookObject'

type GuestBookType = {
  name: string
  content: string
  date: string
}

const Guest = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [guestBooks, setGuestBooks] = useState<GuestBookType[]>([
    {
      name: '황남주',
      content: '그동안 반가웠습니다',
      date: '2023.04.20\n15:12PM',
    },
    {
      name: '황남주',
      content: '그동안 반가웠습니다',
      date: '2023.04.20\n15:12PM',
    },
    {
      name: '황남주',
      content: '그동안 반가웠습니다',
      date: '2023.04.20\n15:12PM',
    },
  ])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <Container>
        <CreateGuestBookContainer>
          <CreateSenderContainer>
            <p>From: </p>
            <CreateSenderInputContainer />
          </CreateSenderContainer>
          <CreateContentContainer>
            <CreateInputContainer />
            <IconSend width={44} height={33} style={{ cursor: 'pointer' }} />
          </CreateContentContainer>
        </CreateGuestBookContainer>
        <ReadGuestBooksContainer>
          <GuestBookObject />
          <GuestBookObject />
          <GuestBookObject />
          <GuestBookObject />
          <GuestBookObject />
          <GuestBookObject />
        </ReadGuestBooksContainer>
      </Container>
    )
  )
}

export default Guest

const Container = styled.div`
  width: calc(100vw - 201px);
  height: 3675px;
  background: linear-gradient(180deg, #1bb7ed 0%, #fff 100%);
  margin-left: 201px;
  overflow: hidden;
`

const CreateGuestBookContainer = styled.div`
  width: calc(100vw - 201px);

  background: #f3f3f3;

  color: var(--, #000);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const CreateSenderContainer = styled.div`
  width: calc(100vw - 201px);
  height: 52px;
  padding: 16px 34px 17px 34px;

  border-bottom: 2px solid;

  display: flex;
  gap: 5px;
`

const CreateSenderInputContainer = styled.input`
  width: calc(100vw - 201px);
  height: 20px;

  padding: 0;
  margin: 0;

  background: #f3f3f3;
  border: none;
  &:focus {
    outline: none;
  }

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const CreateContentContainer = styled.div`
  width: calc(100vw - 201px);
  padding: 25px 57px 34px 34px;

  border-bottom: 1px solid;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

const CreateInputContainer = styled.textarea`
  flex-grow: 1;
  height: 60px;
  padding: 0;
  margin: 0;

  border: 1px solid;
  border: none;
  &:focus {
    outline: none;
  }

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #f3f3f3;

  resize: none;
`

const ReadGuestBooksContainer = styled.div`
  padding: 16px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
`
