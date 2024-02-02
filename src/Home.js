import React, { useState } from 'react';
import App from './App';

function Home() {

  const [userData, setUserData] = useState({});

  const tableRows = userData.map((info) => {
    return (
        <tr>
            <td>{info.id}</td>
            <td>{info.Username}</td>
            <td>{info.Password}</td>
        </tr>
    );
  })

  const addRows = (data) => {
    const totalStudents = userData.length;
    data.id = totalStudents + 1;
    const updateduserData = [...userData];
    updateduserData.push(data);
    setUserData(updateduserData);
};

  return (
    <div>
    <h2>User Details</h2>
    <center>
    <table border="1" style={{width:"100%"}}>
      <thead>
        <tr>
          <th>Id.No</th>
          <th>Username</th>
          <th>Password</th>
         </tr>
       </thead>
         {/* <tr style={{textAlign:"center"}}>
           <td>sd</td>
           <td>ss</td>
         </tr> */}
         <tbody>{tableRows}</tbody>
     </table>
     <App func={addRows} />
    </center>

   </div>

  );
}

export default Home;