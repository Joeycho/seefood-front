export default function manageFoods(state = [], action) {

    switch (action.type) {
  
    case 'LOADING_FOODS':
    
        console.log("Loading:::")
        return  state

    case 'ADD_FOODS':
        return  action.foods  
  
    case 'ADD_FOOD':
        return  state.concat(action.food)
  
    case 'DELETE_FOOD':
        return state.filter(food => parseInt(food.id) !== parseInt(action.id))
  
    default: 
        return state;
    }
}
