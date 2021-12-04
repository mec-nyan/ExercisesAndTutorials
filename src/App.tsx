import './App.css'
import { FaAngleDoubleLeft } from 'react-icons/fa'

function App() {

  const next = () => console.log('NEXT')
  const prev = () => console.log('PREVIOUS')

  const n = e => console.log('PAGE', e.target.innerText)

  return (
    <div className="App">
      <div 
        id='myDiv1'
        onClick={n}
        style={{width:'100px',height:'100px',background:'red',fontSize:'60px'}}
      >
        1
      </div>
      <div 
        id='myDiv1'
        onClick={n}
        style={{width:'100px',height:'100px',background:'magenta',fontSize:'60px'}}
      >
        2
      </div>
      <div 
        id='myDiv1'
        onClick={n}
        style={{width:'100px',height:'100px',background:'green',fontSize:'60px'}}
      >
        3
      </div>

      <div 
        id='myDiv1'
        onClick={next}
        style={{width:'100px',height:'100px',background:'red',fontSize:'60px'}}
      >
        <FaAngleDoubleLeft 
          id='faangle'
          style={{background:'white'}}
        />
      </div>

      <div 
        id='myDiv2'
        onClick={prev}
        style={{width:'100px',height:'100px',background:'blue',fontSize:'60px'}}
      >
        <FaAngleDoubleLeft 
          id='faangle2'
          style={{background:'white'}}
        />
      </div>

    </div>
  )
}

export default App
