import {useEffect, useState} from 'react'

const PREFIX = 'codepen-clone-'

const useLocalStorage = (key, initialvalue) => {
    const prefixedKey = PREFIX + key;
    const [value, setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(prefixedKey)
        if(jsonValue != null) return JSON.parse(jsonValue)
        if(typeof initialvalue === 'function') {
            return initialvalue()
        }else{
            return initialvalue
        }
    })
    useEffect(()=>{
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])
  return [value, setValue]
}

export default useLocalStorage