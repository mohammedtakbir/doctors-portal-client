import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import { useAdmin } from '../hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        {isAdmin &&
                            <>
                                <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                                <li><Link to='/dashboard/addDoctor'>Add A Doctor</Link></li>
                                <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;