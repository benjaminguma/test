import StatContainer from '../components/StatContainer';
import DashboardLayout from '../layout';

export default function Home({ stats }) {
	return (
		<DashboardLayout>
			<main className='main'>
				<StatContainer stats={stats} />
			</main>
		</DashboardLayout>
	);
}
export const getStaticProps = async (ctx) => {
	return {
		props: {
			stats: [
				{
					icon: 'app_stat',
					title: 'appointments',
					count: 213,
				},
				{
					icon: 'patient_stat',
					title: 'new patients',
					count: 104,
				},
				{
					icon: 'interven_stat',
					title: 'interventions',
					count: 24,
				},
				{
					icon: 'earning_stat',
					title: "clafiya's eaning",
					count: '$ 112,174',
				},
			],
		},
	};
};
