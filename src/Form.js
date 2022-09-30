const Form = ({onClick}) => {

  function handleClick(){
    console.log("Clicked..")
    const elem = document.getElementById("inputname");
    console.log(elem.value)
    onClick(elem.value);
  }

  return <div className="form">
    <input id="inputname" type="text"></input>
    <button onClick={handleClick}>Add</button>
  </div>
}

export default Form;