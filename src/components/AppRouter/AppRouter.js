import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home/Home";
import Coffee from "../../pages/Coffee/Coffee";
import Best from "../../pages/Best/Best";
import More from "../../pages/More/More";
import Error from "../../pages/Error/Error";
import Unexistent from "../../pages/Unexistent/Unexistent";
import CoffeeCard from "../../pages/CoffeeCard/CoffeeCard";

const AppRouter = () => {

    const idRand = () => Math.ceil(Math.random() * 1000) * Math.ceil(Math.random() * 1000);

    return (
        <Routes>
            <Route path="*" element={<Unexistent />} exact id={idRand()}/>
            <Route path="/" element={<Home />} exact id={idRand()}/>
            <Route path="/coffee/:id" element={<CoffeeCard/>} exact id={idRand()}/>
            <Route path="/coffee" element={<Coffee />} exact id={idRand()}/>
            <Route path="/best" element={<Best />} exact id={idRand()}/>
            <Route path="/more" element={<More />} exact id={idRand()}/>
            <Route path="/error" element={<Error />} exact id={idRand()}/>
        </Routes>
    );
};

export default AppRouter;