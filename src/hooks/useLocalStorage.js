import {useState} from "react"

function useLocalStorage(key, value) {
    const [storageValue, setStorageValue] = useState(() => {
        const preValue = localStorage.getItem(key)

        if (preValue !== "undefined" && preValue !== null){
            return JSON.parse(preValue)
        } else {
            localStorage.setItem(key, JSON.stringify(value))
            return value
        }
    })
    
    function setValue(value) {
        localStorage.setItem(key, JSON.stringify(value))
        setStorageValue(value)
    }
    
    return [storageValue, setValue]
}

export default useLocalStorage