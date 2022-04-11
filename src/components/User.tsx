
import React from "react";
import { UserInterface } from "../interfaces/user-interface";
import "./User.scss";

type Props = {
  info: UserInterface;
};

const User = (props: Props) => {
  const { info } = props;
  return (
    <div className="card-container">
      <div className="top">
        <h1>{`${info.name.first} ${info.name.last}`}</h1>
        <p>{`${info.cell}`}</p>
        <p>{`${info.phone}`}</p>
        <p>{`${info.email}`}</p>
      </div>
      <img src={info.picture.large} alt="" />
      <div className="bottom">
        <p>
          {`${info.name.first} is a ${info.dob.age} year old ${info.gender} born in ${info.dob.date.substring(0, 10)} in a city of ${info.location.city} in ${info.location.country}`}
        </p>
       

        <div className="hr"></div>
        <footer>
         <button> Edit</button>
        </footer>
      </div>
    </div>
  );
};

export default User;
