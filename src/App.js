import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import "./style.css";
import { List } from "./context";
import AppRouter from "./components/AppRouter/AppRouter";
// import arr from "./db.json";



function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [coffeeList, setCoffeeList] = useState(arr);
  const [coffeeList, setCoffeeList] = useState([]);

  const getCoffeeList = async () => {
    setIsLoading(true);
    
      let response = await fetch("./db.json")
      .then((res) => res.json())
      .then((data) => setCoffeeList(data))
      .catch((e) => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      })

  return response;
  };

  useEffect(() => {
    getCoffeeList();
  }, []);
//    console.log(coffeeList)

  return (
    <div className="App">
      <List.Provider value={{
        isLoading,
        setIsLoading,
        error,
        setError,
        coffeeList
      }}>
        <BrowserRouter> 
          <AppRouter />
        </BrowserRouter>
      </List.Provider> 
    </div>
  );
}

export default App;
