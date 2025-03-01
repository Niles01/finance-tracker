from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS  # Allow frontend requests

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:@localhost/finance_tracker"
db = SQLAlchemy(app)

class Finance(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(300), nullable=True)
    amount = db.Column(db.Integer, nullable=True)

@app.route('/add_amount', methods=['POST'])
def add_amount():
    data = request.json  # Get JSON data from frontend
    amount = data.get('amount')

    if not amount:
        return jsonify({"error": "Amount is required"}), 400

    entry = Finance(amount=amount)
    db.session.add(entry)
    db.session.commit()

    return jsonify({"message": "Amount added", "amount": amount})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
