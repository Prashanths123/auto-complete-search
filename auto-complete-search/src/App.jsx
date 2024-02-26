import { useState } from 'react'
import './App.css'
import countryData from '../resources/countryData.json'

function App() {
  const [filteredData, setFilteredData] = useState([])

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue !== "") {
      const newData = countryData.filter(item => item.name.toLowerCase().startsWith(inputValue.toLowerCase()))
      setFilteredData(newData)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      console.log("Escape");
      setFilteredData([]);
    }
  }

  return (
    <>
      <h1>Search</h1>
      <input type="text" onChange={handleInputChange} onKeyDown={handleKeyDown} />
      <button type='search'>Search</button>
      {filteredData.map((item, i) => (
        <div key={i}>
          <div className='infocontainer'>
            <p>{item.name}</p>
            <p>{item.code}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default App
