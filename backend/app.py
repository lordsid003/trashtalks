from flask import Flask, request, jsonify
from dotenv import load_dotenv
from main import asian_mode_chain, white_mode_chain
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
@app.route("/home", methods=["GET"])
def home():
    return """
        <h1>Trashtalks bot server</h1>
        <p> Functionally dysfunctional chatbot</p>
        <p>Get roasted in 2 modes: <p>
        <ul>
            <li>Asian Mode: Steven He</li>
            <li>White Mode: Gordon Ramsay</li>
        </ul>
    """

@app.route("/chat/asian-mode", methods=["GET", "POST"])
def asian_mode_chat():
    message: str = request.json.get("message")
    if not message:
        return jsonify({"error": "Missing idea parameter"}), 400
    
    response = asian_mode_chain(message)
    return jsonify({"response": response}), 200

@app.route("/chat/white-mode", methods=["GET", "POST"])
def white_mode_chat():
    message: str = request.json.get("message")
    if not message:
        return jsonify({"error": "Missing idea parameter"}), 400
    
    response = white_mode_chain(message)
    return jsonify({"response": response}), 200

if __name__ == "__main__":
    app.run(debug=True, port=8000)
