import * as Matter from 'matter-js'
import { ObjectProp } from '../../../types/object.type'

export let objectData: ObjectProp[] = [
  {
    width: 139.27,
    height: 135.77,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/강건우.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '강건우',
  },
  {
    width: 101.33,
    height: 184.19,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/구고은.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '구고은',
  },
  {
    width: 82.86,
    height: 104.33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/구도이.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '구도이',
  },
  {
    width: 195.17,
    height: 73.88,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/구본준.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '구본준',
  },
  {
    width: 161.73,
    height: 111.81,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/김가선.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '김가선',
  },
  {
    width: 110.32,
    height: 160.23,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/김가연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '김가연',
  },
  {
    width: 59.4,
    height: 94.84,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/김민기.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '김민기',
  },
  {
    width: 58.9,
    height: 112.31,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/김민지.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '김민지',
  },
  {
    width: 98.83,
    height: 112.31,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/김서현.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '김서현',
  },
  {
    width: 99.32,
    height: 178.32,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/김예원.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '김예원',
  },
  {
    width: 78.87,
    height: 107.82,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/김주영1.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '김주영1',
  },
  {
    width: 60.9,
    height: 140.27,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/김태호.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '김태호',
  },
  {
    width: 94.84,
    height: 119.3,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/남근화봉규림.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '남근화봉규림',
  },
  {
    width: 88.35,
    height: 119.3,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/박도연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '박도연',
  },
  {
    width: 92.55,
    height: 74.49,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/박성진.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '박성진',
  },
  {
    width: 170.71,
    height: 144.26,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/박세연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '박세연',
  },
  {
    width: 120.8,
    height: 111.81,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/박은서.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '박은서',
  },
  {
    width: 142.76,
    height: 87.35,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/성진루빈.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '성진루빈',
  },
  {
    width: 86.36,
    height: 137.27,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/안성민유지원.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '안성민유지원',
  },
  {
    width: 106.32,
    height: 75.37,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/양준모황태겸.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '양준모황태겸',
  },
  {
    width: 145.26,
    height: 94.84,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/오진우.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '오진우',
  },
  {
    width: 119.3,
    height: 105.82,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/유수영.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '유수영',
  },
  {
    width: 137.69,
    height: 137.69,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/이세윤.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '이세윤',
  },
  {
    width: 149.75,
    height: 112.81,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/이수정.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '이수정',
  },
  {
    width: 85.36,
    height: 65.39,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/이수진.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '이수진',
  },
  {
    width: 80.37,
    height: 94.34,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/이원경.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '이원경',
  },
]
