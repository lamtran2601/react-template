import { Profile } from 'models/profile';

export class ProfileStore {
  profile?: Profile;

  constructor(profile?: Profile) {
    this.profile = profile;
  }
}
