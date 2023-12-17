import TopSection from "./Components/TopSection";
import FoodCards from "./FoodCards";
import { useEffect, useState } from "react";


export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const[filteredData, setFilteredData]= useState(null);  
 
  const searchFood = (e) => {
    const searchValue = e.target.value.toLowerCase();
    // If searchValue is an empty string, set filteredData to null
    if (searchValue === "") {
      setFilteredData(null);
    } else {
      // Use filter to find items that match the searchValue
      const filteredItems = data.filter(
        (item) => item.name.toLowerCase().includes(searchValue)
      );
      // Update filteredData state with the filtered items
      setFilteredData(filteredItems);
    }
  };
  


  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        setLoading(true);

        const response = await fetch(BASE_URL);
        const json = await response.json();
        
        setData(json);

        setFilteredData(json);
        

        setLoading(false);
      } catch (error) {
        setError("Unable to fetch Data");
        setLoading(false);
      }
    };

    fetchFoodData();
  
  }, []); 
  console.log(data);

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading.....</div>;

  return (
    <>
      <div>
        <TopSection  searchFood={searchFood}/>
        {/* Pass 'data' to the FoodCards component */}
        <FoodCards data={filteredData} />
      </div>
    </>
  );
}

export default App;
