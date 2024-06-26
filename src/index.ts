import { useTheme, Theme } from './hooks/useTheme'
import useBattery from './hooks/useBattery'
import useHover from './hooks/useHover'
import useRequest from './hooks/useRequest'
import useCookie from './hooks/useCookie'
import useFactorial from './hooks/useFactorial'
import useBoolean from './hooks/useBoolean'
import browser from './hooks/browser'

// firebase
import useRemoteConfig from './hooks/firebase/useRemoteConfig'

export {
  useTheme,
  Theme,
  useBattery,
  useHover,
  useRemoteConfig,
  useRequest,
  useCookie,
  useFactorial,
  useBoolean,
  browser,
}
