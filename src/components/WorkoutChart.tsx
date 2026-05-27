import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Mon', calories: 300 },
  { day: 'Tue', calories: 500 },
  { day: 'Wed', calories: 700 },
  { day: 'Thu', calories: 400 },
  { day: 'Fri', calories: 650 }
];

const WorkoutChart = () => {
  return (
    <div className='bg-white dark:bg-gray-800 mt-6 p-6 rounded-xl shadow'>
      <h2 className='text-xl font-bold mb-4'>Workout Analytics</h2>

      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={data}>
          <XAxis dataKey='day' />
          <YAxis />
          <Tooltip />
          <Line type='monotone' dataKey='calories' stroke='#2563eb' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WorkoutChart;
