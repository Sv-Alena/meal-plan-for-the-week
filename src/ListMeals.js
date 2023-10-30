export const ListMeals = ({mealPlans, addMeal, deleteDay, selectedDayPlans, setSelectedDayPlans}) => {
  return (
    <div className="ListMeals_container">
      <div>
        <h2 className="ListMeals_container-title">План питания на неделю</h2>
        <button className="btn_add" onClick={addMeal}>
          Добавить
        </button>
      </div>
      <div>
        {mealPlans.map(({id, title, mealForADay}) => (
          <div key={id} className={`meal ${id === selectedDayPlans ? 'selectedColor' : 'defaultColor'}`} //любое название 'meal'
          onClick={() => setSelectedDayPlans(id)}
          >
            <p className="text-form">{title}</p>
            <p className="text-form">{mealForADay.substring(0, 60)}</p>
            <button className="dtn_delete" onClick={() => deleteDay(id)}>удалить</button>
          </div>
        ))}
        
        </div>
        
        
      </div>
    
  );
};
