'use client'

import { useEffect } from 'react'

import useMediaQuery from '../../hooks/useMediaQuery'
import useTheme from '../../hooks/useTheme'
import useEyeDropper from '../../hooks/useEyeDropper'
import { init } from 'next/dist/compiled/webpack/webpack'
import useUserInfo from '../../hooks/useUserInfo'

export default function Home() {
  const isMobile = useMediaQuery('(prefers-color-scheme: dark)')
  const [theme, changeTheme] = useTheme()

  const { isSupported, sRGBHex, open } = useEyeDropper()
  const userInfo = useUserInfo()

  console.log(userInfo, 'userInfo')

  console.log(isSupported, sRGBHex, 'checkData')

  return <button onClick={() => open()}>change theme</button>
}
