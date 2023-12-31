export const MealsForm = ({selectedDayPlans, updateDay}) => {

  function addInMyMealPlan(inputForm, value) {
    updateDay({
      ...selectedDayPlans,
      [inputForm]: value
    })
  }

  if(!selectedDayPlans) return <p className="first-name-form"> Мое меню</p>
  return <div className="MealsAndIngrediets_container">
      <div className="MealsAndIngrediets_container-forms">
        <input
          type="text"
          className="inputForm"
          placeholder="День недели"
          id="title"
          value={selectedDayPlans.title}
          onChange={(e) => addInMyMealPlan("title", e.target.value)}
        />

      <textarea
        type="text" 
        placeholder="Мое меню на сегодня" 
        id="mealForADay"
        value={selectedDayPlans.mealForADay}
        onChange={(e) => addInMyMealPlan("mealForADay", e.target.value)}
      />

        <textarea
         type="text" 
         placeholder="Необходимые продукты" 
         id="ingredients" 
         value={selectedDayPlans.ingredients}
         onChange={(e) => addInMyMealPlan("ingredients", e.target.value)}
        />
      </div>
    </div>
  
};
