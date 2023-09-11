'use client'
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import * as Matter from 'matter-js'
import P5Canvas from 'react-p5'

var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Runner = Matter.Runner,
  Composite = Matter.Composite,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint

export default function Object() {
  const setup = () => {
    const engine = Engine.create()
    const render = Render.create({
      canvas: targetCanvas.current!,
      engine: engine,
      options: {
        background: 'transparent',
        wireframes: false,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    })

    let glassesObject = Bodies.rectangle(400, 200, 253, 97, {
      render: {
        sprite: {
          texture: `/images/objects/glasses.png`,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    })
    let potObject = Bodies.rectangle(550, 50, 197, 258, {
      render: {
        sprite: {
          texture: `/images/objects/pot.png`,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    })
    let tennisObject = Bodies.rectangle(900, 50, 124, 125, {
      render: {
        sprite: {
          texture: `/images/objects/tennis_ball.png`,
          xScale: 0.25,
          yScale: 0.25,
        },
      },
    })
    let ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight,
      window.innerWidth,
      10,
      {
        isStatic: true,
      },
    )

    Composite.add(engine.world, [glassesObject, potObject, tennisObject, ground])

    Render.run(render)

    let mouse = Mouse.create(render.canvas)

    let runner = Runner.create()
    Runner.run(runner, engine)
  }

  const targetCanvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setup()
  }, [])
  return (
    <Container>
      {/* <P5Canvas setup={setup} draw={draw} /> */}
      <Canvas ref={targetCanvas}></Canvas>
    </Container>
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
