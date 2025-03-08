import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({})
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
        setData(result)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once

  const category = data?.requestedFilters?.category || "Loading..."
  const question = data?.question?.question
  const option = data?.question?.answers

  const answerOptions = option?.map(item => {
    return (<li key={item}>
      <input type="radio" id={item} name="contact" value={item} />
      <label htmlFor={item}>{item}</label>
    </li>)
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("hi")
  }


  return (
    <>
      <div>
        <h1>{category}</h1>
        <p>{question}</p>
        <ul>{answerOptions}</ul>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default App;
