import { useBreakpointValue } from '@chakra-ui/react';
import DashboardMobile from '../components/DashboardMobile';
import DashboardDesktop from '../components/DashboardDesktop';

export default function Dashboard() {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return isMobile ? <DashboardMobile /> : <DashboardDesktop />;
}
