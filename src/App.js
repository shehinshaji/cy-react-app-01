import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import { getAllData, postData } from './helper';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getAllData().then(result=>{;
    console.log('data',result.data)
    setData(result.data.emps)
    }).catch(e=>{
      console.log('Error',e)
    })
  },[])

  function onSubmit(data){
    console.log('submitting',data)
    postData(data).then(d=>{
      console.log('Added data',d)
      setData(prev=>{
        console.log('prev',prev)
        return [...prev, d.data.emp]
      })
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Employees</p>
        <Form onClick={onSubmit}/>
        <table className="table">
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            { data?.map(d=>{
              return <tr key={`id${d.id}`}><td>{d.id}</td><td>{d.name}</td></tr> 
              }) 
            }
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
