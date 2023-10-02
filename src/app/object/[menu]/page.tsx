'use client'
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import * as Matter from 'matter-js'
import {
  bxObjectData,
  mediaObjectData,
  uxuiObjectData,
  graphicObjectData,
  illustrationObjectData,
} from '@/components/Object/ObjectData'
import { ObjectProp } from '../../../../types/object.type'
import { useRouter, usePathname } from 'next/navigation'
import Footer from '@/components/Footer'

var Engine = Matter.Engine,
  Render = Matter.Render,
  Bodies = Matter.Bodies,
  Runner = Matter.Runner,
  Composite = Matter.Composite,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint

export default function Object({ params }: { params: { menu: string } }) {
  const router = useRouter()
  const menu = ['ALL', 'BX', 'Graphic', 'Illustration', 'Media', 'UXUI']
  const allObject = [
    ...bxObjectData,
    ...mediaObjectData,
    ...uxuiObjectData,
    ...graphicObjectData,
    ...illustrationObjectData,
  ]

  // useEffect(() => {
  //   console.log(params.menu)
  // }, [])

  const targetCanvas = useRef<HTMLCanvasElement>(null)
  let engine: Matter.Engine | null = null
  let render: Matter.Render | null = null
  let objectPropsArr: ObjectProp[] = []
  let ground: Matter.Body
  let leftWall: Matter.Body
  let rightWall: Matter.Body
  // let initialGroundWidth: number

  //오브제 배열 순서 섞기
  const shuffleArray = (objectArr: ObjectProp[]) => {
    for (let i = objectArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[objectArr[i], objectArr[j]] = [objectArr[j], objectArr[i]]
    }

    return objectArr
  }

  //1초마다 오브제 추가하기
  const addObject = (index: number) => {
    if (index < objectPropsArr.length && engine) {
      const objectProps = objectPropsArr[index]
      // x 값을 랜덤으로 설정 (0부터 화면 끝까지)
      const randomX = Math.random() * window.innerWidth
      const object = Bodies.rectangle(
        randomX,
        -objectProps.height - 30,
        objectProps.width,
        objectProps.height,
        {
          render: objectProps.render,
        },
      )

      Composite.add(engine.world, object)
    }

    setTimeout(() => {
      addObject(index + 1)
    }, 50)
  }

  //matter.js 셋업
  const setup = () => {
    const newEngine = Engine.create()
    engine = newEngine
    render = Render.create({
      canvas: targetCanvas.current!,
      engine: newEngine,
      options: {
        background: 'transparent',
        wireframes: false,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    })

    // initialGroundWidth = 800

    //지면과 좌우 벽면
    ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + 15,
      window.innerWidth,
      15,
      {
        isStatic: true,
      },
    )
    leftWall = Bodies.rectangle(-1, 0, 1, window.innerHeight * 2, { isStatic: true })
    rightWall = Bodies.rectangle(window.innerWidth + 1, 0, 1, window.innerHeight * 2, {
      isStatic: true,
    })

    Composite.add(engine.world, [ground, leftWall, rightWall])
    const runner = Runner.create()
    Render.run(render)
    Runner.run(runner, newEngine)

    if (params.menu === 'bx') {
      objectPropsArr = shuffleArray(bxObjectData)
    } else if (params.menu === 'media') {
      objectPropsArr = shuffleArray(mediaObjectData)
    } else if (params.menu === 'uxui') {
      objectPropsArr = shuffleArray(uxuiObjectData)
    } else if (params.menu === 'graphic') {
      objectPropsArr = shuffleArray(graphicObjectData)
    } else if (params.menu === 'illustration') {
      objectPropsArr = shuffleArray(illustrationObjectData)
    } else {
      objectPropsArr = shuffleArray(allObject)
    }
    // objectPropsArr = shuffleArray(objectData)

    window.addEventListener('resize', () => handleResize())
  }

  const handleResize = () => {
    if (render) {
      render.canvas.width = window.innerWidth
      render.canvas.height = window.innerHeight

      Matter.Body.setPosition(
        ground,
        Matter.Vector.create(window.innerWidth / 2, window.innerHeight + 10),
      )
      // // ground의 width 조정
      // const scaleFactor = window.innerWidth / initialGroundWidth
      // Matter.Body.scale(ground, scaleFactor, 1)

      Matter.Body.setPosition(leftWall, Matter.Vector.create(-1, 0))
      Matter.Body.setPosition(rightWall, Matter.Vector.create(window.innerWidth + 1, 0))
    }
  }

  useEffect(() => {
    setup()
    setTimeout(() => {
      addObject(0)
    }, 50)
  }, [])
  return (
    <>
      <Container>
        <MenuBar>
          {menu.map((menu, i) => {
            return menu.toLowerCase() === params.menu ? (
              <SelectedMenuBtn>{menu === 'UXUI' ? 'UX/UI' : menu}</SelectedMenuBtn>
            ) : (
              <MenuBtn
                onClick={() => {
                  router.push(`/object/${menu.toLowerCase()}`)
                }}
              >
                {menu === 'UXUI' ? 'UX/UI' : menu}
              </MenuBtn>
            )
          })}
        </MenuBar>
        <Canvas ref={targetCanvas}></Canvas>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
  padding-left: 201px;
  height: 100vh;
  background: linear-gradient(180deg, #19b7ec 0%, #f3f3f3 100%);
`
const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`
const MenuBar = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;
  position: fixed;
  border-bottom: 1px solid black;
`
const MenuBtn = styled.div`
  border: 1px solid black;
  padding: 4px 20px 4px 20px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`
const SelectedMenuBtn = styled.div`
  border: 1px solid black;
  padding: 4px 20px 4px 20px;
  font-size: 20px;
  font-weight: 700;
  background-color: black;
  color: white;
`
