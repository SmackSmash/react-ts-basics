import { type PropsWithChildren } from 'react';
import { type Goal } from '../App';
import CourseGoal from './CourseGoal';

type CourseGoalListProps = PropsWithChildren<{
  goals: Goal[];
}>;

const CourseGoalList = ({ goals }: CourseGoalListProps) => {
  return goals.map(({ title, description, id }) => (
    <CourseGoal title={title} key={id}>
      <p>{description}</p>
    </CourseGoal>
  ));
};

export default CourseGoalList;
