
import React, {useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const pageSize = 9;
  const[progress, setProgress] = useState(0)
  const[mode, setMode] = useState('light')

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(15, 4, 46)'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

    return (
      <div>
        <Router>
          <Navbar mode={mode} toggleMode={toggleMode}/>

          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country='in' category='general' mode={mode}/>}> </Route>
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country='in' category='business' mode={mode}/>}> </Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country='in' category='entertainment' mode={mode} />}>  </Route>
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country='in' category='health' mode={mode} />}> </Route>
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country='in' category='science' mode={mode}/>}> </Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country='in' category='sports' mode={mode}/>}> </Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country='in' category='technology' mode={mode}/>}> </Route>
          </Routes>
        </Router>
      </div>
    )
}

export default App
