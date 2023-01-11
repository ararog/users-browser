import React from 'react';
import { Button, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

// import { Container } from './styles';

const HomePage = () => {
  const navigate = useNavigate();
  
  const loadUsers = () => {
    navigate('/users');
  };

  return (
    <div>
      <Heading mt={20}>Users Browser</Heading>
      <Button colorScheme='teal' mt={20} size='lg' onClick={loadUsers}>
        Load Users
      </Button>
    </div>
  );
};

export default HomePage;