import http from "./http-common";

class IngredientDataService {
  getAllIngredients() {
    return http.get("/ingredients");
  }
}

export default new IngredientDataService();
