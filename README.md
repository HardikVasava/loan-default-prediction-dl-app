# 📊 Breast Cancer Prediction

This project predicts whether a tumor is malignant or benign based on various medical features using the Breast Cancer dataset. It employs a machine learning model built with TensorFlow/Keras for binary classification. The project involves data exploration, cleaning, preprocessing, model training, and creating a prediction API with Flask. The frontend is built with ReactJS, Axios for API integration, and TailwindCSS for styling.

## 📂 Dataset

This project uses the Breast Cancer dataset, which contains various features like mean radius, texture, perimeter, area, smoothness, and more. The dataset is used to predict whether the tumor is benign (0) or malignant (1).

You can find the dataset from sources like [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+(Diagnostic)).

## 🔧 Tech Stack

- **Data Analysis & Visualization**: pandas, numpy, matplotlib, seaborn
- **Modeling**: TensorFlow/Keras
- **Backend**: Flask (for creating the prediction API)
- **Frontend**: ReactJS, Axios, TailwindCSS (for building the user interface)

## 📁 Project Structure

- **model_training/**: Contains the Jupyter notebook for data exploration, preprocessing, and model training.
- **models/**: Contains the saved trained model and scaler.
- **data/**: Contains the original Breast Cancer dataset file.
- **backend/**: Contains the Flask API for serving model predictions.
- **frontend/**: ReactJS application with Axios for API integration and TailwindCSS for styling.
- **README.md**: Project documentation.

## 📊 1. Data Exploration & Visualization

The dataset includes several features like mean radius, mean texture, perimeter, area, smoothness, and more. Data exploration involves:

- Distribution of mean radius, texture, area, etc.
- Correlation heatmap to understand feature relationships.
- Visualizing the class distribution (malignant vs benign).
- Checking for missing values and handling them appropriately.
- Categorical feature encoding using one-hot encoding (if necessary).

## 🧑‍🏫 2. Data Preprocessing

Key steps in preprocessing include:

- Handling missing values by imputation or dropping columns.
- Dropping irrelevant columns like ID or name if present.
- Scaling numerical features using MinMaxScaler or StandardScaler.
- Encoding categorical features (if any) using One-Hot Encoding.

## 🤖 3. Model Training (TensorFlow)

The model is built using TensorFlow/Keras. It consists of:

- **Input layer**: Features are scaled and passed to the network.
- **Hidden layers**: 3 layers with ReLU activation, and Dropout for regularization.
- **Output layer**: Sigmoid activation for binary classification (malignant/benign).
  
The model is compiled with binary_crossentropy loss and optimized using the Adam optimizer.

### Training Process:
- Training on the training set using multiple epochs.
- Validation on the test set.
- Losses and metrics plotted to evaluate performance.

## 🧪 4. Model Evaluation

After training, the model's performance is evaluated using:

- **Classification Report**: Precision, recall, F1-score, and support.
- **Confusion Matrix**: To visualize the true positives, false positives, etc.

## 🌐 5. Flask Backend

The backend is built with Flask, which serves the trained model and makes predictions via a RESTful API. The API can take cancer diagnostic data as input and return a prediction on whether the tumor is malignant or benign.

### Endpoints:

- **POST /predict**: This endpoint accepts a JSON request with the cancer diagnostic features (mean radius, mean texture, area, etc.) and returns a prediction. The model’s output is a class indicating whether the tumor is malignant (1) or benign (0), along with the probability of each outcome.

## 💻 6. React Frontend

The frontend is built with ReactJS, Axios (for API communication), and TailwindCSS (for styling).

The React app allows users to input the cancer diagnostic data (mean radius, mean texture, etc.).
Axios is used to make API requests to the backend (Flask) to get predictions from the trained model.
TailwindCSS is used for a responsive, clean, and modern user interface.

### Key Features:
- User-friendly form to input cancer diagnostic data.
- Real-time predictions from the model.
- Responsive design with TailwindCSS for a seamless user experience.

## 🚀 Getting Started

1. Clone the repository.
2. Download the Breast Cancer dataset (if not already included).
3. Train the model by running the Jupyter notebook in the `model_training/` folder.
4. Save the model and scaler.
5. Start the Flask backend API for serving predictions (`python app.py`).
6. Run the React frontend using `npm start`.
7. Access the application in your browser at `http://localhost:3000`.

## 🛠 Technologies Used

| **Layer**     | **Tools**                                    |
|---------------|----------------------------------------------|
| **Data/EDA**  | pandas, seaborn, matplotlib                  |
| **Modeling**  | TensorFlow/Keras, Scikit-learn               |
| **Backend/API**| Flask, joblib, numpy                        |
| **Frontend**  | ReactJS, Axios, TailwindCSS                  |

## 🧪 Sample Prediction

Given an input with features like mean radius, mean texture, area, smoothness, etc., the model predicts whether the tumor is malignant or benign.

### The prediction output includes:
- **Predicted Class**: Whether the tumor is malignant (1) or benign (0).
- **Prediction Probability**: The probability of malignant or benign, based on the model's confidence.
