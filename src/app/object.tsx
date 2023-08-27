'use client'
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

function getRandomPosition(max: number): number {
  return Math.floor(Math.random() * max)
}

export default function Object() {
  const [images, setImages] = useState<Array<{ x: number; y: number; speedY: number }>>([])
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [canvasSize, setCanvasSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 500,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const canvas = canvasRef.current
      const ctx = canvas!.getContext('2d')
      const fallingImages: Array<{
        x: number
        y: number
        width: number
        height: number
        speedY: number
      }> = []

      const createImage = () => {
        const image = {
          x: getRandomPosition(canvasSize.width - 100), // 이미지의 너비를 고려
          y: -100, // 화면 위에서 시작
          width: 100, // 이미지의 가로 길이
          height: 100, // 이미지의 세로 길이
          speedY: Math.random() * 5 + 2, // 이미지가 떨어지는 속도 (랜덤)
        }
        fallingImages.push(image)
      }

      const checkCollision = (image: { x: number; y: number; width: number; height: number }) => {
        // 이미지끼리 충돌 검사 로직 추가
        for (const existingImage of fallingImages) {
          if (
            image !== existingImage &&
            image.x < existingImage.x + existingImage.width &&
            image.x + image.width > existingImage.x &&
            image.y < existingImage.y + existingImage.height &&
            image.y + image.height > existingImage.y
          ) {
            return true
          }
        }
        return false
      }

      const updateCanvas = () => {
        ctx!.clearRect(0, 0, canvasSize.width, canvasSize.height)

        for (const image of fallingImages) {
          image.y += image.speedY

          //   // 이미지가 바닥에 닿았거나 다른 이미지와 충돌했을 때 쌓이게 처리
          //   if (image.y + image.height >= canvasSize.height || checkCollision(image)) {
          //     image.y = canvasSize.height - image.height
          //     fallingImages.push({ ...image })
          //     createImage()
          //   }

          // 이미지를 그림
          ctx!.fillRect(image.x, image.y, image.width, image.height)
        }

        requestAnimationFrame(updateCanvas)
      }

      const interval = setInterval(createImage, 1000) // 새 이미지를 생성하는 간격

      updateCanvas()

      return () => {
        clearInterval(interval)
      }
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas!.getContext('2d')

    // 창 크기가 변경될 때 Canvas 크기 업데이트
    const handleResize = () => {
      setCanvasSize({ width: window.innerWidth, height: window.innerHeight })
    }

    // 초기 Canvas 크기 설정
    canvas!.width = canvasSize.width
    canvas!.height = canvasSize.height

    // 리사이즈 이벤트 리스너 등록
    window.addEventListener('resize', handleResize)

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize)
    }

    // canvasSize가 변경될 때마다 Canvas 크기 업데이트
  }, [canvasSize])

  return (
    <Container>
      <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height}>
        <img src='/images/objects/pot.png' />
      </canvas>
    </Container>
  )
}

const Container = styled.div`
  padding-left: 201px;
  height: 100vh;
  background: linear-gradient(180deg, #19b7ec 0%, #f3f3f3 100%);
`
