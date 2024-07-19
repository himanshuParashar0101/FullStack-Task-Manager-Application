import { Container, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import authUtils from '../../utils/authUtils';
import Loading from '../common/Loading';

const AuthLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated();
      if (!isAuth) {
        setLoading(false);
      } else {
        navigate('/');
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    loading ? (
      <Loading fullHeight />
    ) : (
      <Container component='main' maxWidth='xs'>
        <Box sx={{
          marginTop: 5,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <h1>Trello Clone </h1>
          <h2>By- Himanshu Parashar</h2>
          <Outlet />
        </Box>
      </Container>
    )
  );
}

export default AuthLayout;
