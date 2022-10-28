import http from "../../services/http-common";
import { useState, useEffect, createContext } from "react";

const MealContext = createContext();

export function MealProvider(props) {
  const [meals, setMeals] = useState([]);

  const getMeals = () => {
    http.get(`/meals`).then((res) => {
      setMeals(res.data);
    });
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <MealContext.Provider value={{ meals, getMeals }}>
      {props.children}
    </MealContext.Provider>
  );
}

export default MealContext;
