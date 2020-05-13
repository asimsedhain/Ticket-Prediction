import numpy as np
import pandas as pd
from sklearn.externals import joblib
from flask import Flask, abort, jsonify, request, render_template, send_from_directory

app = Flask(__name__)

loaded_model = joblib.load("model.pkl")
dic = joblib.load("dic.pkl")

@app.route('/', methods = ["POST"])
def make_predict():
	data = request.get_json(force = True)
	text = pd.Series([data["text"]])
	print(data)
	prediction = loaded_model.predict(text)
	cat = dic[prediction[0]]
	print(cat)
	return jsonify(result = cat)



@app.route('/', methods = ["GET"])
def send():
	return send_from_directory("","index.html")

@app.route('/script.js', methods = ["GET"])
def script():
	return send_from_directory("", "script.js")

if __name__ == "__main__":
	app.run(port=9000)