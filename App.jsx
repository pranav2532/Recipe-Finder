import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import Restaurent_List_Top from "./Restro_List_Top";
import How_It_Works from "./How_It_works";
import Footer from "./Footer";
import RestaurantDetails from "./RestaurantDetails";
import SignupForm from "./Sign_Up_Form";
import RestaurantList from "./RestaurantList ";
import TableReserve from "./Table_Reserve_Form";
import Profile from "./User_Profile";
import Login from "./User_Login";
import Confirmation from "./Confirmation";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Introduction />
          <Restaurent_List_Top />
          <How_It_Works />
          <Footer />
        </>} />
        <Route path="/restro_detail" element={<RestaurantDetails/>}/>
        <Route path="/sign_up" element={<SignupForm/>}/>
        <Route path="/RestaurantList" element={<RestaurantList/>}/>
        <Route path="/signup" element={<SignupForm/>}/>
        <Route path="/tablereserve" element={<TableReserve/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/confirmation" element={<Confirmation/>}/>
      </Routes>
    </Router>
  )
}

export default App
