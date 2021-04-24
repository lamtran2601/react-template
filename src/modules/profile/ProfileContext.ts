import { Profile } from 'models/profile';
import { createContext } from 'react';
import { ProfileController } from './ProfileController';
import { ProfileStore } from './ProfileStore';

interface ProfileProviderProps {
  profileController: ProfileController;
  profileStore: ProfileStore;
}

const profileStore = new ProfileStore(new Profile('123'));
const profileController = new ProfileController(profileStore);

export const ProfileContext = createContext<ProfileProviderProps>({
  profileController,
  profileStore,
});
