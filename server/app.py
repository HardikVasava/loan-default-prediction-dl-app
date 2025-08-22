from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import joblib
import numpy as np
import pandas as pd

model = load_model('../model_training/models/lending_club_model.keras')
scaler = joblib.load('../model_training/models/lending_club_scaler.pkl')

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "Lending Club Prediction API is live!"})

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    if not data:
        return jsonify({'error': 'No input data provided'}), 400

    try:
        feature_order = ['loan_amnt', 'term', 'int_rate', 'installment', 'annual_inc', 'dti', 'earliest_cr_line',
                         'open_acc', 'pub_rec', 'revol_bal', 'revol_util', 'total_acc', 'mort_acc',
                         'pub_rec_bankruptcies', 'A2', 'A3', 'A4', 'A5', 'B1', 'B2', 'B3', 'B4', 'B5',
                         'C1', 'C2', 'C3', 'C4', 'C5', 'D1', 'D2', 'D3', 'D4', 'D5', 'E1', 'E2', 'E3', 'E4', 'E5',
                         'F1', 'F2', 'F3', 'F4', 'F5', 'G1', 'G2', 'G3', 'G4', 'G5',
                         'verification_status_Source Verified', 'verification_status_Verified',
                         'application_type_INDIVIDUAL', 'application_type_JOINT', 'initial_list_status_w',
                         'purpose_credit_card', 'purpose_debt_consolidation', 'purpose_educational',
                         'purpose_home_improvement', 'purpose_house', 'purpose_major_purchase',
                         'purpose_medical', 'purpose_moving', 'purpose_other', 'purpose_renewable_energy',
                         'purpose_small_business', 'purpose_vacation', 'purpose_wedding',
                         'OTHER', 'OWN', 'RENT',
                         '05113', '11650', '22690', '29597', '30723', '48052', '70466', '86630', '93700']

        applicant = pd.DataFrame([data])
        applicant = applicant.reindex(columns=feature_order, fill_value=0)

        applicant_scaled = scaler.transform(applicant)

        prediction = model.predict(applicant_scaled)
        predicted_class = int(np.ravel(prediction)[0])

        if hasattr(model, 'predict_proba'):
            prediction_proba = model.predict_proba(applicant_scaled)
            return jsonify({
                "predicted_class": predicted_class,
                "probability_default": float(prediction_proba[0][0]),
                "probability_repaid": float(prediction_proba[0][1])
            })
        else:
            return jsonify({"predicted_class": predicted_class})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
