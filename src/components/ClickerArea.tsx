import { useEffect } from 'react'
import {FC , useContext} from 'react'
import {ClickedContext , HasStartedContext} from '../App'
const ClickerArea:FC = () => {
    const [count , setCount] = useContext(ClickedContext) ; 
    const [started , setIsStarted] = useContext(HasStartedContext)
    return (
        <div className="area__wrapper">
            <button className="click_area" onClick = {() => setCount(count + 1)}>
            <h1>Click here to start</h1>
            </button>
        </div>
    )
}

export default ClickerArea; 
