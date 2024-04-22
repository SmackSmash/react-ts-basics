import { type Goal } from '../App';
import CourseGoal from './CourseGoal.tsx';

interface CourseGoalListProps {
  goals: Goal[];
  onDelete: (id: string) => void;
}

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  return goals.map(({ title, description, id }) => (
    <CourseGoal title={title} id={id} key={id} onDelete={onDelete}>
      <p>{description}</p>
    </CourseGoal>
  ));
};

export default CourseGoalList;
