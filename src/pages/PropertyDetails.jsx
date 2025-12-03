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
      <div className="property-details-image">
        <img src={property.images[0]} alt={property.name} />
      </div>

      <div className="property-details-content">
        <h1>{property.name}</h1>

        <p className="pd-location">
          <MapPin size={18} /> {property.address}
        </p>

        <div className="pd-details-grid">
          <span><BedDouble size={20} /> {property.beds} Bedrooms</span>
          <span><Bath size={20} /> {property.baths} Bathrooms</span>
          <span><Car size={20} /> {property.garage} Garage</span>
          <span><Ruler size={20} /> {property.sqft} sqft</span>
        </div>

        <div className="pd-price-section">
          <p className="old-price">{property.oldPrice}</p>
          <p className="new-price">{property.newPrice}</p>
        </div>

        <p className="pd-description">
          {property.description || "No description available."}
        </p>
      </div>

      <ContactAgent propertyName={property.name}/>
    </div>
  );
};

export default PropertyDetails;
