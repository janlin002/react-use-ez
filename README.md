# react-use-ez

## publish (owner only)

```js
npm publish
```

## API

### useTheme

<details close>
<summary>Demo</summary>

```js
import { useTheme, Theme } from "react-use-ez";

const [theme, changeTheme] = useTheme()

<button onClick={() => changeTheme()}>change theme</button>
```

</details>

---

### useBattery

<details close>
<summary>Demo</summary>

```js
import { useBattery } from 'react-use-ez'

const battery = useBattery()
```

</details>

---

### useHover

<details close>
<summary>Demo</summary>

```js
import { useHover } from 'react-use-ez'

const [hoverRef, isHovering] = useHover()

<div ref={hoverRef}>{isHovering ? "Hovering" : "Not Hovering"}</div>
```

</details>

---

### useCookie

<details close>
<summary>Demo</summary>

```js
import { useCookie } from 'react-use-ez'

const [getCookie, setCookie] = useCookie()

console.log(getCookie("cookie-name"))

<button
    onClick={() => {
      setCookie("cookie-name", "cookie-value");
    }}
  >
    點擊
</button>
```

</details>

**setCookie config**

- name
- value
- exdays
- domainName

---

### useRequest

<details close>
<summary>Demo</summary>

```js
import { useRequest } from 'react-use-ez'

const getUser = (): Promise<any> => {...}

const { loading, data: users, error } = useRequest(getUsers);
```

</details>

---

### useFactorial

<details close>
<summary>Demo</summary>

```js
import { useFactorial } from 'react-use-ez'

const { result } = useFactorial(3) // 6
```

</details>

---

### useMediaQuery

<details close>
<summary>Demo</summary>

```js
import { useMediaQuery } from 'react-use-ez'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
```

</details>

---

### useEyeDropper

<details close>
<summary>Demo</summary>

```js
import { useEyeDropper } from 'react-use-ez'

const { isSupported, sRGBHex, open } = useEyeDropper()
```

</details>

---

### useUserInfo

<details close>
<summary>Demo</summary>

```js
import { useUserInfo } from 'react-use-ez'

const userInfo = useUserInfo()
```

</details>

### Type Declarations

```js
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
```

---

### useDevice (Inaccurate)

<details close>
<summary>Demo</summary>

```js
import { useDevice } from 'react-use-ez'

const { isPhone, isAndroid, isMobile, isMac } = useDevice()
```

</details>

### useBoolean

<details close>
<summary>Demo</summary>

```js
import { useBoolean } from 'react-use-ez'

const { value, setTrue, setFalse, toggle } = useBoolean(false)
```

</details>

### useRemoteConfig (firebase)

<details close>
<summary>Demo</summary>

```js
import { useRemoteConfig } from 'react-use-ez'

const firebaseConfig = {
  apiKey: ''
  authDomain: ''
  projectId: ''
  storageBucket: ''
  messagingSenderId: ''
  appId: ''
}

const message = useRemoteConfig(firebaseConfig, 'config-name')
```
