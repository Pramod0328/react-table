import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const students = [
      {
        name: "Pramod",
        class: "BCA",
        marks: 89
      },
      {
        name: "Sukesh",
        class: "Bcom",
        marks: 78
      },
      {
        name: "Sampath",
        class: "PUC",
        marks: 60
      },
      {
        name: "Bhavish",
        class: "MCA",
        marks: 92
      },
      {
        name:"Sundar",
        class: "MBA",
        marks: 59
      }
    ]
  return (
    <>   
         <table border={'1px'}>
            <thead>
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Marks</th>
                </tr>
            </thead>
            <tbody>
              {
                students.map((student)=>(
                  <tr>
                    <td>{student.name}</td>
                    <td>{student.class}</td>
                    <td>{student.marks}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
    </>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);