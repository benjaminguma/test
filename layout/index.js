import { useState, createContext } from 'react';
import Sidebar from '../components/Sidebar';
import useResize, { USeResize } from '../hooks/UseResize';
export const Ctx = createContext();

const DashboardLayout = ({ children }) => {
	const width = useResize();
	const sidebarData = [
		{
			title: 'dashboard',
			icon: 'dash',
		},
		{
			title: 'appointments',
			icon: 'appointments',
		},
		{
			title: 'health workers',
			icon: 'healthworkers',
		},
		{
			title: 'departments',
			icon: 'depatment',
		},
		{
			title: 'payments',
			icon: 'payment',
		},
		{
			title: 'help',
			icon: 'help',
		},
	];
	return (
		<Ctx.Provider
			value={{
				width, //  some values
			}}>
			<main className='dashboard_layout'>
				<Sidebar data={sidebarData} />
				{children}
			</main>
		</Ctx.Provider>
	);
};

export default DashboardLayout;
