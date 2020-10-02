import {useEffect, useState} from 'react'

const getValue =(key, initialValue)=>{
    const item = JSON.parse(localStorage.getItem(key))

    if(item !== null) return item;

    if(initialValue instanceof Function) return initialValue()

    return initialValue;
}

export const useLocalStorage=(key,initialValue)=>{

    const [value, setValue] = useState(()=>{
        return getValue(key,initialValue)
    })

    useEffect(()=>{
       localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value,setValue]
}