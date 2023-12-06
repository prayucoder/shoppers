import React from 'react'
import Hero from '../Components/hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/offers/Offers'
import NewCollections from '../Components/newCollections/NewCollections'
import NewsLetter from '../Components/newsLetter/NewsLetter'


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter />
    </div>
  )
}

export default Shop