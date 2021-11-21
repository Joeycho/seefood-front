import React, { Component } from 'react';
import { connect } from 'react-redux';
import Foods from '../components/foods/Foods';
import {fetchFoods} from '../actions/foodActions';
/*import OwnerInput from '../components/owners/OwnerInput';
import LiveInput from '../components/livecode/LiveInput';
import Owners from '../components/owners/Owners';
import { fetchOwners, createOwner, destroyOwner } from '../actions/ownerActions';*/

class FoodsContainer extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchFoods()
  }

  render() {
    return (
      <div>
       {/* <OwnerInput addOwner={this.props.addOwner}/>
        <LiveInput/> */}
        <Foods foods={this.props.foods}/> {/*deleteOwner={this.props.deleteOwner}/>*/} 
      </div>
    )
  }
}

const mapStateToProps = ({ foods }) => ({ foods })

const mapDispatchToProps = dispatch => ({
  /*addOwner: (name, email) => dispatch(createOwner(name, email)),
  deleteOwner: id => dispatch(destroyOwner(id)),
  fetchOwners: () => dispatch(fetchOwners())*/
  fetchFood: () => dispatch(fetchFoods())
})

//export default connect(mapStateToProps, mapDispatchToProps)(OwnersContainer)
export default connect(mapStateToProps, mapDispatchToProps)(FoodsContainer)