import { useEffect } from "react";

function App() {
  const url =
    "https://quizmania-api.p.rapidapi.com/trivia-filtered?category=geography&difficulty=easy";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9c6cb9526emsh7f76dba5c4e1b14p1aa4cejsn4484b6a858e2",
      "x-rapidapi-host": "quizmania-api.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const result = await response.json(); // Use .json() for structured data
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once

  return (
    <>
      <h1 className="bg-amber-900">Hello World!</h1>
    </>
  );
}

export default App;
