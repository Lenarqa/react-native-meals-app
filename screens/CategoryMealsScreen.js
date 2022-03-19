import { CATEGORIES } from "../data/dummy-data";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (item) => item.categoryId.indexOf(catId) >= 0
  );

  

  return <MealList listData={displayedMeals} navigation={props.navigation}/>;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCat = CATEGORIES.find((item) => item.id === catId);

  return {
    headerTitle: selectedCat.title,
  };
};


export default CategoryMealsScreen;
