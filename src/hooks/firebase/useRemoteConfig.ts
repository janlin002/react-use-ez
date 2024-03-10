import { useEffect, useState } from 'react'

import { fetchAndActivate, getRemoteConfig, getString } from 'firebase/remote-config'
import { initializeApp } from 'firebase/app'

type TFirebaseConfig = {
  apiKey: string
  authDomain: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

const useRemoteConfig = (firebaseConfig: TFirebaseConfig, key: string) => {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const app = initializeApp(firebaseConfig)
      const remoteConfig = getRemoteConfig(app)
      const isFetched: any = fetchAndActivate(remoteConfig)

      if (isFetched) {
        const searchMessage = getString(remoteConfig, key)
        setMessage(searchMessage)
      } else {
        console.error('Failed to fetch remote config')
      }
    }
  }, [key, firebaseConfig])

  return message
}

export default useRemoteConfig
