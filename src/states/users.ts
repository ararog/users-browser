import create from 'zustand';
import { api } from '../helpers/api';
import { User } from '../models/User';

export interface UsersState {
  userId: number | null
  users?: User[]
  user?: User
  isLoading: boolean
  loadUsers: () => void
  loadUser: (userId?: string) => void
}

// define the store
export const useStore = create<UsersState>((set, get) => ({
  userId: null,
  users: [],
  user: undefined,
  isLoading: false,
  loadUsers: async () => {
    set({ isLoading: true });
    const response = await api.get('/users');
    set({ isLoading: false, users: response.data as User[] });
  },
  loadUser: async (userId?: string) => {
    set({ isLoading: true });
    const response = await api.get(`/users/${userId}`);
    set({ isLoading: false, user: response.data as User })
  }
}));