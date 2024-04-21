import CourseGoal from './components/CourseGoal.tsx';
import Header from './components/Header.tsx';
import HeaderImage from './assets/goals.svg';

const App = () => {
  const handleAddGoal = (): void => {};

  return (
    <>
      <Header image={{ src: HeaderImage, alt: 'A list of goals' }}>
        <h1 className='text-slate-900 text-2xl font-bold'>Your Course Goals</h1>
      </Header>
      <section className='px-4'>
        <button
          className='bg-blue-700 text-white rounded py-2 px-5 mt-4 pointer hover:bg-blue-600'
          onClick={handleAddGoal}>
          Add Goal
        </button>
      </section>
      <main className='flex p-4 space-x-4'>
        <CourseGoal title='Title' description='Description'>
          Hello There
        </CourseGoal>
      </main>
    </>
  );
};

export default App;
