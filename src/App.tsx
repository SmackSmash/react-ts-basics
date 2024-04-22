import { type ChangeEvent, type FormEvent, useState } from 'react';
import { nanoid } from 'nanoid';
import CourseGoalList from './components/CourseGoalList.tsx';
import Header from './components/Header.tsx';
import AddGoalForm from './components/AddGoalForm.tsx';
import HeaderImage from './assets/goals.svg';

export interface Goal {
  title: string;
  description: string;
  id: string;
}

const App = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>): void => {
    setTitle(value);
  };

  const handleDescriptionChange = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>): void => {
    setDescription(value);
  };

  const handleAddGoal = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setGoals([...goals, { title, description, id: nanoid() }]);
    setTitle('');
    setDescription('');
  };

  const handleDeleteGoal = (id: string): void => {
    setGoals(goals.filter((goal: Goal): boolean => goal.id !== id));
  };

  return (
    <>
      <Header image={{ src: HeaderImage, alt: 'A list of goals' }}>
        <h1 className='text-slate-900 text-2xl font-bold'>Your Course Goals</h1>
      </Header>
      <AddGoalForm
        title={title}
        description={description}
        onTitleChange={handleTitleChange}
        onDescriptionChange={handleDescriptionChange}
        onAddGoal={handleAddGoal}
      />
      <main className='flex p-4 space-x-4'>
        <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
      </main>
    </>
  );
};

export default App;
