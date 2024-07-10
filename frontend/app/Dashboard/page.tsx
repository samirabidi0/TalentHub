import Sidebar from './Sidebar'
import Talents from './Talents'

const DashboardPage = () => {
  return (
    <div className="flex">
    <main className="flex-1 p-8">
      <Sidebar/>
      <Talents/>
    </main>
  </div>
  );
};

export default DashboardPage;
