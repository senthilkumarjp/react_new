import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      // const updatedGoals = [...prevGoals];
      // updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      // return updatedGoals;
      const data={
        text:enteredText,
        id:Math.random().toString()
      }
      return [data, ...prevGoals];
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  // let content = (
  //   <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  // );

  // if (courseGoals.length > 0) {
  //   content = (
  //     <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
  //   );
  // }
function ed(da){
  
// console.log('in app');
// console.log(da);
}
  return (
    <div>
      <section id="goal-form">
        <CourseInput ed ={ed} onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {/* {content} */}
        {courseGoals.length > 0 ? (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
            da={ed}
          />
        ) : (<p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>)
        }
      </section>
    </div>
  );
};

export default App;
