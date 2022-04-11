import React, { useEffect, useState } from "react";

import { UserInterface } from "../interfaces/user-interface";
import User from "./User";
type Props = {};

const Dashboard = (props: Props) => {
  const [user, setUser] = useState<UserInterface[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3001/results");
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          {user &&
            user.map((info) => <User key={info.login.uuid} info={info} />)}
        </div>
      )}
    
    </>
  );
};

export default Dashboard;
