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
