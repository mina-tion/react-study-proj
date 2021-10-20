import React, { useState } from "react"
import City from "./City";
import CitiesList from "./CitiesList";


const App = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const [cities, setCities] = useState([
    {name: "Moskow", description: "capital of Russia"},
    {name: "Kyiv", description: "capital of Ukraine"},
    {name: "Toronto", description: "capital of Ontario"},
    {name: "Tokio", description: "capital of Japan"},])

  const handlerChangeCity = (n, description) => {
    setCities(cities.map((city, index) => {
      if(index === n)
        return {
          ...city,
          description
        }
        return city
    }))
  }

  const handlerSelectCity = (n) => {
    setCurrentIndex(n)
  }

  return(
    <div>

      <City 
        cities={cities} 
        onChangeCity={handlerChangeCity} 
        currentIndex={currentIndex}/>
      <CitiesList 
        cities={cities} 
        onSelectCity={handlerSelectCity}/>
      
    </div>
  ) 

 }
export default App;
