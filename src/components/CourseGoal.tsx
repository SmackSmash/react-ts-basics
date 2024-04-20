const CourseGoal = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return (
    <article className='bg-slate-200 rounded shadow-md m-4 p-4 w-1/3'>
      <div className='text-slate-900'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button className='bg-red-700 text-white rounded py-2 px-5 w-full mt-4 pointer hover:bg-red-600'>
        DELETE
      </button>
    </article>
  );
};

export default CourseGoal;
