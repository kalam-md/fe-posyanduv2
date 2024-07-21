import { v4 as uuid } from 'uuid';

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		link: '/'
	},
	{
		id: uuid(),
		title: 'Bayi/Balita',
		link: '/pages/bayi'
	},
	{
		id: uuid(),
		title: 'Ibu Hamil',
		link: '/pages/ibu-hamil'
	},
	{
		id: uuid(),
		title: 'Wus Pus',
		link: '/pages/wuspus'
	},
	{
		id: uuid(),
		title: 'Posyandu',
		link: '/pages/posyandu'
	},
];

export default DashboardMenu;
