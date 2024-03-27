import { useState, useEffect } from 'react'

/**
 * Inaccurate
 * 是否為手機 (iphone vs android)
 * 是否為桌機 (mac vs windows)
 */

type DeviceType = {
  isPhone: boolean
  isAndroid: boolean
  isMobile: boolean
  isMac: boolean
}

const ua = navigator.userAgent
// android
const android = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1
// ios
const iOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
// const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
const isMacOS = /macintosh|Mac OS X/i.test(navigator.userAgent)

const useDevice = (): DeviceType => {
  // mobile
  const [isPhone, setIsPhone] = useState<boolean>(false)
  const [isAndroid, setIsAndroid] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  //   const [platform, setPlatform] = useState<string>('')

  // pc
  const [isMac, setIsMac] = useState<boolean>(false)

  console.log(isMac, 'isMac')

  useEffect(() => {
    /**
     * 確認是否為手機
     */
    // const isMobileDevice = mobileDevice.some((e) => navigator.userAgent.match(e))
    // setIsPhone(isMobileDevice)

    // 手機版的判斷
    if (android) {
      setIsPhone(false)
      setIsAndroid(true)
      setIsMobile(true)
    } else if (iOS) {
      setIsPhone(true)
      setIsAndroid(false)
      setIsMobile(true)
    } else {
      // 非行動裝置
      setIsPhone(false)
      setIsAndroid(false)
      setIsMobile(false)
    }
  }, [])

  useEffect(() => {
    setIsMac(isMacOS)
  }, [isMacOS])

  return {
    isPhone,
    isAndroid,
    isMobile,
    isMac,
  }
}

export default useDevice
