import { useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRamdonLocation'
import MainContent from './components/MainContent'
function App() {

  const [inputValue, setInputValue] = useState(getRandomLocation())

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, hasError] = useFetch(url)

  const inputLocation = useRef()

  const handleSumit = event => {
    event.preventDefault()
    setInputValue(inputLocation.current.value)
  }
  // btn
  function handleClick() {
    if (clicked) {
      setBgColor('rgb(125, 199, 14)');
      setClicked(false);
    } else {
      setBgColor('green');
      setClicked(true);
    }
  }

  return (
    <div className="App">
      <img className='app_img'  src="./rickandmorty.jpg" alt="Rick And Morty" />
      <form className='app_form' onSubmit={handleSumit}>
        <input className='app_input' ref={inputLocation} type="number" min="1" required/>
        <button  
      onClick={handleClick} className='app_btn'>Search</button>
      </form>
      {
        hasError
        ? <h2 className='app_error'>❌Hey!!! you must provide an id from 1 to 126 😖</h2>
        :  <MainContent location={location}/>
      }
    
    </div>
  )
}
export default App
