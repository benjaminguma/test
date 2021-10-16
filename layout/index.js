import { useState, createContext } from 'react';
import Sidebar from '../Shared/UIelements/Sidebar';
import { UseMerchantOverview } from '../../Services/merchant/merchant.queries';
export const Ctx = createContext();

const DashboardLayout = ({ children }) => {
	const sidebarData = [
		{
			title: 'dashboard',
			icon: '',
		},
		{
			title: 'appointments',
			icon: 'dashboard',
		},
		{
			title: 'healthwoekers',
			icon: 'order',
		},
		{
			title: 'departments',
			icon: 'product',
			link: 'catalogue/products',
		},
		// {
		//     title: "plugins",
		//     icon: "plugins",
		// },
		{
			title: 'payments',
			icon: 'manage',
		},
		{
			title: 'help',
			icon: 'account',
		},
	];
	return (
		<Ctx.Provider
			value={
				{
					//  some values
				}
			}>
			<main className='dashboard_layout'>
				<Sidebar data={sidebarData} />
				{children}
			</main>
		</Ctx.Provider>
	);
};

export default DashboardLayout;
