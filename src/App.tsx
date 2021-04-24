import { AppContext } from 'AppContext';
import { observer } from 'mobx-react-lite';
import { AdminPage } from 'modules/admin';
import { ProfileContext } from 'modules/profile/ProfileContext';
import React, { useContext } from 'react';
import './App.scss';

export const App: React.FC = observer((props) => (
  <div className="App">
    <AppContext.Provider value={useContext(AppContext)}>
      <ProfileContext.Provider value={useContext(ProfileContext)}>
        <AdminPage />
      </ProfileContext.Provider>
    </AppContext.Provider>
  </div>
));
