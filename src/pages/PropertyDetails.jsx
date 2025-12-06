import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/PropertyDetails.css";
import { BedDouble, Bath, Car, Ruler, MapPin } from "lucide-react";
import { supabase } from "../supabaseclient/SupabaseClient";
import ContactAgent from "../components/ContactAgent ";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("id", id)
        .single(); // Get one record

      if (error) {
        console.log(error);
      } else {
        setProperty(data);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Property Not Found</h2>;
  }

  return (
    <div className="property-details-container">
      <div className="singlePropNav">
        <div className="detNav">
          <div className="detNavmin">
            <div className="detNavmain">
              <a href="/">Home</a> /
              <a href="/listing">property</a> /
              <p>{property.name}</p>
            </div>
            <h1 className="propertyName">{property.name}</h1>
          </div>
          <div className="pd-price-section">
            <p className="old-price">&#8358;{property.delete_price}</p>
            <p className="new-price">&#8358;{property.current_price}</p>
          </div>
        </div>
      </div>
      <div className="property-details-image">
        {property.images.slice(0,6).map((img, i)=> (
          <img src={img} alt={`property-${i}`} key={i} className="propertyImg"/>
        ))}
      </div>

      <div className="propertyDetWrapper">
        <div className="property-details-content">
          <h2 className="propAbt">About</h2>
          <p className="pd-location">
            <MapPin size={18} /> {property.address}
          </p>
  
          <div className="pd-details-grid">
            <span><BedDouble size={30} /> {property.beds} Bedrooms</span>
            <span><Bath size={30} /> {property.baths} Bathrooms</span>
            <span><Car size={30} /> {property.garage} Garage</span>
            <span><Ruler size={30} /> {property.sqft} sqft</span>
          </div>
  
          <p className="pd-description">
            {property.description || "No description available."}
          </p>
          <h2 className="propAbt">Most Popular Facilities</h2>
          <ul className="amenity">
            {property.amenities.map((amenity, i)=>(
              <li key={i}>{amenity}</li>
            ))}
          </ul>
        </div>
  
        <div className="AgentWrapper">
          <ContactAgent propertyName={property.name}/>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
