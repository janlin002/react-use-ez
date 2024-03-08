'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

import { useTheme, Theme } from 'react-use-ez'

export default function Home() {
  const [theme, changeTheme] = useTheme()

  useEffect(() => {
    ;(navigator as any).getBattery().then((battery: any) => {
      console.log(battery.level * 100)
    })
  }, [])

  return <button onClick={() => changeTheme()}>change theme</button>
}
