import { type ReactNode } from 'react';

interface CourseGoalProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const CourseGoal = ({ title, description, children }: CourseGoalProps) => {
  return (
    <article className='bg-slate-200 rounded shadow-md p-4 basis-1/3'>
      <div className='text-slate-900'>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{children}</p>
      </div>
      <button className='bg-red-700 text-white rounded py-2 px-5 w-full mt-4 pointer hover:bg-red-600'>
        DELETE
      </button>
    </article>
  );
};

export default CourseGoal;
