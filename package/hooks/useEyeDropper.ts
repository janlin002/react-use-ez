import { useState } from 'react'

// https://github.com/vueuse/vueuse/blob/1558cd2b5b019abc1feda6d702caa1053a182903/packages/core/useEyeDropper/index.ts#L37

declare global {
  interface Window {
    EyeDropper: any
  }
}

export type UseEyeDropperOptions = {
  initialValue?: string
}

export type EyeDropperOpenOptions = {
  signal?: AbortSignal
}

export type EyeDropper = {
  new (): EyeDropper
  open: (options?: EyeDropperOpenOptions) => Promise<{ sRGBHex: string }>
  [Symbol.toStringTag]: 'EyeDropper'
}

export type UseEyeDropperResult = {
  isSupported: boolean
  sRGBHex: string
  open: () => Promise<{ sRGBHex: string } | undefined>
}

const useEyeDropper = (openOptions: UseEyeDropperOptions = {}): UseEyeDropperResult => {
  const { initialValue = '' } = openOptions
  const [sRGBHex, setSRGBHex] = useState(initialValue)

  // 不支援 EyeDropper API
  if (!window.EyeDropper) {
    console.error('Your browser does not support the EyeDropper API')
  }

  async function open(openOptions?: EyeDropperOpenOptions) {
    if (!window.isSecureContext) return
    const eyeDropper: EyeDropper = new (window as any).EyeDropper()
    const result = await eyeDropper.open(openOptions)
    setSRGBHex(result.sRGBHex)
    return result
  }

  console.log(sRGBHex, 'sRGBHex123')

  return { isSupported: window.EyeDropper && window.isSecureContext, sRGBHex, open }
}
export default useEyeDropper
