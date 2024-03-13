import { BrowserRouter } from "react-router-dom";

import "./style.css";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {

  return (
    <div className="App">
        <BrowserRouter> 
          <AppRouter />
        </BrowserRouter>
    </div>
  );
}

export default App;
