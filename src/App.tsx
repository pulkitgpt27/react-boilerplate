import { createContext, Suspense } from 'react';
import Routes from './Routes';
import AuthProvider from './auth/AuthProvider';
import NotificationQueue from './components/Notification/NotificationQueue';

//Remember context can be used for easy pass of data
//Use store only if necesary
export interface User {
  id: number;
  name: string;
}
const user = {
  id: 1,
  name: "Pulkit"
}
export const AuthContext = createContext<User | null>(null);
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotificationQueue maxAlerts={3}/>
      <AuthContext.Provider value={user}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </AuthContext.Provider>
    </Suspense>
  );
}

export default App;
