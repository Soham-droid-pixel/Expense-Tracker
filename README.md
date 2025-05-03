# 💰 React Expense Tracker

A simple, elegant, and responsive **Expense Tracker** built with **React**. This application allows users to:

* Add income and expense transactions
* View total balance, income, and expenses
* Export all transactions to an Excel file (`.xlsx`)
* Delete individual transactions

---

## 🚀 Features

* 📥 Add income/expense entries with description and amount
* 📊 Real-time balance calculation
* 📤 Export data to Excel
* ❌ Delete transactions
* 🎨 Clean and responsive UI using **Tailwind CSS**

---

## 🧰 Tech Stack

* **React** (Functional components + Hooks)
* **Tailwind CSS** for styling
* **xlsx (SheetJS)** for Excel export

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Soham-droid-pixel/Expense-Tracker.git

# Navigate to project directory
cd Expense-Tracker

# Install dependencies
npm install

# Run the development server
npm start
```

---

## 📂 Project Structure

```
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── ...
├── package.json
└── README.md
```

---

## 📝 How to Use

1. **Add Transaction**
   Fill in the description, amount, and type (income or expense). Hit **Add Transaction**.

2. **Delete Transaction**
   Click on the ❌ icon next to any transaction to remove it.

3. **Export to Excel**
   Click **Export to Excel 📥** to download your transaction history.

---

## 📦 Dependencies

```bash
npm install xlsx
```

Also make sure Tailwind CSS is configured in your project. You can follow the [Tailwind Installation Guide](https://tailwindcss.com/docs/installation) if needed.

---

## 📁 Example Excel Output

The exported Excel file will have the following columns:

| Description      | Amount | Type    |
| ---------------- | ------ | ------- |
| Salary           | 25000  | Income  |
| Grocery Shopping | -1500  | Expense |

---

## ✅ TODO (Optional Enhancements)

* Add filters by date/type
* Persist data with localStorage or a backend
* Add charts for income vs expenses
* Add categories for better classification

---
