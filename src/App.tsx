import React , {FC , Fragment , useState , createContext , Dispatch} from 'react';
import './styles.css'
import Header from './components/Header'
import ClickerArea from './components/ClickerArea' ; 

// eslint-disable-next-line
export const ClickedContext = createContext<[number , any]>([0 , ""]) ; 
export const HasStartedContext = createContext<any>([]) ; 
const App:FC = () => {
  const countState = useState<number>(0); 
  const startedState = useState<boolean>(false); 
  return (
    <HasStartedContext.Provider value  = {startedState}>

    <ClickedContext.Provider value = {countState}>
      <Fragment>
      <div className="app">
        <Header />
        <ClickerArea/>
      </div>
    </Fragment>
    </ClickedContext.Provider>
    </HasStartedContext.Provider>
  )
}

export default App;
