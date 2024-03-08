import { useState } from 'react'

const useBattery = () => {
  const [battery, setBattery] = useState<number>(0)

  ;(navigator as any).getBattery().then((battery: any) => {
    setBattery(battery.level * 100)
  })

  return battery
}

export default useBattery
