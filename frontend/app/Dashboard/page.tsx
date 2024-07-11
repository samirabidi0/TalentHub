import Sidebar from './Sidebar'
import Talents from './Talents'

const DashboardPage = () => {
  return (
    <div className="flex">
    <main className="flex">
    <div><Sidebar/></div>
    <div><Talents/> </div>
    </main>
  </div>
  );
};

export default DashboardPage;
