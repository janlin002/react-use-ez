# react-use-ez

### publish (owner only)

```js
npm publish
```

### API

**useTheme**

<details close>
<summary>Demo</summary>

```js
import { useTheme, Theme } from "react-use-ez";

const [theme, changeTheme] = useTheme()

<button onClick={() => changeTheme()}>change theme</button>
```

</details>

---

**useBattery**

<details close>
<summary>Demo</summary>

```js
import { useBattery } from 'react-use-ez'

const battery = useBattery()
```

</details>

---

**useHover**

<details close>
<summary>Demo</summary>

```js
import { useHover } from 'react-use-ez'

const [hoverRef, isHovering] = useHover()

<div ref={hoverRef}>{isHovering ? "Hovering" : "Not Hovering"}</div>
```

</details>

### firebase

**useRemoteConfig**

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
