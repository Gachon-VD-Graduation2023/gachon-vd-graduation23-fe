import * as Matter from 'matter-js'
import { ObjectProp } from '@/types/object.type'

export const allObjectData: ObjectProp[] = [
  {
    width: 103.19,
    height: 100.62,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/강건우.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '0',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/강건우_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '0',
  },
  {
    width: 112.31,
    height: 77.64,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/김가선.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '6',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/김가선_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '6',
  },
  {
    width: 79.89,
    height: 127,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/안성민유지원.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/안성민_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/유지원_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 100.11,
    height: 100.11,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이세윤.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '22',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이세윤_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '22',
  },
  {
    width: 131.42,
    height: 99,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이수정.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '23',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이수정_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '23',
  },
  {
    width: 71.72,
    height: 178,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이유미.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '25',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이유미_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '25',
  },
  {
    width: 112,
    height: 97.95,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/정형민.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '42',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/정형민_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '42',
  },
  {
    width: 85.56,
    height: 155,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/구고은.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '2',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/구고은_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '2',
  },
  {
    width: 78.87,
    height: 107.82,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/김주영.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '10',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/김주영_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '10',
  },
  {
    width: 112,
    height: 99.35,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/유수영.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '21',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/유수영_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '21',
  },
  {
    width: 98,
    height: 105.86,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/이유진.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '26',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/이유진_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '26',
  },
  {
    width: 75.58,
    height: 99.86,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/임수연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '35',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/임수연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '35',
  },
  {
    width: 74.9,
    height: 179,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/정재현.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '40',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/정재현_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '40',
  },
  {
    width: 115.51,
    height: 109,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/차인.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '46',
  },
  {
    width: 49,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/차인_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '46',
  },
  {
    width: 167.62,
    height: 63.8,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/구본준.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '4',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/구본준_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '4',
  },
  {
    width: 43.93,
    height: 178.7,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/권우진.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '5',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/권우진_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '5',
  },
  {
    width: 87.27,
    height: 99.18,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/김서현.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '8',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/김서현_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '8',
  },
  {
    width: 114.3,
    height: 92,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/박성진.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '14',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/박성진_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '14',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/유지원_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 106.32,
    height: 75.37,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/양준모황태겸.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '양준모황태겸',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/양준모_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '양준모황태겸',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/황태겸_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '양준모황태겸',
  },
  {
    width: 126.77,
    height: 92.33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/이지환.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '31',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/이지환_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '31',
  },
  {
    width: 49.59,
    height: 113,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/조성구.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '44',
  },
  {
    width: 155.75,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/조성구_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '44',
  },
  {
    width: 75.26,
    height: 143,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/최민희.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '47',
  },
  {
    width: 49,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/최민희_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '47',
  },
  {
    width: 53.84,
    height: 124,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/김태호.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '11',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/김태호_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '11',
  },
  {
    width: 88.35,
    height: 119.3,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/박도연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '13',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/박도연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '13',
  },
  {
    width: 134,
    height: 81.99,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/성진루빈.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '17',
  },
  {
    width: 73,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/성진루빈_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '17',
  },
  {
    width: 79.89,
    height: 127,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/안성민유지원.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/안성민_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/유지원_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 99.21,
    height: 76,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이수진.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '24',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이수진_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '24',
  },
  {
    width: 75.37,
    height: 106.82,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이정림.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '28',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이정림_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '28',
  },
  {
    width: 103.7,
    height: 95,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이주현.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '29',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이주현_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '29',
  },
  {
    width: 160,
    height: 84.59,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이채연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '32',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이채연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '32',
  },
  {
    width: 93.45,
    height: 113,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/정선아.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '36',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/정선아_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '36',
  },
  {
    width: 134.33,
    height: 87,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/정현아.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '41',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/정현아_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '41',
  },
  {
    width: 64.39,
    height: 112.81,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/정희진.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '43',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/정희진_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '43',
  },
  {
    width: 108,
    height: 83.63,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/조현수.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '45',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/조현수_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '45',
  },
  {
    width: 138,
    height: 94.93,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/강선우.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '1',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/강선우_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '1',
  },
  {
    width: 82.86,
    height: 104.33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/구도이.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '3',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/구도이_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '3',
  },
  {
    width: 61.38,
    height: 98,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/김민기.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '7',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/김민기_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '7',
  },
  {
    width: 90.23,
    height: 162,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/김예원.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '9',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/김예원_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '9',
  },
  {
    width: 84.84,
    height: 119.3,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/남근화봉규림.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '12',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/남근화_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '12',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/봉규림_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '12',
  },
  {
    width: 88.35,
    height: 119.3,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/박도연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '13',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/박도연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '13',
  },
  {
    width: 121.44,
    height: 102.8,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/박세연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '15',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/박세연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '15',
  },
  {
    width: 106.71,
    height: 98.8,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/박은서.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '16',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/박은서_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '16',
  },
  {
    width: 145.26,
    height: 94.84,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/오진우.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '20',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/오진우_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '20',
  },
  {
    width: 47,
    height: 109.81,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이재유.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '27',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이재유_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '27',
  },
  {
    width: 100,
    height: 100,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이지미.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '30',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이지미_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '30',
  },
  {
    width: 101.19,
    height: 99.84,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이현주.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '33',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이현주_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '33',
  },
  {
    width: 87.07,
    height: 107.84,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/임다혜.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '34',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/임다혜_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '34',
  },
  {
    width: 46.37,
    height: 96.85,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/정세현.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '37',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/정세현_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '37',
  },
  {
    width: 39.55,
    height: 120.84,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/정윤환.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '38',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/정윤환_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '38',
  },
  {
    width: 69.91,
    height: 154.94,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/정은숙.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '39',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/정은숙_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '39',
  },
  {
    width: 127.3,
    height: 52.34,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/최승우.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '48',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/최승우_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '48',
  },
  {
    width: 99.04,
    height: 71.63,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/최윤녕.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '49',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/최윤녕_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '49',
  },
  {
    width: 137.23,
    height: 79.27,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/홍지은.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '50',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/홍지은_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '50',
  },
  {
    width: 98.87,
    height: 96.7,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/황진호.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '51',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/황진호_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '51',
  },
  {
    width: 82.59,
    height: 119.81,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/김가연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '52',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/김가연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '52',
  },
]

