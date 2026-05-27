import DashboardCards from '../components/DashboardCards';
import Navbar from '../components/Navbar';
import WorkoutChart from '../components/WorkoutChart';

const Dashboard = () => {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white'>
      <Navbar />

      <div className='p-6'>
        <DashboardCards />

        <WorkoutChart />
      </div>
    </div>
  );
};

export default Dashboard;
