import { useEffect, useRef } from "react"

const useClickOutside = (close) => {
  const myRef = useRef()
  const handleClick = (e)=>{
    if (!myRef.current.contains(e.target)){
      close()
    }
  }
  useEffect (()=>{
    document.addEventListener('mousedown',handleClick)
    return(
      ()=>{document.removeEventListener('mousedown', handleClick)}
    )
  })
  return(myRef)
}
export default useClickOutside