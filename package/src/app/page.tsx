'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

import useMediaQuery from '../../hooks/useMediaQuery'
import useTheme from '../../hooks/useTheme'

export default function Home() {

  const isMobile = useMediaQuery('(prefers-color-scheme: dark)')
  const [theme, changeTheme] = useTheme()


  return <button onClick={()=>changeTheme()}>change theme</button>
}
