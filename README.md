# 📊 Lending Club Loan Default Prediction - Neural Network

This project predicts whether a borrower will default on a loan using the Lending Club dataset. It employs a deep learning model built with TensorFlow to classify loans as either fully paid or charged off. The project involves data exploration, cleaning, preprocessing, model training, and creating a prediction API with Flask. The frontend is built with ReactJS, Axios for API integration, and TailwindCSS for styling.

---

## 📂 Dataset

This project uses the Lending Club dataset, which includes various borrower details such as loan amount, interest rate, income, credit score, and other financial metrics. The dataset aims to predict whether a borrower will default or repay the loan.

You can find the dataset on Kaggle or other publicly available sources.

---

## 🔧 Tech Stack

- **Data Analysis & Visualization:** pandas, numpy, matplotlib, seaborn  
- **Modeling:** TensorFlow/Keras  
- **Backend:** Flask (for creating the prediction API)  
- **Frontend:** ReactJS, Axios, TailwindCSS (for building the user interface)

---

## 📁 Project Structure

- **model_training/**  
  Contains the Jupyter notebook for data exploration, preprocessing, and model training.  

- **models/**  
  Contains the saved trained model and scaler.  

- **data/**  
  Contains the original Lending Club dataset file.

- **backend/**  
  Contains the Flask API for serving model predictions.

- **frontend/**  
  ReactJS application with Axios for API integration and TailwindCSS for styling.

- **README.md**  
  Project documentation.

---

## 📊 1. Data Exploration & Visualization

The dataset includes several features like loan amount, interest rate, borrower income, loan grade, and loan status (fully paid or charged off). Data exploration involves:

- Distribution of loan amounts and interest rates
- Correlation heatmap to understand feature relationships
- Visualization of loan status by grade and subgrade
- Checking for missing values and handling them appropriately
- Categorical feature encoding using One-Hot Encoding

---

## 🧑‍🏫 2. Data Preprocessing

Key steps in preprocessing include:

- Handling missing values by imputation or dropping columns
- Dropping irrelevant columns like `emp_title`, `title`, etc.
- Encoding categorical features using One-Hot Encoding (e.g., loan grade, employment length, etc.)
- Scaling numerical features using `MinMaxScaler` to prepare for model training

---

## 🤖 3. Model Training (TensorFlow)

The model is a neural network built using TensorFlow/Keras. It consists of:

- **Input layer:** Features are scaled and passed to the network
- **Hidden layers:** 3 layers with ReLU activation, and Dropout for regularization
- **Output layer:** Sigmoid activation for binary classification (default/no default)

The model is compiled with `binary_crossentropy` loss and optimized using the Adam optimizer.

### Training Process:

- Training on the training set using multiple epochs
- Validation on the test set
- Losses and metrics plotted to evaluate performance

---

## 🧪 4. Model Evaluation

After training, the model's performance is evaluated using:

- **Classification Report:** Precision, recall, F1-score, and support
- **Confusion Matrix:** To visualize the true positives, false positives, etc.

---

## 🌐 5. Flask Backend

The backend is built with **Flask**, which serves the trained model and makes predictions via a RESTful API. The API can take loan application data as input, process it, and return a prediction on whether the loan will default or be repaid.

### Endpoints:

- **POST `/predict`**: This endpoint accepts a JSON request with the loan application details (loan amount, term, interest rate, etc.) and returns a prediction. The model’s output is a class indicating whether the loan will be paid off or defaulted, along with the probability of each outcome.

---

## 💻 6. React Frontend

The frontend is built with **ReactJS**, **Axios** (for API communication), and **TailwindCSS** (for styling).

- The React app allows users to input loan application data (loan amount, term, interest rate, etc.).
- Axios is used to make API requests to the backend (Flask) to get predictions from the trained model.
- TailwindCSS is used for a responsive, clean, and modern user interface.

### Key Features:

- User-friendly form to input loan application data
- Real-time predictions from the model
- Responsive design with TailwindCSS for a seamless user experience

---

## 🚀 Getting Started

1. Clone the repository.
2. Download the Lending Club dataset.
3. Train the model by running the Jupyter notebook in the `model_training/` folder.
4. Save the model and scaler.
5. Start the Flask backend API for serving predictions.
6. Run the React frontend.

Access the application in your browser at `http://localhost:3000`.

---

## 🛠 Technologies Used

| Layer        | Tools                                   |
|--------------|----------------------------------------|
| Data/EDA     | pandas, seaborn, matplotlib            |
| Modeling     | TensorFlow/Keras, Scikit-learn         |
| Backend/API  | Flask, joblib, numpy                   |
| Frontend     | ReactJS, Axios, TailwindCSS            |

---

## 🧪 Sample Prediction

Given an input with features like loan amount, interest rate, income, credit score, etc., the model predicts whether the loan will default or be fully paid back.

The prediction output includes:

- **Predicted Class:** Whether the loan will default (0) or be fully paid (1)
- **Prediction Probability:** The probability of default or repayment, based on the model's confidence
