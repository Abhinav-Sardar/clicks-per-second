import { useEffect } from 'react'
import {FC , useContext , useState} from 'react'
import {ClickedContext , HasStartedContext , ScoreVisContext} from '../App'
import {Link} from 'react-router-dom' ; 
const Panels:FC = () => {
    const [clicked , setClicked] = useContext(ClickedContext) ;  ; 
    const [isStarted , setIsStarted] = useContext(HasStartedContext) ; 
    const [time , setTime] = useState(0) ; 
    const [cps , setCps] = useState<number | string>(0) ; 
    const [isHidden , setIsHidden] = useContext(ScoreVisContext) ; 
    useEffect(() => {
        if(isStarted === true){
           setTimeout(() =>  setTime(time + 1) , 1000) ; 
        }

    } , [isStarted])
        useEffect(() => {
            if(time !== 0){
                if(time !== 5){
                    let setter = setInterval(() => {
                        setTime(time + 1) ; 
                    } , 1000)
                    return () =>{
                        clearInterval(setter) ; 
                    }
                }
                else {
                    // setTime(0) ; 
                    setIsStarted(false) ; 
                    // setClicked(0) ; 
                    // setCps(0) ; 
                }
            }
        } , [time]) ; 

        useEffect(() => {
            if(time === 0 || clicked === 0){
                setCps(0) ; 
            }
            else {
                setCps(Number((clicked/time).toFixed(2))) ; 
            }
        },[time]) ; 
        return (
            <div>
            <div className="panels">
                <div className="panel">
                    <div className="header time">
                        Time
                    </div> 
                    <div className="num">
                       <big>{time}s</big>
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
            </div>
    )
}

export default Panels ; 