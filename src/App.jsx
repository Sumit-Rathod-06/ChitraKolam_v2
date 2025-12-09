import MainLayout from './layout/MainLayout';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  const profileImage = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop';
  
  return (
    <MainLayout profileImage={profileImage}>
      <ProfilePage />
    </MainLayout>
  );
}

export default App;
