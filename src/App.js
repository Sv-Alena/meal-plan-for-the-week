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
      title: "День недели", // для input
      id: uuid(),
      mealForADay: '',  //для меню
      ingredients: ''   //для ингридиентов
    };
    setMealPlans( [newMealPlans, ...mealPlans] );
  }
  
  function deleteDay(mealId) {
    //любое название 'dayId'
    setMealPlans(mealPlans.filter(({id}) => id !== mealId))
  }

  //1. добавление заметки из формы в план,2. если заметка не создана, то форма скрыта, т.е сравниваем id заметок и id формы
  function updateDay(formMeal) {
    const updateMials = mealPlans.map((mealPlan) => {
      if (mealPlan.id === formMeal.id) {
        return formMeal;
      }
      return mealPlan;
    })
    setMealPlans(updateMials);
  }

//отображаем что пишется в форме в план, под тем же Id
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
        //один и тот же prop в компоненте для отображения input в плане
        selectedDayPlans={getActiveMeal()}
        updateDay={updateDay}
      />
    </div>
  );
}

export default App;
