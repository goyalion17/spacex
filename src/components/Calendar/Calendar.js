import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Main from "../Main/Main";
import "./calendar.css";
import FetchData from "../../service/FetchData";

const Calendar = () => {
  const fetchData = new FetchData();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData.getLaunches()
    .then(launches => setData(launches))
  }, []);

  console.log(data);

  return (
    <>
      <Main />
      <section className="calendar">
        <div className="container">
          <ul className="calendar-list" >
            {data.map((item) => (
              <li className="calendar-item" key={item.id}>
                <article className="launches">
                  <div className="launches-image">
                    <img src={item.links.patch.small} alt="" />
                  </div>
                  <div className="launches-content">
            <h2 className="launches-title">{item.name}</h2>
                    <Link
                      to="./details"
                      className="button launches-details"
                    >
                      Подробнее
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Calendar;
