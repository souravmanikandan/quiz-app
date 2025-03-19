import { useEffect, useState } from "react";
import Li from "./Li";

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
    <div className="p-3 max-w-dvw">
      <h1 className="text-green-600 text-4xl mb-6">Quiz Questions</h1>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((question, index) => (
          <div key={index}>
            <h3 className="text-2xl">{index}. {question.question}</h3>
            <ul>
              {Object.entries(question.answers).map(
                ([key, value]) =>
                  value && <Li key={key} value={value} index={index} />
              )}
            </ul>
          </div>
        ))
      )}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  );
}

export default App;
