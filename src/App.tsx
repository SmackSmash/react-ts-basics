import CourseGoal from './components/CourseGoal.tsx';

const App = () => {
  return (
    <main className='flex p-4 space-x-4'>
      <CourseGoal title='Title' description='Description'>
        Hello There
      </CourseGoal>
    </main>
  );
};

export default App;
