import { type Goal } from '../App';
import CourseGoal from './CourseGoal';

interface CourseGoalListProps {
  goals: Goal[];
}

const CourseGoalList = ({ goals }: CourseGoalListProps) => {
  return goals.map(({ title, description, id }) => (
    <CourseGoal title={title} key={id}>
      <p>{description}</p>
    </CourseGoal>
  ));
};

export default CourseGoalList;