//////////////////////////////////
//BX 오브제
export const bxObjectData: ObjectProp[] = [
  {
    width: 103.19,
    height: 100.62,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/강건우.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '0',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/강건우_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '0',
  },
  {
    width: 85.56,
    height: 155,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/구고은.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '2',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/구고은_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '2',
  },
  {
    width: 82.86,
    height: 104.33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/구도이.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '3',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/구도이_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '3',
  },
  {
    width: 167.62,
    height: 63.8,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/구본준.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '4',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/구본준_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '4',
  },
  {
    width: 43.93,
    height: 178.7,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/권우진.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '5',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/권우진_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '5',
  },
  {
    width: 112.31,
    height: 77.64,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/김가선.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '6',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/김가선_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '6',
  },
  {
    width: 87.27,
    height: 99.18,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/김서현.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '8',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/김서현_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '8',
  },
  {
    width: 121.44,
    height: 102.8,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/박세연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '15',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/박세연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '15',
  },
  {
    width: 134,
    height: 81.99,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/성진루빈.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '17',
  },
  {
    width: 73,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/성진루빈_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '17',
  },
  {
    width: 79.89,
    height: 127,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/안성민유지원.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/안성민_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/유지원_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 100.11,
    height: 100.11,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이세윤.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '22',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이세윤_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '22',
  },
  {
    width: 131.42,
    height: 99,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이수정.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '23',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이수정_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '23',
  },
  {
    width: 99.21,
    height: 76,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이수진.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '24',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이수진_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '24',
  },
  {
    width: 71.72,
    height: 178,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이유미.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '25',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이유미_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '25',
  },
  {
    width: 103.7,
    height: 95,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이주현.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '29',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이주현_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '29',
  },
  {
    width: 126.77,
    height: 92.33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이지환.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '31',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/이지환_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '31',
  },
  {
    width: 93.45,
    height: 113,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/정선아.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '36',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/정선아_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '36',
  },
  {
    width: 134.33,
    height: 87,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/정현아.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '41',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/정현아_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '41',
  },
  {
    width: 112,
    height: 97.95,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/정형민.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '42',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/정형민_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '42',
  },
  {
    width: 82.59,
    height: 119.81,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/김가연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '52',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/bx/김가연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '52',
  },
]

