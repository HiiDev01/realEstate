import React from 'react'
import imgBg from '../assets/bg3.jpg';
import '../styles/Us.css'

const Us = () => {
  const usInfo = [
    {number: "50+", text: "Properties Sold"},
    {number: "10+", text: "year of experience"},
    {number: "100+", text: "Happy Clients"},
    {number: "5+", text: "Awards won"}
  ]

  return (
    <div className='us'>
      <div className='usItem'>
        <img src={imgBg} alt={imgBg.name}/>
      </div>
      <div className='usItem'>
        <div className='usItemDet'>
          <h2>About UrbanHaven Homes</h2>
          <p>
            At UrbanHaven, we specialize in luxury real estate investments, offering tailored 
            solutions for buyers, investors, and retirees. Our mission is to provide top-tier properties with integrity, expertise, and unmatched service.
          </p>
        </div>
        <div className='usStats'>
          {usInfo.map((info, i)=>(
            <div className='usStatItem ' key={i}>
              <h2>{info.number}</h2>
              <p>{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Us
