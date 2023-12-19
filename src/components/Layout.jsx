import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <div className="bg-body-tertiary pb-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
