import * as Matter from 'matter-js'

var Bodies = Matter.Bodies

export type ObjectProp = {
  width: number
  height: number
  render: {
    sprite: {
      texture: string
      xScale: number
      yScale: number
    }
  }
  target: string
}
