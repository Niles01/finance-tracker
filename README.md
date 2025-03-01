# 📊 Finance Tracker App

Finance Tracker is a web application that helps users manage their income and expenses efficiently. It provides a user-friendly interface to add transactions, track savings, and view financial summaries.

## 🚀 Features
- 📌 User Authentication using **Clerk**
- 💰 Track **Income & Expenses**
- 🏦 Calculate **Savings**
- 📩 Fetch **User Details** (Name, Email, Phone)
- 🔄 **Flask API** Backend for Storing Transactions
- 📊 Dynamic UI with **React & TailwindCSS**

## 🛠 Tech Stack
### **Frontend**:
- React.js (Vite)
- Clerk Authentication
- TailwindCSS
- Axios (for API requests)
- Lucide React Icons

### **Backend**:
- Flask (Python)
- Flask-SQLAlchemy (Database)
- Flask-CORS (for API access)
- MySQL (Database Storage)

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/niles01/finance-tracker.git
cd finance-tracker
```

### **2️⃣ Backend Setup (Flask API)**
#### **Install Dependencies**
```sh
pip install flask flask-sqlalchemy flask-cors
```

#### **Run Flask Server**
```sh
python main.py
```
_Backend will run on_ **`http://localhost:5000`**

### **3️⃣ Frontend Setup (React App)**
#### **Install Dependencies**
```sh
npm install
```

#### **Set Environment Variables**
Create a `.env` file in the root directory:
```sh
VITE_BACKEND_URL=http://localhost:5000
```

#### **Run React App**
```sh
npm run dev
```
_App will run on_ **`http://localhost:5173`**

## 🔗 API Endpoints
| Method | Endpoint | Description |
|--------|------------|----------------|
| `POST` | `/add_amount` | Add income/expense to database |

## 📷 Screenshots
![Dashboard UI](/client/src/assets/Screenshot%20(42).png)
![Authentication UI](/client/src/assets/Screenshot%20(43).png)
![FinanceDetails UI](/client/src/assets/Screenshot%20(45).png)
![Responsive UI](/client/src/assets/responsive.png)

## Video Of Project
[VideoLink](/client/src/assets/financetracker.mp4)

<video width="600" controls>
  <source src=".//client//src/assets//financetracker.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


