import http from "../../services/http-common";
import { useState, useEffect, createContext } from "react";

const IngredientContext = createContext();

export function IngredientProvider(props) {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = () => {
    http.get(`/ingredients`).then((res) => {
      setIngredients(res.data);
    });
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <IngredientContext.Provider value={{ ingredients, getIngredients }}>
      {props.children}
    </IngredientContext.Provider>
  );
}

export default IngredientContext;
