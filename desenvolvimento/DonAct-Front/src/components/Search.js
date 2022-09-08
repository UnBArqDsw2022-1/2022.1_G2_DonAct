import React from "react";
import "../styles/search.css";
const Search = ({fuction,text }) => {
  return (
    <div>
      <input className="search-bar search" 
      type="text"
      name="search" 
      placeholder={text} 
      placeholderTextColor="#482728"/>
    </div>
  );
};

export default Search;
