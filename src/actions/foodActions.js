
export const fetchFoods = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_FOODS'})
      fetch('http://127.0.0.1:5001/order/get/all').then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON)
        dispatch({ type: 'ADD_FOODS', foods: responseJSON.data.map(e=>{e.attributes["id"]=e.id;return e.attributes}) })
      })
    }
  }

export const createFood = (name, breed, desc, owner_id, clinic_id) => {
    return (dispatch) => {
     let Food ={
        name: name, 
        breed: breed,
        desc: desc,
        owner_id: owner_id,
        clinic_id: clinic_id
        }  
      dispatch({ type: 'LOADING_FoodS'})
      fetch('http://localhost:3000/Foods',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Food),
      }).then((res) => {
        console.log("Response: ", res)
        debugger
        const id = res.url.split('/').pop()
        const Food ={
            name: name, 
            breed: breed,
            desc: desc,
            owner: {id: owner_id},
            clinic:{id: clinic_id},
            id: id
          }
        dispatch({ type: 'ADD_Food', Food: Food })    
      })    
    }
  }

  export const destroyFood = (id) => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_FoodS'})
      fetch(`http://localhost:3000/Foods/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((res) => {
        
        console.log("Response: ", res)
        dispatch({ type: 'DELETE_Food', id: id })    
      })    
    }
  }