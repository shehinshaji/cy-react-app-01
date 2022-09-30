import axios from 'axios'

export function getAllData(){
  return axios.get("/api/emps")
}

export function postData(data){
  return axios.post("/api/emp",data)
}