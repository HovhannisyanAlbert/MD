  import React, { useState } from "react";
  import style from "./index.module.css";
  import { data } from "../data";

  const Popup = ({ ids,headId,setShowPopup }) => {
    const [selectedValue, setSelectedValue] = useState("");
    const person = localStorage.hasOwnProperty("data")

      ? JSON.parse(localStorage.getItem(data).service[headId].proffesion.find((el) => el.id === ids))
      : data.service[headId].proffesion.find((el) => el.id === ids);
  
  const handleSubmit = (e) => {
    if(localStorage.hasOwnProperty("data")){
      const state = JSON.parse(localStorage.getItem("data"));
      const personObj = state.service[headId];
      const result = {...state,service:[...state.service.map((el)=>{
        if(el.id === ids){
            return{
              ...el,
              time:el.time + "a"
            }
        }
        return el
      })] }

      console.log(22, result)
      //localStorage.setItem("data",JSON.stringify(result))
    }else{
      const result = {...data,service:[...data.service.map((el)=>{
        if(el.id === ids){
          console.log(33333)
            return{
              ...el,
              time:el.time + "a"
            }
        }
        return el
      })] }
     
      // localStorage.setItem("data",JSON.stringify(result))
      console.log(33, result)
    }
    
  }
  const handleExit = () =>{
    setShowPopup(false)
    handleSubmit()
  }
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value); // Update the selected value in state
  };
    return (
      <div onClick={handleExit} className={style.popUpComponent}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={style.popUpContent}
        >
            <h3> {person.name} </h3>
            <span> free time: {person.time}</span>

          <form onSubmit={handleSubmit}>
            <select value={selectedValue} onChange={handleSelectChange}>
              <option> 
                30minut
              </option>
              <option>
                60 minut
              </option>
            </select>
          </form>

        </div>
      </div>
    );
  };

  export default Popup;
