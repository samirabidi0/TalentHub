
import { ReactNode } from 'react';


interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex">
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;