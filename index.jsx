import React from 'react'
import ReactDOM from 'react-dom/client'
import componentsExample from "./components-example.jsx"
import githubIcon from "./icons/GitHub.png"

function App() {
  return (
    <>
      <div className="header">
        <h1>Component Library</h1>
        <a href="#"><img src={githubIcon} /></a>
      </div>
      {componentsExample}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);