//Media 오브제 데이터
export const mediaObjectData: ObjectProp[] = [
  {
    width: 85.56,
    height: 155,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/구고은.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '2',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/구고은_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '2',
  },
  {
    width: 82.86,
    height: 104.33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/구도이.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '3',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/구도이_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '3',
  },
  {
    width: 78.87,
    height: 107.82,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/김주영.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '10',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/김주영_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '10',
  },
  {
    width: 88.35,
    height: 119.3,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/박도연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '13',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/박도연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '13',
  },
  {
    width: 145.26,
    height: 94.84,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/오진우.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '20',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/오진우_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '20',
  },
  {
    width: 112,
    height: 99.35,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/유수영.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '21',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/유수영_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '21',
  },
  {
    width: 98,
    height: 105.86,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/이유진.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '26',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/이유진_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '26',
  },
  {
    width: 160,
    height: 84.59,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/이채연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '32',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/이채연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '32',
  },
  {
    width: 75.58,
    height: 99.86,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/임수연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '35',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/임수연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '35',
  },
  {
    width: 74.9,
    height: 179,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/정재현.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '40',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/정재현_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '40',
  },
  {
    width: 134.33,
    height: 87,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/정현아.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '41',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/정현아_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '41',
  },
  {
    width: 115.51,
    height: 109,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/차인.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '46',
  },
  {
    width: 49,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/차인_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '46',
  },
  {
    width: 127.3,
    height: 52.34,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/최승우.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '48',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/media/최승우_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '48',
  },
]

//uxui 오브제 데이터
export const uxuiObjectData: ObjectProp[] = [
  {
    width: 82.86,
    height: 104.33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/구도이.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '3',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/구도이_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '3',
  },
  {
    width: 167.62,
    height: 63.8,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/구본준.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '4',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/구본준_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '4',
  },
  {
    width: 43.93,
    height: 178.7,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/권우진.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '5',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/권우진_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '5',
  },
  {
    width: 87.27,
    height: 99.18,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/김서현.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '8',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/김서현_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '8',
  },
  {
    width: 114.3,
    height: 92,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/박성진.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '14',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/박성진_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '14',
  },
  {
    width: 121.44,
    height: 102.8,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/박세연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '15',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/박세연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '15',
  },
  {
    width: 134,
    height: 81.99,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/성진루빈.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '17',
  },
  {
    width: 73,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/성진루빈_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '17',
  },
  {
    width: 79.89,
    height: 127,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/안성민유지원.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/안성민_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/유지원_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 106.32,
    height: 75.37,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/양준모황태겸.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '양준모황태겸',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/양준모_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '양준모황태겸',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/황태겸_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '양준모황태겸',
  },
  {
    width: 126.77,
    height: 92.33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/이지환.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '31',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/이지환_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '31',
  },
  {
    width: 93.45,
    height: 113,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/정선아.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '36',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/정선아_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '36',
  },
  {
    width: 49.59,
    height: 113,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/조성구.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '44',
  },
  {
    width: 155.75,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/조성구_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '44',
  },
  {
    width: 115.51,
    height: 109,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/차인.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '46',
  },
  {
    width: 49,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/차인_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '46',
  },
  {
    width: 75.26,
    height: 143,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/최민희.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '47',
  },
  {
    width: 49,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/uxui/최민희_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '47',
  },
]

