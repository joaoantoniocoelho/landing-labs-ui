import { useBreakpointValue } from '@chakra-ui/react';
import DashboardMobile from '../components/UserArea/Dashboard/Mobile/DashboardMobile';
import DashboardDesktop from '../components/UserArea/Dashboard/Desktop/DashboardDesktop';
import withAuth from '@/hoc/withAuth';

function Dashboard({ user }) {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return isMobile ? <DashboardMobile user={user} /> : <DashboardDesktop user={user} />;
}

export default withAuth(Dashboard);
