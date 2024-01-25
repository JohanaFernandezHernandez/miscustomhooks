

export const todoReducer = (inicialState= [], action) => {

    const {type, payload} = action;

    switch (type) {
        case 'Add TODO':
                return[...inicialState, payload];
        
        case 'Remove TODO':
               return inicialState.filter( todo => todo.id !== payload );

        case 'Change TODO':
            return inicialState.map( todo => {

                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
    
        default:
            return inicialState;
    }
    
}