import React, { Component } from 'react';
import Food from './Food';

class Foods extends Component {

  render() {
    debugger
    return(
      <ul>
      {this.props.foods.map((food) => <Food key={food.id} food={food}/>) } 
      
      {/*deleteFood={this.props.deleteFood}/>)*/}
      </ul>
    );
  }
};

export default Foods;