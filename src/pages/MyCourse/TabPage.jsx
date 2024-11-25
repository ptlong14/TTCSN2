import  { useState, useEffect } from 'react';
import { Box, Tab, Tabs, Typography, Container } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import WishList from '../../components/User/WishList';

const TABS = [
    { label: 'All Courses', path: '/my-course/my-learning', content: <div>My Course Content</div> },
    { label: 'Wishlist', path: '/my-course/my-wishlist', content: <WishList /> },
];

function TabPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(
        TABS.findIndex(tab => tab.path === location.pathname) || 0
    );

    useEffect(() => {
        const currentTabIndex = TABS.findIndex(tab => tab.path === location.pathname);
        if (currentTabIndex !== -1) setSelectedTab(currentTabIndex);
    }, [location.pathname]);

    const handleTabChange = (_, newValue) => {
        setSelectedTab(newValue);
        navigate(TABS[newValue].path);
    };

    return (
        <Box sx={{ minHeight: '70vh', backgroundColor: '#f4f4f4' }}>
            <Box sx={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>My Learning</Typography>
            </Box>

            <Container sx={{ paddingTop: '20px' }}>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    aria-label="tabs"
                    centered
                    sx={{
                        '.MuiTab-root': { textTransform: 'none' },
                    }}
                >
                    {TABS.map((tab, index) => (
                        <Tab key={index} label={tab.label} />
                    ))}
                </Tabs>
            </Container>

            <Container sx={{ paddingTop: '20px' }}>
                {TABS[selectedTab]?.content}
            </Container>
        </Box>
    );
}

export default TabPage;
