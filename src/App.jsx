import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]); // Use an array to store quiz questions
  const url = "https://quizapi.io/api/v1/questions?limit=5"; // Fetch 5 questions
  const API_KEY = "20bmmOtrSfLdEmBn457DxaTbyT2uxC5Z6OirswaD";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "X-Api-Key": API_KEY, // Include API key in headers
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        console.log("result", result);
        setData(result); // Store questions in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-3">
      <h1>Quiz Questions</h1>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((question, index) => (
          <div key={index}>
            <h3>{question.question}</h3>
            <ul>
              {Object.entries(question.answers).map(
                ([key, value]) =>
                  value && (
                    <li key={key}>
                      <input type="radio" id={key} name={`q${index}`} value={value} />
                      <label htmlFor={key}>{value}</label>
                    </li>
                  )
              )}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
