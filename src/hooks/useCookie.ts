const useCookie = () => {
  const getCookie = (cname: string) => {
    let cvalue = null
    if (typeof window !== 'undefined') {
      const name = cname + '='
      const ca = window.document.cookie.split(';')

      ca.forEach((item) => {
        if (item.trim().startsWith(name)) cvalue = item.trim().substring(name.length, item.trim().length)
      })
    }

    return cvalue
  }

  const setCookie = (name: string, value: string, exdays = 3, domainName = window.location.hostname) => {
    const date = new Date()
    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000)
    const expires = exdays === 0 ? '' : `expires=${date.toUTCString()}`
    const domain = window.location.hostname === 'localhost' ? '' : `domain=${domainName}`
    document.cookie = `${name}=${value};${expires};path=/;${domain}`
  }

  return [getCookie, setCookie]
}

export default useCookie
