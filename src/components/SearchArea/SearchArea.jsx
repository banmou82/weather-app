
// import "./SearchBox.scss";

// function SearchBox({ city, setCity, onSearch }) {
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") onSearch();
//   };

//   return (
//     <div className="search-box">
//       <input
//         type="text"
//         placeholder="Enter city name..."
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         onKeyDown={handleKeyDown}
//       />
//       <button onClick={onSearch}>Search</button>
//     </div>
//   );
// }

// export default SearchBox;


import "./SearchArea.scss";

function SearchArea({ city, setCity, onSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchArea;