
import {FC , useContext , useRef , useEffect} from 'react'
import {ClickedContext , HasStartedContext} from '../App'
const ClickerArea:FC = () => {
    const [count , setCount] = useContext(ClickedContext) ; 
    const [started , setIsStarted] = useContext(HasStartedContext) ; 
    const clickRef = useRef(null) ; 
    const divText:string = "Click here to start playing!!!"
  
    const handleClick:() => void = () => {
        if(started === false){
            
        }
    }
    return (
        <div className="area__wrapper">
            <button className="click_area" onClick = {handleClick} ref = {clickRef}>
                <h1>
                {divText}
                </h1>
            </button>
        </div>
    )
}

export default ClickerArea; 
