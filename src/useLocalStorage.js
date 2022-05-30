import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const getSavedValue = (key, initialValue) => {

    console.log(key)
    const savedValue = JSON.parse(localStorage.getItem(key))
    console.log("savedValue: " + savedValue)
    if(savedValue) return savedValue

    if(initialValue instanceof Function) return initialValue()  // if a func is passed as an initialValue, then we call the func to get the initialValue

    console.log("before final call")
    return initialValue
}

export default function useLocalStorage(key, initialValue) {
    console.log(key)
    
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    })

    useEffect(() => {
        console.log("value of value changes: " + value)
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}
