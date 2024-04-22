import { type FormEvent, type ChangeEvent } from 'react';

interface AddGoalFormProps {
  title: string;
  description: string;
  onTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddGoal: (e: FormEvent<HTMLFormElement>) => void;
}

const AddGoalForm = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  onAddGoal
}: AddGoalFormProps) => {
  return (
    <form className='p-4 flex justify-center items-center' onSubmit={onAddGoal}>
      <input
        className='p-2 rounded bg bg-slate-900 mr-2 text-slate-100'
        onChange={onTitleChange}
        value={title}
        type='text'
        name='title'
        id='title'
        placeholder='Title'
      />
      <input
        className='p-2 rounded bg bg-slate-900 mr-2 text-slate-100'
        onChange={onDescriptionChange}
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
  );
};

export default AddGoalForm;
