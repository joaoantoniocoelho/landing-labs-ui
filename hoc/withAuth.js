import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { jwtDecode } from 'jwt-decode';
import { Center, Spinner } from '@chakra-ui/react';

const withAuth = (WrappedComponent) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        const router = useRouter();
        const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const checkTokenValidity = () => {
                const token = localStorage.getItem('authToken');
                if (!token) {
                    router.push('/login');
                    return;
                }

                try {
                    const decoded = jwtDecode(token);
                    const currentTime = Date.now() / 1000;
                    if (decoded.exp < currentTime) {
                        localStorage.removeItem('authToken');
                        router.push('/login');
                    } else {
                        setUser(decoded);
                    }
                } catch (error) {
                    console.error('Erro ao decodificar o token', error);
                    localStorage.removeItem('authToken');
                    router.push('/login');
                } finally {
                    setLoading(false);
                }
            };

            checkTokenValidity();
        }, [router]);

        if (loading) {
            return (
                <Center height="100vh">
                    <Spinner size="xl" />
                </Center>
            );
        }

        if (!user) {
            return null;
        }

        return <WrappedComponent {...props} user={user} />;
    };
};

export default withAuth;
