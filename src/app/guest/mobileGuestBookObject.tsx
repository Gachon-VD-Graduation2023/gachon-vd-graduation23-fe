import { styled } from 'styled-components'

type GuestBookType = {
  guestName: string
  writeDetail: string
  createdAt: string
}
const MobileGuestBookObject = (guestBook: GuestBookType) => {
  const { guestName, writeDetail, createdAt } = guestBook
  // Date 객체를 생성합니다.
  const dateObj = new Date(createdAt)

  // 연, 월, 일을 가져옵니다.
  const year = dateObj.getUTCFullYear() // 연도
  const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0') // 월 (월은 0부터 시작하므로 1을 더해줍니다)
  const day = dateObj.getUTCDate().toString().padStart(2, '0') // 일

  // 시, 분, 초를 가져옵니다.
  let hours = dateObj.getUTCHours() + 9 // 시간
  const minutes = dateObj.getUTCMinutes().toString().padStart(2, '0')
  const seconds = dateObj.getUTCSeconds() // 초

  // AM/PM 값을 결정합니다.
  let periodOfDay
  if (hours < 12) {
    periodOfDay = 'AM'
  } else {
    periodOfDay = 'PM'
  }

  // 시간을 12시간 형식으로 변환합니다.
  hours %= 12
  if (hours === 0) {
    hours = 12
  }

  return (
    <Container>
      <ReadSenderGuestBookContainer>
        <p>from. {guestName}</p>
      </ReadSenderGuestBookContainer>
      <ReadContentGuestBookContainer>
        <p>{writeDetail}</p>
        <UpdateDateGuestBookContainer>
          <p>{year + '. ' + month + '. ' + day + '.'}</p>
          <p>{hours.toString().padStart(2, '0') + ':' + minutes + periodOfDay}</p>
        </UpdateDateGuestBookContainer>
      </ReadContentGuestBookContainer>
    </Container>
  )
}

export default MobileGuestBookObject

const Container = styled.div`
  width: 100%;
  max-width: 480px; // 원하는 최대 폭을 설정합니다.
  height: auto;
  border: 1px solid;
`

const ReadSenderGuestBookContainer = styled.div`
  height: 32px;
  background-color: #fff;
  padding: 8px 0 8px 12px;
  border-bottom: 1px solid;

  color: var(--, #000);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const ReadContentGuestBookContainer = styled.div`
  padding: 20px;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > p {
    width: 100%;
    height: auto; // 내용에 따라 높이가 유동적으로 변하게 합니다.

    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
  }
`

const UpdateDateGuestBookContainer = styled.div`
  margin-top: 20px;

  color: var(--, #212121);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`
