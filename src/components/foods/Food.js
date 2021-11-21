import React, { Component } from 'react';
import { connect } from 'react-redux';

class Food extends Component {


  render() {
   
    const {food, owners, categories} = this.props;
    return (
      <div>
        <li>
          Name: {food.food_name}, Price: {Food.price}, Due Date: {Food.due_date}, Comment: {food.comment} 
   {/*     User: {(users.length!==0)?owners.filter(owner=> parseInt(owner.id) === parseInt(Food.owner_id)).full_name:"Loading"} 
          Category:{(categories.length!==0)?categories.filter(category=> parseInt(Category.id) === parseInt(Food.category_id)).category_name:"Loading"} */}
          <button onClick={(event) => {event.preventDefault();this.props.deleteFood(parseInt(Food.id))}}> X </button>
        </li>
      </div>
    );
  }
};

const mapStateToProps = ({owners, categories }) => ({owners, categories })

export default connect(mapStateToProps, null)(Food);
