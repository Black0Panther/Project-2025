import Todoitem from "./Todoitem"

const Todoitems=({todos,dispatch})=>{
    return <>
    
    {todos.map(todo=>  <Todoitem key={todo.Id}  todoName={todo.Name} todoId={todo.Id} dispatch={dispatch} ></Todoitem> )}
    
    </>
}

export default Todoitems