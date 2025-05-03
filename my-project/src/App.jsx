import { useState } from "react";
import * as XLSX from "xlsx";
import "./index.css";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const addTransaction = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount) return;

    const transactionAmount = type === "expense" ? -Math.abs(parseFloat(amount)) : Math.abs(parseFloat(amount));

    setTransactions([
      { id: Date.now(), description, amount: transactionAmount },
      ...transactions,
    ]);

    setDescription("");
    setAmount("");
    setType("income");
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const exportToExcel = () => {
    if (transactions.length === 0) return alert("No transactions to export.");

    const worksheet = XLSX.utils.json_to_sheet(transactions.map((t) => ({
      Description: t.description,
      Amount: t.amount.toFixed(2),
      Type: t.amount > 0 ? "Income" : "Expense",
    })));

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
    XLSX.writeFile(workbook, "Expense_Tracker.xlsx");
  };

  const income = transactions.filter((t) => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions.filter((t) => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);
  const balance = income + expenses;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-purple-600">Expense Tracker</h1>

        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <h2 className="text-lg font-semibold">Balance</h2>
          <p className="text-2xl font-bold text-gray-800">₹{balance.toFixed(2)}</p>
          <div className="flex justify-between mt-4">
            <div className="w-1/2">
              <p className="text-green-500 font-semibold">Income</p>
              <p>₹{income.toFixed(2)}</p>
            </div>
            <div className="w-1/2">
              <p className="text-red-500 font-semibold">Expenses</p>
              <p>₹{Math.abs(expenses).toFixed(2)}</p>
            </div>
          </div>
        </div>

        <form onSubmit={addTransaction} className="space-y-3">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (e.g., Salary, Groceries)"
            className="w-full p-2 border rounded-lg focus:ring focus:ring-purple-200"
          />

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount (e.g., 500)"
            className="w-full p-2 border rounded-lg focus:ring focus:ring-purple-200"
          />

          <div className="flex justify-between items-center">
            <label className="font-medium">Type:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="p-2 border rounded-lg w-1/2 focus:ring focus:ring-purple-200"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Add Transaction
          </button>
        </form>

        <button
          onClick={exportToExcel}
          className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Export to Excel 📥
        </button>

        <ul className="space-y-2 max-h-60 overflow-y-auto">
          {transactions.map((t) => (
            <li
              key={t.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
            >
              <span className="truncate">{t.description}</span>
              <div className="flex items-center gap-2">
                <span className={`${t.amount > 0 ? "text-green-600" : "text-red-600"} font-semibold`}>
                  ₹{Math.abs(t.amount).toFixed(2)}
                </span>
                <button
                  onClick={() => deleteTransaction(t.id)}
                  className="text-red-400 hover:text-red-600"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
