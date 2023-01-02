import { useReducer } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { globalReducer } from './common/reducer/GlobalContextReducer'
import Kbo from './components/kbo/Kbo'
import Lol from './components/lol/Lol'
import Navbar from './components/nav/Navbar'
import Nba from './components/nba/Nba'
import { GlobalContext, INITIAL_GLOBAL_CONTEXT, SetGlobalContext } from './context/GlobalContext'
import './layout.scss'

function App() {
  const [state, dispatch] = useReducer(globalReducer, INITIAL_GLOBAL_CONTEXT)

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={state}> 
        <SetGlobalContext.Provider value={dispatch}>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Kbo />}/>
              <Route path="/lol" element={<Lol />}/>
              <Route path="/nba" element={<Nba />}/>
            </Routes>
          </div>
        </SetGlobalContext.Provider>
      </GlobalContext.Provider>
    </BrowserRouter>
  )
}

export default App
