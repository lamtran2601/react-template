import { ProfileStore } from './ProfileStore';

export class ProfileController {
  profileStore: ProfileStore;

  constructor(profileStore: ProfileStore) {
    this.profileStore = profileStore;
  }
}
