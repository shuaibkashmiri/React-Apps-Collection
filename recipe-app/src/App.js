import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import "./App.css";

const App = () => {
  // State variables
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken"); // Default search query
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Edamam API credentials
  const APP_ID = "608a5989";
  const APP_KEY = "fa8d3a73d11f57d8512273e9f1638da4";
  const USER_ID = "shoaibKashmiri";

  // Fetch recipes from Edamam API
  const fetchRecipes = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset error
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    try {
      const result = await axios.get(url, {
        headers: {
          "Edamam-Account-User": USER_ID, // Include user ID header
        },
      });
      setRecipes(result.data.hits); // Set the fetched recipes
    } catch (err) {
      setError("Failed to fetch recipes. Please try again."); // Handle errors
      console.error(err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Trigger fetchRecipes on query change
  useEffect(() => {
    fetchRecipes();
  }, [query]);

  return (
    <div>
      <Header /> {/* App title or header */}
      <SearchBar setQuery={setQuery} /> {/* Search bar for input */}
      {loading && <p>Loading...</p>} {/* Show loading spinner */}
      {error && <p>{error}</p>} {/* Show error message */}
      <RecipeList recipes={recipes} /> {/* Render list of recipes */}
    </div>
  );
};

export default App;
