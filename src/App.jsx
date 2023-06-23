import React,{useState,useEffect} from 'react'
import './App.css';
import {snack} from './database/Database';
// import { Routes, Route } from 'react-router-dom';
export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedColumn, setSortedColumn] = useState("");
  const [sortedOrder, setSortedOrder] = useState("");

  const [filteredSnacks, setFilteredSnacks] = useState(snack);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filtered = snack.filter(
      (snack) =>
        snack.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        snack.ingredients
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setFilteredSnacks(filtered);
  }, [searchTerm]);

  const handleSort = (column) => {
    if (column === sortedColumn) {
      // Reverse the sorting order
      setSortedOrder(sortedOrder === "asc" ? "desc" : "asc");
    } else {
      // Set the sorting column and order
      setSortedColumn(column);
      setSortedOrder("asc");
    }
  };

  useEffect(() => {
    if (sortedColumn) {
      const sorted = [...filteredSnacks].sort((a, b) => {
        const aValue = a[sortedColumn];
        const bValue = b[sortedColumn];

        if (aValue < bValue) {
          return sortedOrder === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortedOrder === "asc" ? 1 : -1;
        }
        return 0;
      });

      setFilteredSnacks(sorted);
    }
  }, [sortedColumn, sortedOrder]);

  return (
    <div>
    <nav>
      <input
        type="text"
        placeholder="Search snacks..."
        value={searchTerm}
        onChange={handleSearch}
      />
      </nav>
        <h1>Snacks App</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>ID</th>
            <th onClick={() => handleSort("product_name")}>Product Name</th>
            <th onClick={() => handleSort("product_weight")}>Product Weight</th>
            <th onClick={() => handleSort("price")}>Price</th>
            <th onClick={() => handleSort("calories")}>Calories</th>
            <th onClick={() => handleSort("ingredients")}>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {filteredSnacks.map((snack) => (
            <tr key={snack.id}>
              <td>{snack.id}</td>
              <td>{snack.product_name}</td>
              <td>{snack.product_weight}</td>
              <td>{snack.price}</td>
              <td>{snack.calories}</td>
              <td>{snack.ingredients.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}
