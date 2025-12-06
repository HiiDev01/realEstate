import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import Pagination from "../components/Pagination";
import ListingFilter from  "../components/ListingFilter"
import "../styles/Listing.css";
import { supabase } from "../supabaseclient/SupabaseClient";

const Listing = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: "All Categories",
    location: "",
  });
  const productsPerPage = 9;

  const locationHook = useLocation();

  // Parse query params
  const queryParams = new URLSearchParams(locationHook.search);
  const locationParam = queryParams.get("location") || "";
  const propertyTypeParam = queryParams.get("propertyType") || "Any Type";
  const priceRangeParam = queryParams.get("priceRange") || "Any Price";

  const handleFetchProperties = async () => {
    try {
      const { data, error } = await supabase
      .from("properties")
      .select("*");
      if (error) throw error;
      setProperties(data);
    } catch (error) {
      console.log(error.message, "cannot fetch properties");
    }
  };

  useEffect(() => {
    handleFetchProperties();
  }, []);

  useEffect(() => {
    let filtered = [...properties];

    if (propertyTypeParam && propertyTypeParam !== "Any Type") {
      filtered = filtered.filter(
        (p) => p.property_type.toLowerCase() === propertyTypeParam.toLowerCase()
      );
    }

    if (locationParam) {
      filtered = filtered.filter((p) =>
        p.address.toLowerCase().includes(locationParam.toLowerCase())
      );
    }

    if (filters.location || filters.property_type) {
      filtered = filtered.filter((p) =>
        p.address.toLowerCase().includes(filters.location.toLowerCase()) 
      );
    }

    if (priceRangeParam && priceRangeParam !== "Any Price") {
      filtered = filtered.filter((p) => {
        const price = Number(p.current_price);
        switch (priceRangeParam) {
          case "0 - ₦50 Million":
            return price <= 50000000;
          case "₦50 Million - ₦100 Million":
            return price > 50000000 && price <= 100000000;
          case "₦100 Million - ₦500 Million":
            return price > 100000000 && price <= 500000000;
          case "₦500+ Million":
            return price > 500000000;
          default:
            return true;
        }
      });
    }

    setFilteredProperties(filtered);
    setCurrentPage(1);
  }, [properties, locationParam, propertyTypeParam, priceRangeParam, filters]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProperties.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProperties.length / productsPerPage);

  return (
    <div className="listing">
      <ListingFilter onFilter={setFilters}/>
      <section className="property-list-grid">
        {currentProducts.map((p, index) => (
          <PropertyCard key={index} {...p} />
        ))}
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Listing;
