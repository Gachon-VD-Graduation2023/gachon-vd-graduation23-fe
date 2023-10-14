'use client'

import { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { IconSend, MobileIconSend } from '../../../public/svgs'
import GuestBookObject from './guestBookObject'
import { useInfiniteQuery } from 'react-query'
import { useBetterMediaQuery } from '@/utils/common.util'
import MobileGuestBookObject from './mobileGuestBookObject'
import { useRouter } from 'next/navigation'

type GuestBookType = {
  guestName: string
  writeDetail: string
  createdAt: any
}

const PAGE_SIZE = 6 // 한 페이지에 표시할 아이템 수
const PC_PAGE_SIZE = 9

const Guest = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [guestBooks, setGuestBooks] = useState<GuestBookType[]>([])
  const isUnder1000 = useBetterMediaQuery('(max-width: 500px)')
  const [name, setName] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    setMounted(true)

    // REST API를 사용하여 데이터 가져오기
    fetch(`${process.env.NEXT_DATABASE_URL}/guestBooks.json`)
      .then((response) => response.json())
      .then((data) => {
        const sortedData = Object.values(data).sort(
          (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ) // <-- 데이터를 역순으로 정렬
        const formattedData = sortedData.map((item: any) => ({
          guestName: item.guestName,
          writeDetail: item.writeDetail,
          createdAt: item.createdAt,
        }))
        setGuestBooks(formattedData)
      })
  }, [])

  const fetchGuestBooks = async ({ pageParam = 0 }) => {
    const response = await fetch(`${process.env.NEXT_DATABASE_URL}/guestBooks.json`)
    if (!response.ok) throw new Error('Network response was not ok')
    const data = await response.json()
    const values = Object.values(data).sort(
      (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    ) // <-- 데이터를 역순으로 정렬
    // 전체 데이터 중에서 현재 페이지의 부분집합만 반환합니다.
    const pageSize = isUnder1000 ? PAGE_SIZE : PC_PAGE_SIZE
    return values.slice(pageParam * pageSize, (pageParam + 1) * pageSize)
  }

  const postMessage = (guestName: string, writeDetail: string) => {
    // REST API를 사용하여 데이터 가져오기
    if (!guestName) {
      alert('보내는 사람을 적어주세요!')
      return
    }

    if (!writeDetail) {
      alert('내용을 적어주세요!')
      return
    }
    fetch(`${process.env.NEXT_DATABASE_URL}/guestBooks.json`, {
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
        alert('방명록을 적었습니다! 감사합니다^0^')

        setContent('')
        setName('')
      })
      .then(() => {
        if (typeof window !== 'undefined') {
          window.location.reload()
        }
      })
  }

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery(
    'guestBooks',
    fetchGuestBooks,
    {
      getNextPageParam: (lastPage, pages) => pages.length,
      retry: false,
    },
  )

  // Scroll ref
  const bottomBoundaryRef = useRef(null)

  useEffect(() => {
    if (isFetchingNextPage || !data) return
    let observer: IntersectionObserver
    if (bottomBoundaryRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries[0].isIntersecting && fetchNextPage()
        },
        { threshold: 1 },
      )
      observer.observe(bottomBoundaryRef.current)
    }

    return () => observer && observer.disconnect()
  }, [bottomBoundaryRef.current, fetchNextPage, isFetchingNextPage, data])

  return (
    mounted &&
    (isUnder1000 ? (
      <MobileContainer>
        <MobileReadGuestBooksContainer>
          {data?.pages
            .flat()
            .map((guestBook: any, index: number) => (
              <MobileGuestBookObject key={index} {...guestBook} />
            ))}
          {/* Scroll ref */}
          <div id='page-bottom-boundary' ref={bottomBoundaryRef}></div>
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
              placeholder='방명록은 한 번 작성하면 지울 수 없어요!'
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
            <CreateInputContainer
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder='방명록은 한 번 작성하면 지울 수 없어요!'
            />
            <IconSend
              width={44}
              height={33}
              style={{ cursor: 'pointer' }}
              onClick={() => postMessage(name, content)}
            />
          </CreateContentContainer>
        </CreateGuestBookContainer>
        <ReadGuestBooksContainer>
          {data?.pages
            .flat()
            .map((guestBook: any, index: number) => <GuestBookObject key={index} {...guestBook} />)}
          {/* Scroll ref */}
          {!isFetchingNextPage && hasNextPage && (
            <div id='page-bottom-boundary' ref={bottomBoundaryRef}></div>
          )}
        </ReadGuestBooksContainer>
      </Container>
    ))
  )
}

export default Guest

const Container = styled.div`
  width: calc(100vw - 201px);
  height: 100vh;
  background: linear-gradient(180deg, #1bb7ed 0%, #fff 100%);
  margin-left: 201px;
  overflow-y: auto;
  overflow-x: hidden;
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
  max-width: 500px;
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

  max-width: 500px;

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
