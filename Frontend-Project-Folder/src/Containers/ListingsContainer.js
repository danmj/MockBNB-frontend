import React, { Component } from 'react'
import ListingCard from '../Components/ListingCard.js';

class ListingsContainer extends Component {

  renderListingCards = () => {
    if (this.props.searchObj.city && this.props.searchObj.guests) {
      const searchResults = this.props.listingData.filter(listing => {
        return listing.max_occupants >= this.props.searchObj.guests && listing.city === this.props.searchObj.city
      })
      return searchResults.map((listing) => {
        return <ListingCard key={listing.id} listing={listing} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking}/>
      })
    }
    else if (this.props.searchObj.city) {
      const searchResults = this.props.listingData.filter(listing => {
        return listing.city === this.props.searchObj.city
      })
      return searchResults.map((listing) => {
        return <ListingCard key={listing.id} listing={listing} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking}/>
      })
    }
    else if (this.props.searchObj.guests) {
      const searchResults = this.props.listingData.filter(listing => {
        return listing.max_occupants >= this.props.searchObj.guests
      })
      return searchResults.map((listing) => {
        return <ListingCard key={listing.id} listing={listing} toggleFavorite={this.props.toggleFavorite} handleBooking={this.props.handleBooking}/>
      })
    }
  }

  render() {
    return(
        <div class="listings">
          {this.renderListingCards()}
        </div>
    )
  }
}

export default ListingsContainer
