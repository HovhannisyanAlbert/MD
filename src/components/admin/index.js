import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import { data } from "../data";

const Admin = ({togglePopup}) => {
 
  const [state, setState] = useState([]);

  useEffect(() => {
    if (localStorage.hasOwnProperty("data")) {
      setState(JSON.parse(localStorage.getItem("data")));
    }
  }, []);
  const handleOpenPopup = (id,serviceID) => {
     togglePopup(id,serviceID)
  };
  return (
    <div className={style.adminBlock}>
      <div className={style.serviceBlock}>
        {state.length > 0
          ? state
          : data.service.map((service,index) => (
              <div key={service.id} className={style.service}>
                <h5>{service.name}</h5>
                <div>
                  {service.proffesion.map((proff) => (
                    <div className={style.peofBlock} key={proff.id}>
                      <h4 onClick={()=>handleOpenPopup(proff.id,index)}>{proff.name}</h4>
                      <span>{proff.time}</span>
                      <span> price: {proff.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Admin;