//graphic 오브제 데이터
export const graphicObjectData: ObjectProp[] = [
  {
    width: 103.19,
    height: 100.62,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/강건우.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '0',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/강건우_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '0',
  },
  {
    width: 112.31,
    height: 77.64,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/김가선.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '6',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/김가선_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '6',
  },
  {
    width: 87.27,
    height: 99.18,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/김서현.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '8',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/김서현_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '8',
  },
  {
    width: 53.84,
    height: 124,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/김태호.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '11',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/김태호_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '11',
  },
  {
    width: 88.35,
    height: 119.3,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/박도연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '13',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/박도연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '13',
  },
  {
    width: 134,
    height: 81.99,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/성진루빈.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '17',
  },
  {
    width: 73,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/성진루빈_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '17',
  },
  {
    width: 79.89,
    height: 127,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/안성민유지원.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/안성민_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/유지원_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '18',
  },
  {
    width: 112,
    height: 99.35,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/유수영.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '21',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/유수영_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '21',
  },
  {
    width: 99.21,
    height: 76,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이수진.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '24',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이수진_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '24',
  },
  {
    width: 47,
    height: 109.81,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이재유.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '27',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이재유_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '27',
  },
  {
    width: 75.37,
    height: 106.82,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이정림.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '28',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이정림_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '28',
  },
  {
    width: 103.7,
    height: 95,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이주현.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '29',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이주현_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '29',
  },
  {
    width: 160,
    height: 84.59,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이채연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '32',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/이채연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '32',
  },
  {
    width: 75.58,
    height: 99.86,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/임수연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '35',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/임수연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '35',
  },
  {
    width: 93.45,
    height: 113,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/정선아.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '36',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/정선아_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '36',
  },
  {
    width: 134.33,
    height: 87,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/정현아.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '41',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/정현아_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '41',
  },
  {
    width: 64.39,
    height: 112.81,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/정희진.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '43',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/정희진_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '43',
  },
  {
    width: 108,
    height: 83.63,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/조현수.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '45',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/조현수_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '45',
  },
  {
    width: 82.59,
    height: 119.81,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/김가연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '52',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/graphic/김가연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '52',
  },
]

//illustration 오브제 데이터
export const illustrationObjectData: ObjectProp[] = [
  {
    width: 138,
    height: 94.93,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/강선우.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '1',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/강선우_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '1',
  },
  {
    width: 82.86,
    height: 104.33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/구도이.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '3',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/구도이_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '3',
  },
  {
    width: 167.62,
    height: 63.8,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/구본준.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '4',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/구본준_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '4',
  },
  {
    width: 61.38,
    height: 98,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/김민기.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '7',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/김민기_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '7',
  },
  {
    width: 90.23,
    height: 162,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/김예원.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '9',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/김예원_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '9',
  },
  {
    width: 78.87,
    height: 107.82,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/김주영.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '10',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/김주영_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '10',
  },
  {
    width: 84.84,
    height: 119.3,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/남근화봉규림.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '12',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/남근화_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '12',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/봉규림_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '12',
  },
  {
    width: 88.35,
    height: 119.3,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/박도연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '13',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/박도연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '13',
  },
  {
    width: 121.44,
    height: 102.8,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/박세연.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '15',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/박세연_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '15',
  },
  {
    width: 106.71,
    height: 98.8,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/박은서.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '16',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/박은서_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '16',
  },
  {
    width: 145.26,
    height: 94.84,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/오진우.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '20',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/오진우_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '20',
  },
  {
    width: 100.11,
    height: 100.11,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이세윤.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '22',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이세윤_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '22',
  },
  {
    width: 131.42,
    height: 99,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이수정.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '23',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이수정_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '23',
  },
  {
    width: 47,
    height: 109.81,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이재유.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '27',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이재유_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '27',
  },
  {
    width: 100,
    height: 100,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이지미.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '30',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이지미_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '30',
  },
  {
    width: 101.19,
    height: 99.84,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이현주.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '33',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/이현주_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '33',
  },
  {
    width: 87.07,
    height: 107.84,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/임다혜.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '34',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/임다혜_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '34',
  },
  {
    width: 46.37,
    height: 96.85,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/정세현.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '37',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/정세현_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '37',
  },
  {
    width: 39.55,
    height: 120.84,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/정윤환.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '38',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/정윤환_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '38',
  },
  {
    width: 69.91,
    height: 154.94,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/정은숙.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '39',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/정은숙_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '39',
  },
  {
    width: 115.51,
    height: 109,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/차인.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '46',
  },
  {
    width: 49,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/차인_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '46',
  },
  {
    width: 127.3,
    height: 52.34,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/최승우.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '48',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/최승우_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '48',
  },
  {
    width: 99.04,
    height: 71.63,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/최윤녕.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '49',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/최윤녕_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '49',
  },
  {
    width: 137.23,
    height: 79.27,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/홍지은.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '50',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/홍지은_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '50',
  },
  {
    width: 98.87,
    height: 96.7,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/황진호.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '51',
  },
  {
    width: 61,
    height: 33,
    render: {
      sprite: {
        texture: `${process.env.NEXT_PUBLIC_URL}/images/objects/illustration/황진호_name.png`,
        xScale: 0.25,
        yScale: 0.25,
      },
    },
    target: '51',
  },
]
