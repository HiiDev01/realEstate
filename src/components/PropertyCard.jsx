import React, { useState } from "react";
import '../styles/PropertyCard.css';
import { Link } from "react-router-dom";
import {  BedDouble,  Bath,  Car,  Ruler,  Eye,  MapPin} from "lucide-react";



export default function PropertyCard({images,title, delete_price,current_price, name ,address,beds,baths,garage,sqft,oldPrice,newPrice,status1,status2,id}) {


  return (
    <div className="property-card">
      <Link to={`/listing/${id}`}>
      <div className="property-image">
        <img src={images[0]} alt={title} />

        <div className="badges">
          {status1 && <span className="badge">{status1}</span>}
          {status2 && <span className="badge green">{status2}</span>}
        </div>
      </div>

      <div className="property-content">
        <h3>{name}</h3>

        <p className="location">
          <MapPin size={16} /> {address}
        </p>

        <div className="details">
          <span><BedDouble size={18} /> {beds} Beds</span>
          <span><Bath size={18} /> {baths} Baths</span>
          <span><Car size={18} /> {garage} Garage</span>
          <span><Ruler size={18} /> {sqft} sqft</span>
        </div>

        <div className="price-section">
          <span className="old-price">{oldPrice}</span>
          <span className="new-price">{newPrice}</span>
        </div>

        <div className="view-icon">
          <Eye size={18}  style={{color: "var(--text-light)"}}/>
          <div className="priceCon">
            <del>&#8358; {delete_price.toLocaleString()}</del>
            <h3>&#8358; {current_price.toLocaleString()}</h3>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

