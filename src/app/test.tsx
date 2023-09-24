import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function getRandomPosition(max: number): number {
  return Math.floor(Math.random() * max);
}

export default function FallingObjects() {
  const [objects, setObjects] = useState([]);
  const [canvasSize, setCanvasSize] = useState({ width: 500, height: 800 });

  useEffect(() => {
    const createObject = () => {
      const newObj = {
        x: getRandomPosition(canvasSize.width - 100),
        y: -100,
        width: 100,
        height: 100,
      };

      setObjects((prevObjects) => [...prevObjects, newObj]);
    };

    const handleClick = (e, objIndex) => {
      e.preventDefault();
      // 객체를 클릭했을 때 실행할 동작 추가
      // 여기서는 해당 객체를 제거함
      setObjects((prevObjects) => prevObjects.filter((_, index) => index !== objIndex));
    };

    const updateObjects = () => {
      // 객체 위치 업데이트 로직 추가
      const newObjects = objects.map((obj, index) => {
        const newObj = { ...obj };
        newObj.y += Math.random() * 5 + 2;

        return newObj;
      });

      setObjects(newObjects);
    };

    // 일정 간격으로 객체 생성
    const interval = setInterval(createObject, 1000);

    // 객체 위치 업데이트
    const updateInterval = setInterval(updateObjects, 30);

    // 컴포넌트 언마운트 시 clearInterval
    return () => {
      clearInterval(interval);
      clearInterval(updateInterval);
    };
  }, [canvasSize, objects]);

  return (
    <Container>
      <div style={{ position: 'relative', width: canvasSize.width, height: canvasSize.height }}>
        {objects.map((obj, index) => (
          <Object
            key={index}
            style={{
              position: 'absolute',
              left: obj.x,
              top: obj.y,
              width: obj.width,
              height: obj.height,
            }}
            onClick={(e) => handleClick(e, index)}
          />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-left: 201px;
  height: 100vh;
  background: linear-gradient(180deg, #19b7ec 0%, #f3f3f3 100%);
`;

const Object = styled.div`
  background-color: #ff0000; /* 객체의 배경색을 지정 */
  cursor: pointer; /* 클릭 가능한 객체로 설정 */
`;
