import React, { useEffect, useState } from "react";
import {
  Home,
  Bath,
  BedDouble,
  Car,
  StretchHorizontal,
  Eye,
} from "lucide-react";
import "../styles/FeaturedProperties.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { supabase } from "../supabaseclient/SupabaseClient";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleGetProperties = async() => {
    try {
      const {data, error} = await supabase
      .from("properties")
      .select("*")
      .order('current_price', { ascending: false }) 
      if (error) {
        throw new Error("Failed to fetch properties");
      }
      const filterData = data.slice(0, 8)
      setProperties(filterData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleGetProperties();
  }, []);

  return (
    <div className="featured">
      <div className="featuredHeader">
        <h2>Featured Properties</h2>
        <span className="available">
          <Home size={18} />
          6+ Available Properties
        </span>
      </div>

      <div className="featuredGrid">
        <Carousel 
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}   // 3 seconds
          infinite={true}        // required for autoplay
          keyBoardControl={true}
          showDots={true}
        >
          {properties.map((p) => (
            <div className="carouselItem" key={p.id}>
              <div className="propertyCard">
                <div className="propertyImg">
                  <img src={p.images[0]} alt={p.title} />

                  <div className="tags"></div>
                </div>

                <div className="propertyBody">
                  <h3>{p.name}</h3>
                  <p className="location">{p.address}</p>

                  <div className="propertyDetails">
                    <span>
                      <BedDouble size={18} /> {p.beds} Beds
                    </span>
                    <span>
                      <Bath size={18} /> {p.baths} Baths
                    </span>
                    <span>
                      <Car size={18} /> {p.garage} Garage
                    </span>
                    <span>
                      <StretchHorizontal size={18} /> {p.area}
                    </span>
                  </div>

                  <div className="propertyFooter">
                    <h3 className="price">{p.price}</h3>
                    <Eye size={22} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedProperties;
