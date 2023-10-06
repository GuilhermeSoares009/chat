import { Login } from "./pages/Login";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

import "./style.scss"
import { Register } from "./pages/Register";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {currentUser} = useContext(AuthContext);
  const isUserAuthenticated = currentUser !== undefined && currentUser !== null;

 
  const ProtectedRoute = ({children}) => {
    console.log(isUserAuthenticated);
    if (!isUserAuthenticated) {
      return <Navigate  to="/login" />
    }
    return children;
  }

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App;
