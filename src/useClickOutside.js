import { useEffect, useRef } from "react"

const useClickOutside = (close) => {
  const myRef = useRef()
  useEffect (()=>{
    const handleClick = (e)=>{
      if (!myRef.current.contains(e.target)){
        console.log('entro al if')
        close()
      }
    }
    document.addEventListener('mousedown',handleClick)
    return(
      ()=>{document.removeEventListener('mousedown', handleClick)}
    )
  },[myRef])
  return(myRef)
}
export default useClickOutside