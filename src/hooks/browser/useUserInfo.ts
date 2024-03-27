import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * ip 位置
 *
 * city 所在城市
 *
 * region 所在地區
 *
 * country 所在國家
 *
 * loc 經緯度
 *
 * org 電信公司
 *
 * timezone 時區
 *
 * readme 說明
 */
type UserInfo =
  | {
      ip: string
      city: string
      region: string
      country: string
      loc: string
      org: string
      timezone: string
      readme: string
    }
  | {}

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({})

  // fetch user info
  useEffect(() => {
    axios.get('https://ipinfo.io/json').then((res: any) => {
      setUserInfo(res.data)
    })
  }, [])

  return userInfo
}

export default useUserInfo
