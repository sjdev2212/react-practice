import {useState} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState(
    [
       {
           id: 1,
           text : 'estudiar',
           day: 'sabado',
           reminder : false
       },
       {
           id: 2,
           text : 'cocinar',
           day: 'lunes',
           reminder : false
       },
       {
           id: 3,
           text : 'limpiar',
           day: 'jueves',
           reminder : false
       },
       {
           id: 4,
           text : 'correr',
           day: 'domingo',
           reminder : true
       }
   ])
   const  addTask = (task) => {
     const id = Math.floor(Math.random() * 10000) + 1;
     const newTask = {id, ...task}
     setTasks([...tasks, newTask])
   }
   const deleteTask = (id) => {
   setTasks(tasks.filter (item => item.id !== id))
    

   }
   const toggleReminder = (id ) => {
     setTasks( tasks.map ((task) => task.id === id ? {...task, reminder : !task.reminder} : task))
   } 
  return (
    <div className="container">
<Header   />
<AddTask onAdd={addTask}/>
<Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>



    </div>
  );
}

export default App;
