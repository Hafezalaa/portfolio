import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
//import Game from "./Components/Game";
import Layout from "./Components/Layout";
import Technologies from "./Components/Technologies";
import UserData from "./Context/Context";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <UserData>
        <Routes >
          <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="Technologies" element={<Technologies/>}/>
          {/* <Route path="games" element={<Game/>}/> */}
          </Route>
         
        </Routes>
      </UserData>
    </>
  );
}

export default App;
