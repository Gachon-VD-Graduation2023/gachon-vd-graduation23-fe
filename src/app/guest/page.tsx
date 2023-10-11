'use client'

import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { IconSend, MobileIconSend } from '../../../public/svgs'
import GuestBookObject from './guestBookObject'
import { useInfiniteQuery } from 'react-query'
import useBetterMediaQuery from '@/utils/common.util'
import MobileGuestBookObject from './mobileGuestBookObject'

type GuestBookType = {
  guestName: string
  writeDetail: string
  createdAt: any
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
  const isUnder1000 = useBetterMediaQuery('(max-width: 480px)')
  const [name, setName] = useState<string>('')
  const [content, setContent] = useState<string>('')
  // const [loadMore, setLoadMore] = useState<boolean>(false)
  // const { data, status, error, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery(
  //   ['getList'],
  //   ({ pageParam = 1 }) => getList({ pageParam }),
  //   {
  //     onSettled: (res) => {
  //       setLoadMore(true)
  //     },
  //     getNextPageParam: (lastPage) => {
  //       return lastPage.total > lastPage.page * lastPage.limit ? lastPage.page + 1 : false
  //     },
  //     onError: (err: IApiError) => err,
  //   },
  // )

  useEffect(() => {
    setMounted(true)

    // REST API를 사용하여 데이터 가져오기
    fetch('https://gcvd-2023-graduation-default-rtdb.firebaseio.com/guestBooks.json')
      .then((response) => response.json())
      .then((data) => {
        const formattedData = Object.values(data).map((item: any) => ({
          guestName: item.guestName,
          writeDetail: item.writeDetail,
          createdAt: item.createdAt,
        }))
        setGuestBooks(formattedData)
      })
  }, [])

  const postMessage = (guestName: string, writeDetail: string) => {
    // REST API를 사용하여 데이터 가져오기
    fetch('https://gcvd-2023-graduation-default-rtdb.firebaseio.com/guestBooks.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        guestName: name,
        writeDetail: content,
        createdAt: new Date(),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // 데이터가 성공적으로 전송된 후, guestBooks 배열에 게시글 추가
        setGuestBooks((prevGuestBooks) => [
          ...prevGuestBooks,
          {
            guestName,
            writeDetail,
            createdAt: new Date().toString(),
          },
        ])
        setContent('')
        setName('')
      })
  }

  // const isScroll = () => {
  //   let padding = 100
  //   let scrollY = window.scrollY
  //   let screenHeight = window.innerHeight
  //   let bodyHeight = document.documentElement.offsetHeight
  //   let scrollEnd = scrollY + screenHeight
  //   let pos = scrollEnd + padding
  //   let isEnd = pos >= bodyHeight

  //   // 스크롤이 맨끝에 도달했고 추가 패치를 실행하지않았다면 패치 실행
  //   if (isEnd && !loadMore) {
  //     setLoadMore(true)
  //   }
  // }

  // 스크롤 이벤트 발생
  // useEffect(() => {
  //   window.addEventListener('scroll', isScroll)
  //   return () => window.removeEventListener('scroll', isScroll)
  // }, [])

  // loadMore가 true로 변경될때 fetchNextPage 실행
  // useEffect(() => {
  //   if (loadMore) {
  //     fetchNextPage()
  //   }
  // }, [loadMore])

  return (
    mounted &&
    (isUnder1000 ? (
      <MobileContainer>
        <MobileReadGuestBooksContainer>
          {guestBooks.map((guestBook: GuestBookType, index: number) => (
            <MobileGuestBookObject key={index} {...guestBook} />
          ))}
        </MobileReadGuestBooksContainer>
        <MobileCreateGuestBookContainer>
          <MobileCreateSenderContainer>
            <p>From: </p>
            <MobileCreateSenderInputContainer
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </MobileCreateSenderContainer>
          <MobileCreateContentContainer>
            <MobileCreateInputContainer
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            <MobileIconSend
              width={44}
              height={44}
              style={{ cursor: 'pointer' }}
              onClick={() => postMessage(name, content)}
            />
          </MobileCreateContentContainer>
        </MobileCreateGuestBookContainer>
      </MobileContainer>
    ) : (
      <Container>
        <CreateGuestBookContainer>
          <CreateSenderContainer>
            <p>From: </p>
            <CreateSenderInputContainer onChange={(e) => setName(e.target.value)} value={name} />
          </CreateSenderContainer>
          <CreateContentContainer>
            <CreateInputContainer onChange={(e) => setContent(e.target.value)} value={content} />
            <IconSend
              width={44}
              height={33}
              style={{ cursor: 'pointer' }}
              onClick={() => postMessage(name, content)}
            />
          </CreateContentContainer>
        </CreateGuestBookContainer>
        <ReadGuestBooksContainer>
          {guestBooks.map((guestBook: GuestBookType, index: number) => (
            <GuestBookObject key={index} {...guestBook} />
          ))}
        </ReadGuestBooksContainer>
      </Container>
    ))
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

/////////////////////

const MobileContainer = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100vh;
  background: linear-gradient(180deg, #18b6ec 0%, #d0f0fb 41.98%, #fff 100%);
  padding-top: 56px;

  position: relative;
`

const MobileReadGuestBooksContainer = styled.div`
  padding: 16px;
  width: 100%;
  overflow-y: auto; // 세로 방향으로 스크롤이 가능하게 합니다.
  height: calc(100vh - 56px - 130px);

  max-width: 480px;

  display: flex;
  flex-direction: column;
  gap: 7px;
`

const MobileCreateGuestBookContainer = styled.div`
  position: flx;
  bottom: 0;

  width: 100vw;

  background: #f4f9fb;

  color: var(--, #000);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const MobileCreateSenderContainer = styled.div`
  width: 100vw;
  height: 51px;
  padding: 16px 0px 16px 16px;

  border-top: 1px solid;
  border-bottom: 1px solid;

  display: flex;
  gap: 5px;
`

const MobileCreateSenderInputContainer = styled.input`
  width: 100vw;
  height: 20px;

  padding: 0;
  margin: 0;

  background: #f4f9fb;
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

const MobileCreateContentContainer = styled.div`
  width: 100vw;
  padding: 8px 13px 27px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

const MobileCreateInputContainer = styled.textarea`
  flex-grow: 1;
  height: 44px;
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
  background: #f4f9fb;

  resize: none;
`
