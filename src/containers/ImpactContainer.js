import React, { Component } from 'react';
import { connect } from 'react-redux';


class ImpactContainer extends Component {

    state = {
        saved_cal: 1288,
        trashed_cal: 1425
        }


/*  componentDidMount() {
    console.log(this.props)
    this.props.fetchOwners()
  }*/

  render() {
    return (
      <div>
          <p>You saved {Math.round(this.state.saved_cal*5/1000/0.12*100)/100} kilometers driven on car</p>
          <p>You saved {Math.round(this.state.saved_cal*5/1000/90*100)/100} hours of flying on Boeing 737-400</p>
          <p>You saved {Math.round(this.state.saved_cal/1700*100)/100} number of days for feeding one child</p>
          <p className="plus">(saved {this.state.saved_cal} calories)</p>

          <p>You wasted {Math.round(this.state.trashed_cal*5/1000/0.12*100)/100} kilometers driven on car</p>
          <p>You wasted {Math.round(this.state.trashed_cal*5/1000/90*100)/100} hours of flying on Boeing 737-400</p>
          <p>You wasted {Math.round(this.state.trashed_cal/1700*100)/100} number of days for feeding one child</p>
          <p className="minus">(trashed {this.state.trashed_cal} calories)</p>
       {/* <OwnerInput addOwner={this.props.addOwner}/>
        <LiveInput/>
    <Owners owners={this.props.owners} deleteOwner={this.props.deleteOwner}/> */}
      </div>
    )
  }
}

/*const mapStateToProps = ({ owners }) => ({ owners })

const mapDispatchToProps = dispatch => ({
  addOwner: (name, email) => dispatch(createOwner(name, email)),
  deleteOwner: id => dispatch(destroyOwner(id)),
  fetchOwners: () => dispatch(fetchOwners())
})*/

//export default connect(mapStateToProps, mapDispatchToProps)(OwnersContainer)
export default ImpactContainer