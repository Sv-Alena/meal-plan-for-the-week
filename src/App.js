import { useEffect, useState } from "react";
import { ListMeals } from "./ListMeals";
import { MealsForm } from "./MealsAndIngredients";
import uuid from "react-uuid";
import "./App.css";

function App() {
  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
  const [selectedDayPlans, setSelectedDayPlans] = useState(false)
  
  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])
  function addMeal() {
    const newMealPlans = {
      title: "День недели",
      id: uuid(),
      mealForADay: '', 
      ingredients: '' 
    };
    setMealPlans( [newMealPlans, ...mealPlans] );
  }
  
  function deleteDay(mealId) {
    setMealPlans(mealPlans.filter(({id}) => id !== mealId))
  }

  function updateDay(formMeal) {
    const updateMials = mealPlans.map((mealPlan) => {
      if (mealPlan.id === formMeal.id) {
        return formMeal;
      }
      return mealPlan;
    })
    setMealPlans(updateMials);
  }

function getActiveMeal() {
  return mealPlans.find(({id}) => id === selectedDayPlans)
}
  return (
    <div className="App">
      <ListMeals
        addMeal={addMeal}
        mealPlans={mealPlans}
        deleteDay={deleteDay}
        selectedDayPlans={selectedDayPlans}
        setSelectedDayPlans={setSelectedDayPlans}
      />
      <MealsForm
        selectedDayPlans={getActiveMeal()}
        updateDay={updateDay}
      />
    </div>
  );
}

export default App;
