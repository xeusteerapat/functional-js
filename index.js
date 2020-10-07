const meal = {
  id: 1,
  description: 'Breakfast',
};

const updatedMeal = Object.assign({ calories: 5000 }, meal);
console.log(updatedMeal);
