import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList.tsx';
import Header from './components/Header.tsx';
import InfoBox from './components/InfoBox.tsx';
import AddGoalForm from './components/AddGoalForm.tsx';
import HeaderImage from './assets/goals.svg';

export interface Goal {
  title: string;
  description: string;
  id: string;
}

const App = () => {
  const [goals, setGoals] = useState<Goal[]>([]);

  const handleAddGoal = (goal: Goal): void => {
    setGoals(goals => [...goals, goal]);
  };

  const handleDeleteGoal = (id: string): void => {
    setGoals(goals.filter((goal: Goal): boolean => goal.id !== id));
  };

  return (
    <>
      <Header image={{ src: HeaderImage, alt: 'A list of goals' }}>
        <h1 className='text-slate-900 text-2xl font-bold'>Your Course Goals</h1>
      </Header>
      <section>
        <AddGoalForm onAddGoal={handleAddGoal} />
      </section>
      {goals.length === 0 && (
        <InfoBox mode='hint'>You don't have any goals yet</InfoBox>
      )}
      {goals.length > 3 && (
        <InfoBox mode='warning'>Slow down that's way too many goals!</InfoBox>
      )}
      <main className='flex p-4 space-x-4'>
        <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
      </main>
    </>
  );
};

export default App;
