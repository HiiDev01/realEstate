import React from 'react'
import Hero from '../components/Hero'
import Us from '../components/Us'
import FeaturedProperties from '../components/FeaturedProperties'
import WhyChooseUs from '../components/WhyChooseUs'
import Service from '../components/Service'
import JoinInvest from '../components/JoinInvest'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <Us/>
      <FeaturedProperties/>
      <WhyChooseUs/>
      <Service/>
      <JoinInvest/>
      <Categories/>
    </div>
  )
}

export default Home
