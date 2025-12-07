from flask import Flask, request, send_file, jsonify
from generate.py import generate_kolam
import os

app = Flask(__name__)

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    
    if not data or "prompt" not in data:
        return jsonify({"error": "Prompt is required"}), 400
    
    prompt = data["prompt"]

    try:
        file_path = generate_kolam(prompt)
        return send_file(file_path, mimetype="image/png")
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/", methods=["GET"])
def home():
    return {"status": "Kolam Generator API running!"}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
