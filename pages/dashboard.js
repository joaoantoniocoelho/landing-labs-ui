import { useBreakpointValue } from '@chakra-ui/react';
import DashboardMobile from '../components/DashboardMobile';
import DashboardDesktop from '../components/DashboardDesktop';
import withAuth from '@/hoc/withAuth';

function Dashboard() {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return isMobile ? <DashboardMobile /> : <DashboardDesktop />;
}

export default withAuth(Dashboard);
