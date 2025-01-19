from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import re
import string
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

app = Flask(__name__)
CORS(app, origins=["chrome-extension://bokhgbegobgebdeipbpikhamiklnphmj"])

count_vectorizer = joblib.load('count_vectorizer.joblib')
model = joblib.load('mail_phishing_detection_model.joblib')

stopw = set(stopwords.words('english'))
stemmer = PorterStemmer()

def preprocess_text(text):
    no_punc = ''.join([char for char in text if char not in string.punctuation])
    filtered = ' '.join([word for word in no_punc.split() if word.lower() not in stopw])
    stemmed = ''.join([stemmer.stem(word) for word in filtered])
    return stemmed

def predict_from_model(text):
    
    combined_text = preprocess_text(text)

    new_vectorized = count_vectorizer.transform([combined_text])

    prediction = model.predict(new_vectorized)

    return "True" if prediction[0] == 1 else "False"


@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    email_text = data.get("text", "")
    
    is_threat = predict_from_model(email_text) 
    result = {"isThreat": is_threat, "message": "Analysis complete!"}
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, host="127.0.0.1", port=5000)
