
import Login from "./componets/Login"
import Profile from "./componets/Profile"
import UserContextProvider from "./context/UserContextProvider"
import "./App.css"




function App() {
 
  return (
    <UserContextProvider>
      
      <h1>hello everyone </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
