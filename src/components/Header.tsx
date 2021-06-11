
import {FC , useEffect} from 'react' ; 

const Header:FC = () => {
    const title:string = "Master Clicker"
   
    useEffect(() => {
        document.title = title ; 
    } , [])
    return (
        <div className="header">
            <big>
            Test your clicks per second <i className="fas fa-mouse"></i> 
            </big>
        </div>
    )
}

export default Header ; 