'use client'

import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { IconSend } from '../../../public/svgs'
import GuestBookObject from './guestBookObject'
import { useInfiniteQuery } from 'react-query'

type GuestBookType = {
  name: string
  content: string
  date: string
}

const fetchGuestBooks = async (pageParam: number) => {
  // 페이지별 데이터를 가져오는 API 호출 또는 데이터를 가져오는 로직을 구현
  const response = await fetch(`/api/guestBooks?page=${pageParam}`)
  return response.json()
}

interface IApiError {
  message: string
}

const Guest = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [guestBooks, setGuestBooks] = useState<GuestBookType[]>([])
  const [loadMore, setLoadMore] = useState<boolean>(false)
  const { data, status, error, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery(
    ['getList'],
    ({ pageParam = 1 }) => getList({ pageParam }),
    {
      onSettled: (res) => {
        setLoadMore(true)
      },
      getNextPageParam: (lastPage) => {
        return lastPage.total > lastPage.page * lastPage.limit ? lastPage.page + 1 : false
      },
      onError: (err: IApiError) => err,
    },
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  const isScroll = () => {
    let padding = 100
    let scrollY = window.scrollY
    let screenHeight = window.innerHeight
    let bodyHeight = document.documentElement.offsetHeight
    let scrollEnd = scrollY + screenHeight
    let pos = scrollEnd + padding
    let isEnd = pos >= bodyHeight

    // 스크롤이 맨끝에 도달했고 추가 패치를 실행하지않았다면 패치 실행
    if (isEnd && !loadMore) {
      setLoadMore(true)
    }
  }

  // 스크롤 이벤트 발생
  useEffect(() => {
    window.addEventListener('scroll', isScroll)
    return () => window.removeEventListener('scroll', isScroll)
  }, [])

  // loadMore가 true로 변경될때 fetchNextPage 실행
  useEffect(() => {
    if (loadMore) {
      fetchNextPage()
    }
  }, [loadMore])

  const getList = async ({ pageParam = 1 }) => {
    const url = `https://dapi.kakao.com/v2/search/web?query=${'안녕'}&page=${pageParam}`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'cc9566c085f7b5f099c13dd3ac7a0071',
      },
    })
    return res.json()
  }

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
          {guestBooks.map((guestBook: GuestBookType, index: number) => (
            <GuestBookObject key={index} {...guestBook} />
          ))}
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
