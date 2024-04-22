import { ChangeEvent, FormEvent, useState } from 'react';
import { nanoid } from 'nanoid';
import CourseGoal from './components/CourseGoal.tsx';
import Header from './components/Header.tsx';
import HeaderImage from './assets/goals.svg';

interface Goal {
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

  return (
    <>
      <Header image={{ src: HeaderImage, alt: 'A list of goals' }}>
        <h1 className='text-slate-900 text-2xl font-bold'>Your Course Goals</h1>
      </Header>
      <form
        className='p-4 flex justify-center items-center'
        onSubmit={handleAddGoal}>
        <input
          className='p-2 rounded bg bg-slate-900 mr-2 text-slate-100'
          onChange={handleTitleChange}
          value={title}
          type='text'
          name='title'
          id='title'
          placeholder='Title'
        />
        <input
          className='p-2 rounded bg bg-slate-900 mr-2 text-slate-100'
          onChange={handleDescriptionChange}
          value={description}
          type='text'
          name='description'
          id='description'
          placeholder='Description'
        />
        <button
          className='bg-blue-700 text-white rounded py-2 px-5 pointer hover:bg-blue-600'
          type='submit'>
          Add Goal
        </button>
      </form>
      <main className='flex p-4 space-x-4'>
        {goals.map(({ title, description, id }: Goal) => (
          <CourseGoal title={title} description={description} key={id} />
        ))}
      </main>
    </>
  );
};

export default App;
