import { useEffect } from 'react'
import {FC , useContext , useState} from 'react'
import {ClickedContext , HasStartedContext} from '../App'
const Panels:FC = () => {
    const [clicked , setClicked] = useContext(ClickedContext) ;  ; 
    const [isStarted , setIsStarted] = useContext(HasStartedContext) ; 
    const [time , setTime] = useState(0) ; 
    const [cps , setCps] = useState<number | string>(0) ; 
    useEffect(()=> {
        
    } , [isStarted])
    return (
        
            <div className="panels">
                <div className="panel">
                    <div className="header time">
                        Time
                    </div> 
                    <div className="num">
                       <big>{time}</big>
                    </div>
                    
                </div>
                <div className="panel">
                <div className="header cps">
                        Clicks/s
                </div>
                <div className="num">
                    <big>{cps}</big>
                </div>
                </div>
                
                <div className="panel">
                <div className="header clicks">
                        Clicks
                 </div>
                 <div className="num">
                     <big>{clicked}</big>
                 </div>
                </div>
                
            </div>
    )
}

export default Panels ; 