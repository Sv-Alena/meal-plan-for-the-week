export const MealsForm = ({selectedDayPlans, updateDay}) => {

  function addInMyMealPlan(inputForm, value) {
    updateDay({
      ...selectedDayPlans,
      [inputForm]: value
    })
  }

  if(!selectedDayPlans) return <p className="first-name-form">Мой план питания на неделю</p>// не показывать форму если 
  //не нажата одна из категорий
  return <div className="MealsAndIngrediets_container">
      <div className="MealsAndIngrediets_container-forms">
        <input
          type="text"
          className="inputForm"
          placeholder="День недели"
          id="title" //соединяем id первого и второго компонента
          value={selectedDayPlans.title}
          onChange={(e) => addInMyMealPlan("title", e.target.value)}
        />

      <textarea
        type="text" 
        placeholder="Мое меню на сегодня" 
        id="mealForADay" //соединяем id первого и второго компонента
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
