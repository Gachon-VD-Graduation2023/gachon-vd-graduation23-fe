'use client'
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import * as Matter from 'matter-js'
import {
  allObjectData,
  bxObjectData,
  mediaObjectData,
  uxuiObjectData,
  graphicObjectData,
  illustrationObjectData,
} from '@/components/Object/ObjectData'
import { ObjectProp } from '@/types/object.type'
import { useRouter, usePathname } from 'next/navigation'
import Footer from '@/components/Footer'

var Engine = Matter.Engine,
  Render = Matter.Render,
  Bodies = Matter.Bodies as any,
  Runner = Matter.Runner,
  Composite = Matter.Composite,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Events = Matter.Events

export default function MobileObjectPage({ currentMenu }: { currentMenu: string }) {
  const mobileHeight = 900
  const router = useRouter()
  const mobileMenu = ['BX', 'Graphic', 'Illustration', 'Media', 'UXUI']

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
          objectProps: objectProps as any,
        },
      )

      Composite.add(engine.world, object)
    }

    setTimeout(() => {
      addObject(index + 1)
    }, 50)
  }

  //클릭 이벤트
  function handleClick(event: any) {
    const mousePosition = event.mouse.position
    if (engine) {
      const clickedObjects = Matter.Query.point(engine.world.bodies, mousePosition)

      if (clickedObjects.length > 0) {
        const clickedObject = clickedObjects[0]
        const objectProps = (clickedObject as any).objectProps

        if (objectProps && objectProps.target) {
          router.push(`/works/${currentMenu}/${objectProps.target}`)
        }
      }
    }
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
        height: mobileHeight,
      },
    })

    // initialGroundWidth = 800

    //지면과 좌우 벽면
    ground = Bodies.rectangle(window.innerWidth / 2, mobileHeight + 15, window.innerWidth, 15, {
      isStatic: true,
    })
    leftWall = Bodies.rectangle(-1, 0, 1, mobileHeight * 2, { isStatic: true })
    rightWall = Bodies.rectangle(window.innerWidth + 1, 0, 1, mobileHeight * 2, {
      isStatic: true,
    })

    Composite.add(engine.world, [ground, leftWall, rightWall])
    const runner = Runner.create()
    Render.run(render)
    Runner.run(runner, newEngine)

    if (currentMenu === 'bx') {
      objectPropsArr = shuffleArray(bxObjectData)
    } else if (currentMenu === 'media') {
      objectPropsArr = shuffleArray(mediaObjectData)
    } else if (currentMenu === 'uxui') {
      objectPropsArr = shuffleArray(uxuiObjectData)
    } else if (currentMenu === 'graphic') {
      objectPropsArr = shuffleArray(graphicObjectData)
    } else if (currentMenu === 'illustration') {
      objectPropsArr = shuffleArray(illustrationObjectData)
    } else {
      objectPropsArr = shuffleArray(allObjectData)
    }

    window.addEventListener('resize', () => handleResize())
  }

  const handleResize = () => {
    if (render) {
      render.canvas.width = window.innerWidth
      render.canvas.height = mobileHeight

      Matter.Body.setPosition(
        ground,
        Matter.Vector.create(window.innerWidth / 2, mobileHeight + 10),
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

    if (engine && render) {
      const mouse = Mouse.create(render.canvas)
      const mouseConstraint: any = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
        },
      })

      mouseConstraint.mouse.element.removeEventListener(
        'mousewheel',
        mouseConstraint.mouse.mousewheel,
      )
      mouseConstraint.mouse.element.removeEventListener(
        'DOMMouseScroll',
        mouseConstraint.mouse.mousewheel,
      )
      mouseConstraint.mouse.element.removeEventListener(
        'touchmove',
        mouseConstraint.mouse.mousemove,
      )
      mouseConstraint.mouse.element.removeEventListener(
        'touchstart',
        mouseConstraint.mouse.mousedown,
      )
      mouseConstraint.mouse.element.removeEventListener('touchend', mouseConstraint.mouse.mouseup)

      Events.on(mouseConstraint, 'mouseup', (event) => {
        handleClick(event)
      })

      Composite.add(engine.world, mouseConstraint)

      return () => {
        // 클릭 이벤트 핸들러를 제거합니다. (clean-up)
        if (engine) {
          Composite.remove(engine.world, mouseConstraint)
        }
      }
    }
  }, [])
  return (
    <>
      <Container>
        <MenuBar>
          {mobileMenu.map((menu, i) => {
            return menu.toLowerCase() === currentMenu ? (
              <MobileSelectedMenuBtn key={i}>
                {menu === 'UXUI' ? 'UX/UI' : menu}
              </MobileSelectedMenuBtn>
            ) : (
              <MobileMenuBtn
                key={i}
                onClick={() => {
                  router.push(`/object/${menu.toLowerCase()}`)
                }}
              >
                {menu === 'UXUI' ? 'UX/UI' : menu}
              </MobileMenuBtn>
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
  height: 900px;
  background: linear-gradient(180deg, #19b7ec 0%, #f3f3f3 100%);
  overflow-y: hidden;
  font-family: 'Pretendard';
`

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`
const MenuBar = styled.div`
  display: flex;
  width: 100%;
  margin-top: 56px;
  position: fixed;
  z-index: 998;
`

const MobileMenuBtn = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 0.5px solid black;
  border-right: 0.5px solid black;
  padding: 3px 0px 3px 0px;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
  &:first-child {
    border-left: none;
  }
  &:last-child {
    border-right: none;
  }
  font-family: 'Pretendard';
`
const MobileSelectedMenuBtn = styled.div`
  border: 1px solid black;
  padding: 3px 0px 3px 0px;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  background-color: black;
  color: white;
  flex-grow: 1;
  text-align: center;
`
