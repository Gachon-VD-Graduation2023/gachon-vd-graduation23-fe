'use client'
import React from 'react'
import { useBetterMediaQuery, useVh } from '@/utils/common.util'
import PcObjectPage from '@/components/Object/PcObjectPage'
import MobileObjectPage from '@/components/Object/MobileObjectPage'

export default function Object({ params }: { params: { menu: string } }) {
  const isMobile = useBetterMediaQuery('(max-width: 500px)')

  return (
    <>
      {isMobile ? (
        <MobileObjectPage currentMenu={params.menu} />
      ) : (
        <PcObjectPage currentMenu={params.menu} />
      )}
    </>
  )
}
