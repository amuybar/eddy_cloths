import React, { useState } from 'react';
import Header from './components/Header'; 
import SearchBar from './components/SearchBar'; 
import ProductList from './components/ProductList'; 
import Footer from './components/Footer'; 

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [searchResults, setSearchResults] = useState([]); 

  const handleSearch = (term) => {
    setSearchTerm(term);
    
    const filteredResults =[];
    setSearchResults(filteredResults);
  };

  return (
    <div className="search">
      <Header />
      <SearchBar onSearch={handleSearch} /> {/* Search bar component */}
      <ProductList products={searchResults} /> {/* Display search results */}
      <Footer />
    </div>
  );
};

export default Search;
