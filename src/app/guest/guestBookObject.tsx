import { styled } from 'styled-components'

// const GuestBookObject = () => {
//   return (
//     <Container>
//       <ReadSenderGuestBookContainer>
//         <p>from. {'차인차인차'}</p>
//       </ReadSenderGuestBookContainer>
//       <ReadContentGuestBookContainer>
//         <p>{'안녕하세요\n네'}</p>
//         <UpdateDateGuestBookContainer>
//           <p>{'2023.04.20'}</p>
//           <p>{'03:12PM'}</p>
//         </UpdateDateGuestBookContainer>
//       </ReadContentGuestBookContainer>
//     </Container>
//   )
// }

type GuestBookType = {
  name: string
  content: string
  date: string
}

type GuestBookObjectProps = {
  data: GuestBookType
}

const GuestBookObject: React.FC<GuestBookObjectProps> = ({ data }) => {
  const [date, time] = data.date.split('\n')

  return (
    <Container>
      <ReadSenderGuestBookContainer>
        <p>from. {data.name}</p>
      </ReadSenderGuestBookContainer>
      <ReadContentGuestBookContainer>
        <p>{data.content}</p>
        <UpdateDateGuestBookContainer>
          <p>{date}</p>
          <p>{time}</p>
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

  // color: var(--, #000);
  color: #000;
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

    white-space: pre;
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
