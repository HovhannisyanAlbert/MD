import React, { useEffect, useState } from "react";
import { data } from "../data";
import style from "./index.module.css";
import { Link } from "react-router-dom";

const Main = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    if (localStorage.hasOwnProperty("data")) {
      setState(JSON.parse(localStorage.getItem("data")));
    }
  }, []);
  return (
    <div className={style.container}>
      <div className={style.serviceBlock}>
        {state.length > 0
          ? state
          : data.service.map((service) => (
              <div key={service.id} className={style.service}>
                <h5>{service.name}</h5>
                <div>
                  {service.proffesion.map((proff) => (
                    <div className={style.peofBlock} key={proff.id}>
                      <h4>{proff.name}</h4>
                      <span>{proff.time}</span>
                      <span> price: {proff.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
      <Link to={"/admin "}>Admin </Link>
    </div>
  );
};

export default Main;
