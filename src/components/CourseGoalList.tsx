import { type Goal } from '../App';
import CourseGoal from './CourseGoal.tsx';

interface CourseGoalListProps {
  goals: Goal[];
  handleDeleteGoal: (id: string) => void;
}

const CourseGoalList = ({ goals, handleDeleteGoal }: CourseGoalListProps) => {
  return goals.map(({ title, description, id }) => (
    <CourseGoal
      title={title}
      id={id}
      key={id}
      handleDeleteGoal={handleDeleteGoal}>
      <p>{description}</p>
    </CourseGoal>
  ));
};

export default CourseGoalList;
