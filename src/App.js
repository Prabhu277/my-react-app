import React, { useState, useEffect } from 'react';
import './App.css';

const user = {
  imageUrl: 'https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?size=626&ext=jpg',
  imageSize: 150,
};



function App() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [tableData, setTableData] = useState([]);
 
  useEffect(() => {
    const storedData = localStorage.getItem('tableData');
    if (storedData) {
      setTableData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tableData', JSON.stringify(tableData));
  }, [tableData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
       
      [name]: value,
      
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData((prevData) => [...prevData, formData]);
    setFormData({ username: '', password: '' });
  };

  const handleDelete = (index) => {
    setTableData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
    <h1 style={{fontFamily:"monospace"}}>Login Page</h1>
  <div className='App_1'> 
     <form onSubmit={handleSubmit}> 
     <table>
      <tr>
      <img
    className="avatar"
    src={user.imageUrl}
    alt={'Photo of ' + user.name}
    style={{
      width: user.imageSize,
      height: user.imageSize
    }}
  />
      </tr>
      <tr>
        <td>
        <label htmlFor ='Username'>Username:</label> 
        <input type='text'  name="username" value={formData.username} onChange={handleInputChange}
        required
        ></input> <br></br>
        </td>
      </tr>
      <tr>
      <td>
        <label htmlFor ='Password'>Password:</label> 
        <input type='text'  name="password" value={formData.password} onChange={handleInputChange} required
        ></input> <br></br>
        </td>
      </tr>
      <tr>
      <td>
      <button type="submit">Submit</button>
        </td>
      </tr>
    </table> 
    
     </form> 

    </div>
    <div>
    
    <h2>Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>index</th>
            <th>Username</th>
            <th>Password</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{data.username}</td>
              <td>{data.password}</td>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
</div>

  );
}

export default App;
