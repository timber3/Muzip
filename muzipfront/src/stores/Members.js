import { create } from 'zustand';

const useMemberStore = create((set) => ({
  isLoggedin: false,
  setIsLoggedIn: () => set((state) => ({ isLoggedin: { state } })),
  members: [],
  setMembers: (newMember) =>
    set((prev) => ({
      members: [...prev.members, newMember],
    })),
}));

export default useMemberStore;
