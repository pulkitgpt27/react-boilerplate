import React, { createContext } from 'react';
import Post from './components/Post';


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
    <AuthContext.Provider value={user}>
      <div>
        <Post />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
