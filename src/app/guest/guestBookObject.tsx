import { styled } from 'styled-components'

type GuestBookType = {
  guestName: string
  writeDetail: string
  createdAt: string
}
const GuestBookObject = (guestBook: GuestBookType) => {
  const { guestName, writeDetail, createdAt } = guestBook

  return (
    <Container>
      <ReadSenderGuestBookContainer>
        <p>from. {guestName}</p>
      </ReadSenderGuestBookContainer>
      <ReadContentGuestBookContainer>
        <p>{writeDetail}</p>
        <UpdateDateGuestBookContainer>
          <p>{createdAt}</p>
          <p>{createdAt}</p>
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
