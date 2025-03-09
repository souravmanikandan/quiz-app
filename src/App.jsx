import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      const options = {
        method: "GET",
        url: "https://python-quiz-questions.p.rapidapi.com/v1/python_questions",
        params: {
          count: "3",
          difficulty_easy: "true",
          difficulty_medium: "true",
          difficulty_hard: "true",
          type_multiple_choice: "true",
          type_snippets: "true",
          type_text_input: "true",
          topic_python_basics: "true",
          topic_data_types_and_operations: "true",
          topic_data_structures: "true",
          topic_control_flow: "true",
          topic_functions: "true",
          topic_modules_and_packages: "true",
          topic_file_handling: "true",
          topic_object_oriented_programming: "true",
          topic_exception_handling: "true",
          topic_advanced_topics: "true",
        },
        headers: {
          'x-rapidapi-key': '9c6cb9526emsh7f76dba5c4e1b14p1aa4cejsn4484b6a858e2',
          'x-rapidapi-host': 'python-quiz-questions.p.rapidapi.com'
        },
      };

      try {
        const response = await axios.request(options);
        setQuestions(response.data); // Store fetched questions
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load questions. Try again later.");
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Python Quiz</h1>

      {loading && <p>Loading questions...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && questions.length > 0 && (
        <div>
          {questions.map((question, index) => (
            <div key={index} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
              <h3>Q{index + 1}: {question.question}</h3>
              {question.options && (
                <ul>
                  {question.options.map((option, i) => (
                    <li key={i}>{option}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
