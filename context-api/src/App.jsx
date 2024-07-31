import Login from './components/Login'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
function App() {
 

  return (
    <UserContextProvider>
     <h1>context API</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
