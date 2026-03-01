import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const API_URL = "http://localhost:8080/api/Emp";

  const fetchEmployees = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setEmployees(data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const addEmployee = async (e) => {
    e.preventDefault();

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        department,
        salary: parseFloat(salary),
      }),
    });

    setName("");
    setDepartment("");
    setSalary("");
    fetchEmployees();
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <form className="form" onSubmit={addEmployee}>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />

        <button type="submit">Add Employee</button>
      </form>

      <div className="card-container">
        {employees.map((emp) => (
          <div className="card" key={emp.id}>
            <h3>{emp.name}</h3>
            <p><strong>Department:</strong> {emp.department}</p>
            <p><strong>Salary:</strong> ₹{emp.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;