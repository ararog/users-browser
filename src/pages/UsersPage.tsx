import React, { useEffect } from 'react';
import { Box, Heading, VStack, StackDivider } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

import { User } from '../models/User';
import { UsersState, useStore } from '../states/users';

const UsersPage = () => {
  const navigate = useNavigate();
  const isLoading = useStore((state: UsersState) => state.isLoading)
  const users = useStore((state: UsersState) => state.users)
  const loadUsers = useStore((state: UsersState) => state.loadUsers)

  useEffect(() => {
    loadUsers();
  }, [])

  const items  = users?.map((user: User) => (
    <Box onClick={() => {
      navigate(`/users/${user.id}`);
    }}>
      <span>{user.name}</span>
    </Box>
  ))

  return (
    <div>
      <Heading mt={20}>Users List</Heading>
      <VStack
        mt={10}
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
      >
        {isLoading ? <span>Loading...</span>  : items }
      </VStack>      
    </div>
  );
};

export default UsersPage;