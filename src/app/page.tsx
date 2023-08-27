import Image from 'next/image'
import styles from './page.module.css'
import { IconNext, IconVercel } from '../../public/svgs'
import MenuBar from '@/components/MenuBar'
import Object from '@/app/object'

export default function Home() {
  return (
    <main>
      {/* 좌측 고정 메뉴바 */}
      <MenuBar />
      <Object />
    </main>
  )
}
