import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import TaskList from './Components/TaskList'
import Right_sidebar from './Components/Right_sidebar'
function App() {
 
  const [item,setitem] = useState([]);

  const onNewItem=(itemName)=>{
      const newItem = [...item,{Name:itemName}]
      setitem(newItem)
  }
  return (
    <>
    <div className="main_container">
    <Navbar></Navbar>
      <div className="main_content">
      <Sidebar></Sidebar>
      <TaskList onNewItem={onNewItem} item={item}></TaskList>
      <Right_sidebar></Right_sidebar>
      </div>
      </div>
    </>
  )
}

export default App
