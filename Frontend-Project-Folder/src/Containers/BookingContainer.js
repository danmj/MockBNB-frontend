import React, { Component } from 'react'
import ListingCard from '../Components/ListingCard.js';
import BookingDetails from '../Components/BookingDetails.js';

class BookingContainer extends Component {
  render() {
    return(
      <div>
      <BookingDetails />
        <ListingCard />
      </div>
    )
  }
}

export default BookingContainer