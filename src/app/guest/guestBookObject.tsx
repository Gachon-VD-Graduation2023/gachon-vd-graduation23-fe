import { styled } from 'styled-components'

type GuestBookType = {
  guestName: string
  writeDetail: string
  createdAt: string
}
const GuestBookObject = (guestBook: GuestBookType) => {
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

export default GuestBookObject

const Container = styled.div`
  width: 390px;
  height: 317px;
  border: 1px solid;
`

const ReadSenderGuestBookContainer = styled.div`
  height: 32px;
  background-color: #fff;
  padding: 8px 12px;

  color: var(--, #000);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const ReadContentGuestBookContainer = styled.div`
  padding: 28px 48px 80px 48px;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > p {
    width: 294px;
    height: 177px;
    overflow-y: auto;

    white-space: pre-line;
    word-break: break-all;
    word-wrap: break-word;
  }
`

const UpdateDateGuestBookContainer = styled.div`
  margin-top: 22px;

  color: var(--, #212121);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`
