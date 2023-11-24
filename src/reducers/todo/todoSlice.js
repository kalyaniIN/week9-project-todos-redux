import {createSlice} from "@reduxjs/toolKit";

//  const initialState = {
//      todoListItems : [
//         { id: 1, text: 'Watch video on actions & reducers', complete:   true },
//         { id: 2, text: 'Follow redux codealong', complete: true },
//         { id: 3, text: 'Fork weekly assignment', complete: true },
//         { id: 4, text: 'Create a todo app', complete: false },
//       ],
//      total:0,
//      isLoading : true
//  }

const todoSlice = createSlice({
    name:"todo",
    initialState: {
        todoListItems : [ ],
        visibilityFilter: "all"
    },
    reducers : {
        addListItem : (state,action) => {
            state.todoListItems.push(
                {
                    id: state.todoListItems.length + 1,
                    text: action.payload,
                    complete: false,
                  });
        },
        removeListItem : (state , action )=>{

           state.todoListItems = state.todoListItems.filter((todo)=>todo.id !== action.payload) ;
                },
        toggleComplete: (state, action) => {
                    state.todoListItems = state.todoListItems.map((todo) =>
                      todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo
                    );
                  },
        
        clearList:(state) => {
            state.todoListItems = [];
        }

    }
})

export const {addListItem , removeListItem ,toggleComplete,clearList} = todoSlice.actions;

export default todoSlice.reducer;