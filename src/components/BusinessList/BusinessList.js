import  React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'


//business.id? why is this here?
class BusinessList extends React.Component {
  render () {
    return (
    <div className="BusinessList">
      {this.props.businesses.map(business =>
        <Business key={business.id} business={business}/>
      )}
    </div>
  )
  }
}

export default BusinessList;
