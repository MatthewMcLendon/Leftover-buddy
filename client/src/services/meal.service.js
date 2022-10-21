import http from "./http-common";

class MealDataService {
  getAllMeals() {
    return http.get("/meals");
  }
}

export default new MealDataService();
