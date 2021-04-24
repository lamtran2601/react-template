import React, { useContext } from 'react';
import { ProfileContext } from '../ProfileContext';

export const ProfileAvatar: React.FC = (props) => {
  const { profileController, profileStore: { profile } } = useContext(ProfileContext);
  return (
    <div>
      {profile?.userName}
    </div>
  );
};
