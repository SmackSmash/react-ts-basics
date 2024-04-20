import CourseGoal from './components/CourseGoal.tsx';
import Header from './components/Header.tsx';
import HeaderImage from './assets/goals.svg';

const App = () => {
  return (
    <>
      <Header image={{ src: HeaderImage, alt: 'A list of goals' }}>
        <h1 className='text-slate-900 text-2xl font-bold'>Your Course Goals</h1>
      </Header>
      <main className='flex p-4 space-x-4'>
        <CourseGoal title='Title' description='Description'>
          Hello There
        </CourseGoal>
      </main>
    </>
  );
};

export default App;
