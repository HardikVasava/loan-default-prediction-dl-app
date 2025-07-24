import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [inputData, setInputData] = useState({
    loan_amnt: 15000,
    term: 36,
    int_rate: 13.56,
    installment: 512.34,
    annual_inc: 7500000,
    dti: 17.45,
    earliest_cr_line: 2005,
    open_acc: 10,
    pub_rec: 0,
    revol_bal: 8500,
    revol_util: 47.8,
    total_acc: 29,
    mort_acc: 2,
    pub_rec_bankruptcies: 0,
    A2: 0, A3: 0, A4: 0, A5: 0,
    B1: 0, B2: 0, B3: 1, B4: 0, B5: 0,
    C1: 0, C2: 0, C3: 0, C4: 0, C5: 0,
    D1: 0, D2: 0, D3: 0, D4: 0, D5: 0,
    E1: 0, E2: 0, E3: 0, E4: 0, E5: 0,
    F1: 0, F2: 0, F3: 0, F4: 0, F5: 0,
    G1: 0, G2: 0, G3: 0, G4: 0, G5: 0,
    verification_status_Source_Verified: 0,
    verification_status_Verified: 1,
    application_type_INDIVIDUAL: 1,
    application_type_JOINT: 0,
    initial_list_status_w: 1,
    purpose_credit_card: 0,
    purpose_debt_consolidation: 1,
    purpose_educational: 0,
    purpose_home_improvement: 0,
    purpose_house: 0,
    purpose_major_purchase: 0,
    purpose_medical: 0,
    purpose_moving: 0,
    purpose_other: 0,
    purpose_renewable_energy: 0,
    purpose_small_business: 0,
    purpose_vacation: 0,
    purpose_wedding: 0,
    OTHER: 0,
    OWN: 0,
    RENT: 1,
    "05113": 0,
    "11650": 0,
    "22690": 0,
    "29597": 0,
    "30723": 1,
    "48052": 0,
    "70466": 0,
    "86630": 0,
    "93700": 0,
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fields = [
    { name: "loan_amnt", label: "Loan Amount" },
    { name: "term", label: "Term (Months)" },
    { name: "int_rate", label: "Interest Rate (%)" },
    { name: "installment", label: "Monthly Installment" },
    { name: "annual_inc", label: "Income ($)" },
    { name: "dti", label: "DTI (%)" },
    { name: "earliest_cr_line", label: "Earliest Credit Line" },
    { name: "open_acc", label: "Open Accounts" },
    { name: "pub_rec", label: "Public Records" },
    { name: "revol_bal", label: "Revolving Balance" },
    { name: "revol_util", label: "Utilization (%)" },
    { name: "total_acc", label: "Total Accounts" },
    { name: "mort_acc", label: "Mortgage Accounts" },
    { name: "pub_rec_bankruptcies", label: "Bankruptcies" },
  ];

  const handleChange = ({ target: { name, value } }) => {
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setPrediction(null);

    if (inputData.loan_amnt <= 0 || inputData.annual_inc <= 0) {
      setError("Loan amount and income must be positive.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", inputData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setPrediction(response.data);
      }
    } catch (err) {
      setError("Network error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Lending Club</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {fields.map(({ name, label }) => (
              <div key={name}>
                <label htmlFor={name} className="text-sm font-medium text-gray-600">{label}</label>
                <input
                  id={name}
                  type="number"
                  name={name}
                  value={inputData[name]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 bg-gray-600 text-white py-3 rounded-md text-sm font-semibold hover:bg-gray-700 transition-all duration-200"
              disabled={loading}
            >
              {loading ? "Predicting..." : "Predict"}
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-6 text-center text-red-600 text-sm">
            <p>{error}</p>
          </div>
        )}

        {prediction && (
          <div className="mt-6 p-6 bg-gray-100 rounded-md">
            <h3 className="font-semibold text-lg text-gray-800">Prediction Result</h3>
            <p className="mt-2 text-sm text-gray-700">
              Predicted Class:{" "}
              {prediction.predicted_class === 1 ? "Fully Paid" : "Charged Off"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
