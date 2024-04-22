import {
  type FormEvent,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  useState
} from 'react';
import { type Goal } from '../App';
import { nanoid } from 'nanoid';

interface AddGoalFormProps {
  setGoals: Dispatch<SetStateAction<Goal[]>>;
}

const AddGoalForm = ({ setGoals }: AddGoalFormProps) => {
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
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setGoals(goals => [...goals, { title, description, id: nanoid() }]);
    setTitle('');
    setDescription('');
  };

  return (
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
  );
};

export default AddGoalForm;
