import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import { getAllData, postData } from './helper';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getAllData().then(result=>{;
    console.log('data',result)
    setData(result.data.map(d=>d.name))
    }).catch(e=>{
      console.log('Error',e)
    })
  },[])

  function onSubmit(data){
    console.log('submitting',data)
    postData({val:data}).then(d=>{
      console.log('Added data',d)
      setData(prev=>{
        console.log('prev',prev)
        return [...prev, data]
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
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            { data?.map((d,i)=>{
              return <tr key={`id${i}`}><td>{d}</td></tr> 
              }) 
            }
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
