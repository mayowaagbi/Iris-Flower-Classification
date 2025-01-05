# Iris Flower Classification Project

This project is a web application that classifies iris flowers based on user-provided sepal and petal dimensions. It utilizes a machine learning model deployed via a FastAPI backend, with a modern React.js frontend.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Deployment](#deployment)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Acknowledgments](#acknowledgments)

## Overview

This project predicts the species of an iris flower (Setosa, Versicolor, or Virginica) using a K-Nearest Neighbors (KNN) classifier. Users input the dimensions of the sepal and petal, and the application predicts the species based on the trained model.

## Features

- User-friendly web interface for inputting flower dimensions.
- Real-time predictions served by a FastAPI backend.
- Secure deployment on Render for both backend and frontend.
- Handles CORS and HTTPS requests seamlessly.

## Tech Stack

### Frontend
- React.js
- Vite
- Axios
- TailwindCSS

### Backend
- FastAPI
- scikit-learn
- Uvicorn
- CORS Middleware

### Deployment
- Render (Frontend and Backend)

## Setup and Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/iris-classification-backend.git
   cd iris-classification-backend
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the backend server:
   ```bash
   uvicorn main:app --reload
   ```

5. Access the backend API at `http://127.0.0.1:8000`.

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd iris-classification-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the frontend at `http://localhost:5173`.

## Deployment

### Backend Deployment on Render
1. Set the root directory to your backend folder.
2. Configure the build command as:
   ```bash
   pip install -r requirements.txt
   ```
3. Configure the start command as:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port $PORT
   ```

### Frontend Deployment on Render
1. Set the root directory to your frontend folder.
2. Configure the build command as:
   ```bash
   npm run build
   ```
3. Set the publish directory to:
   ```
   dist
   ```

## Usage

1. Access the deployed frontend.
2. Enter the dimensions of the sepal and petal into the form.
3. Submit the form to get the prediction of the iris species.

## Future Improvements

- Add support for additional models or datasets.
- Enhance the user interface with animations and tooltips.
- Integrate with a database to store user predictions and logs.
- Add Docker support for easier deployment.

## Acknowledgments

- [scikit-learn](https://scikit-learn.org) for providing the ML tools.
- [FastAPI](https://fastapi.tiangolo.com) for the backend framework.
- [Render](https://render.com) for deployment services.
```

Let me know if you'd like to tweak or expand any section!
