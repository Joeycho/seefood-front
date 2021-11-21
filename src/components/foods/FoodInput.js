import React, { Component } from 'react';
import "./Foodinput.css"
//import { observer } from 'mobx-react';
//import SimpleInput from '../inputs/SimpleInput';
//import form from '../inputs/form'

class FoodInput extends Component {
  state = {
    name: "",
    price: 0,
    due_date: "1990-01-01",
    comment: "",
    is_anonymous: true,
    is_completed: false,
    is_trashed: false
  }

  handleOnChange = event => {
    if(event.target.id==="name"){
      this.setState({
        ...this.state,
        name: event.target.value
      });
    }
    else if(event.target.id==="price"){
      this.setState({
        ...this.state,
        price: event.target.value
      });
    }
    else if(event.target.id==="price"){
        this.setState({
          ...this.state,
          price: event.target.value
        });
      }
    else if(event.target.id==="due_date"){
    this.setState({
        ...this.state,
        due_date: event.target.value
    });
    }
    else if(event.target.id==="comment"){
    this.setState({
        ...this.state,
        comment: event.target.value
    });
    }
    else if(event.target.id==="is_anonymous"){
    this.setState({
        ...this.state,
        is_anonymous: event.target.value
    });
    }
    else if(event.target.id==="is_completed"){
    this.setState({
        ...this.state,
        is_completed: event.target.value
    });
    }
    else if(event.target.id==="is_trashed"){
    this.setState({
        ...this.state,
        is_trashed: event.target.value
    });
    }
  }

  handleOnSubmit = event => {
    event.preventDefault();

    const food ={
        ...this.state,
        user_id: event.target.getElementsByTagName('select').user.value,
        category_id:event.target.getElementsByTagName('select').category.value
      }
   // this.props.addFood(food);
    this.setState({
        name: "",
        price: 0,
        due_date: "1990-01-01",
        comment: "",
        is_anonymous: true,
        is_completed: false,
        is_trashed: false,
        user_id: event.target.getElementsByTagName('select').user.value,
        category_id:event.target.getElementsByTagName('select').category.value
    });

  }

  componentDidMount() {

    if (this.state.is_anonymous == true){
        document.getElementById("is_anonymous").checked = true
    }
    else if (this.state.is_completed == true){
        document.getElementById("is_completed").checked = true
    }
    else if (this.state.is_trashed == true){
        document.getElementById("is_trashed").checked = true
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
    {/*    
        <SimpleInput field = {form.$('name')} />
        <SimpleInput field = {form.$('price')} />
        <SimpleInput field = {form.$('due_date')} />
        <SimpleInput field = {form.$('comment')} />
    */}
    <table>
    <tr>
    <td>    <label for="name">Name: </label> </td>
    <td>    <input id="name" type="text" onChange={this.handleOnChange} value={this.state.name}></input></td>
    </tr>
    
    <tr>
    <td>    <label for="name">Categories: </label> </td>
    <td>    <button>Vegetables</button><button>Pasta</button><button>Meat</button></td>
    </tr>

    <tr>
    <td>    <label for="price">Price(€): </label></td>
    <td>    <input id="price" type="number" min="0" value="0" step=".01" onChange={this.handleOnChange} value={this.state.price}></input></td>
    </tr>
    <tr>
    <td>    <label for="due_date">Due Date: </label></td>
    <td>    <input id="due_date" type="date" onChange={this.handleOnChange} value={this.state.due_date}></input></td>
    </tr>    
    <tr>
    <td>    <label for="comment">Comment: </label></td>
    <td>    <input id="comment" type="text" onChange={this.handleOnChange} value={this.state.comment}></input></td>
    </tr>
    {/* 
        <label for="own">Owner:</label>
        <select id="own" name="user">
          {this.props.users.map(user => <option value={user.id}>{user.name}</option>)}
        </select>
        <label for="cate">Category:</label>
        <select id="cate" name="category">
          {this.props.categories.map(category => <option value={category.id}>{category.name}</option>)}
        </select>
    */}
    <tr>
    <td>    <label for="is_anonymous">Anonymous:</label></td>
    <td>    <input id="is_anonymous" type="checkbox" onChange={this.handleOnChange} value={this.state.is_anonymous}></input></td>
    </tr>

    <tr>
    <td>    <label for="image">Image: </label> </td>
    <td>    <input type="file" id="image" name="filename"></input></td>
    </tr>
    {/*<tr>
    <td>    <label for="is_completed">Completed:</label></td>
    <td>    <input id="is_completed" type="checkbox" onChange={this.handleOnChange} value={this.state.is_completed}></input></td>
    </tr>    
    <tr>
    <td>    <label for="is_trashed">Trashed:</label></td>
    <td>    <input id="is_trashed" type="checkbox" onChange={this.handleOnChange} value={this.state.is_trashed}></input></td>
    </tr>*/}    
    <tr>
        <td></td>    
        <td><input type="submit" value="Add Order"></input></td>
    </tr>
    </table>
        </form>
      </div>
    );
  }
};



export default FoodInput;
