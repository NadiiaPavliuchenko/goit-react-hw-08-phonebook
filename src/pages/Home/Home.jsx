import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Container
      fixed
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography component="h1" variant="h2">
        Welcome to the Phonebook home page!
      </Typography>
    </Container>
  );
};

export default Home;
