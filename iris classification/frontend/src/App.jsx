import React, { useState } from "react";
import axios from "axios";

function App() {
  // State to store input values and prediction
  const [formData, setFormData] = useState({
    sepalLength: "",
    sepalWidth: "",
    petalLength: "",
    petalWidth: "",
  });
  const [prediction, setPrediction] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      sepal_length: parseFloat(formData.sepalLength),
      sepal_width: parseFloat(formData.sepalWidth),
      petal_length: parseFloat(formData.petalLength),
      petal_width: parseFloat(formData.petalWidth),
    };

    try {
      const response = await axios.post(
        "https://iris-flower-classification-ni78.onrender.com/predict/",
        data
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error during prediction:", error);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Iris Flower Classification</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-field">
            <label>Sepal Length (cm):</label>
            <input
              type="number"
              name="sepalLength"
              value={formData.sepalLength}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label>Sepal Width (cm):</label>
            <input
              type="number"
              name="sepalWidth"
              value={formData.sepalWidth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label>Petal Length (cm):</label>
            <input
              type="number"
              name="petalLength"
              value={formData.petalLength}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label>Petal Width (cm):</label>
            <input
              type="number"
              name="petalWidth"
              value={formData.petalWidth}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Predict
          </button>
        </form>

        {prediction && (
          <div className="prediction">
            <h2>Prediction: {prediction}</h2>
          </div>
        )}
      </div>
      <footer className="footer">By Agbi Olumayowa Olufemi</footer>
    </>
  );
}

export default App;
