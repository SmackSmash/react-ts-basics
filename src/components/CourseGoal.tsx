import { type PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{
  title: string;
  description?: string;
  id: string;
  handleDeleteGoal: (id: string) => void;
}>;

const CourseGoal = ({
  title,
  description,
  id,
  handleDeleteGoal,
  children
}: CourseGoalProps) => {
  return (
    <article className='bg-slate-200 rounded shadow-md p-4 basis-1/3'>
      <div className='text-slate-900'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        {description && <p>{description}</p>}
        {children}
      </div>
      <button
        className='bg-red-700 text-white rounded py-2 px-5 w-full mt-4 pointer hover:bg-red-600'
        onClick={() => handleDeleteGoal(id)}>
        DELETE
      </button>
    </article>
  );
};

export default CourseGoal;
