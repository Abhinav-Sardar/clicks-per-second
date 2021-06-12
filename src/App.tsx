import React , {FC , Fragment , useState , createContext , Dispatch} from 'react';
import './styles.css'
import Header from './components/Header'
import ClickerArea from './components/ClickerArea' ; 
import Panels from './components/Panels' ; 
import Score from './components/ScoreDisplay' ; 
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom' ; 
// eslint-disable-next-line
export const ClickedContext = createContext<[number , any]>([0 , ""]) ; 
export const HasStartedContext = createContext<any>([]) ; 
export const ScoreVisContext = createContext<any>(true) ; 
const App:FC = () => {
  const countState = useState<number>(0); 
  const startedState = useState<boolean>(false); 
  const scoreVis = useState(true); 
  return (
         <Router>
    <HasStartedContext.Provider value  = {startedState}>

    <ClickedContext.Provider value = {countState}>
      <Fragment>
      <div className="app">
        <ScoreVisContext.Provider value = {scoreVis}>
  
          <Route path = "/score">
          <Score/>
        </Route>
        <Route path = "/" exact >
        <Header />
        <Panels/>
        <ClickerArea/>
        </Route>

        </ScoreVisContext.Provider>
      </div>
    </Fragment>
    </ClickedContext.Provider>
    </HasStartedContext.Provider>
          </Router>
  )
}

export default App;
