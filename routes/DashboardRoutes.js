import { v4 as uuid } from 'uuid';

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		link: '/'
	},
	{
		id: uuid(),
		title: 'Bayi/Balita',
		icon: 'home',
		link: '/pages/bayi'
	},
	{
		id: uuid(),
		title: 'Ibu Hamil',
		icon: 'home',
		link: '/pages/ibu-hamil'
	},
	{
		id: uuid(),
		title: 'Wus Pus',
		icon: 'home',
		link: '/pages/wus-pus'
	},
	{
		id: uuid(),
		title: 'Posyandu',
		icon: 'home',
		link: '/pages/posyandu'
	},
];

export default DashboardMenu;
