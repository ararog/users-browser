import React, { useEffect } from 'react';
import { Box, Heading, VStack, StackDivider, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import { UsersState, useStore } from '../states/users';

const UserPage = () => {
  let { userId } = useParams();
  const isLoading = useStore((state: UsersState) => state.isLoading)
  const user = useStore((state: UsersState) => state.user)
  const loadUser = useStore((state: UsersState) => state.loadUser)

  useEffect(() => {
    loadUser(userId);
  }, [])

  return (
    <div>
      <Heading mt={20}>User Details</Heading>
      {isLoading ? 
        <span>Loading...</span> :       
        <VStack
            mt={10}
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='center'
        >
          <Box>
            <img src={user?.avatar} style={{width: '200px', height: '200px'}} />
            <Text fontSize='lg'>{user?.name}</Text>
          </Box>
        </VStack>
      }          
    </div>
  );
};

export default UserPage;