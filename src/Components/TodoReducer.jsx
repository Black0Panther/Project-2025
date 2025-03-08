const TodoReducer=(state,action)=>{

 switch (action.type){
    case "Add":
        return [...state,{Id:Date.now() , Name:action.payload}]

    case "Remove":
        return state.filter(todo=> todo.Id != action.payload)    
    default:
      return state;    
 }
};

export default TodoReducer