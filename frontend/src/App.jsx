import { MantineProvider } from '@mantine/core';
import './App.css';
import { HeaderMegaMenu } from './components/HeaderMegaMenu';
import { ScrollProgress } from './components/ui/scroll-progress';
import "./style/global.css"; 
import { AuthenticationForm } from './components/AuthenticationForm';
import HotCoins from './components/HotCoins';
import { NavbarMinimal } from './components/NavBarMinimal';
import GetStarted from './pages/GetStarted';
function App() {

  return (
    <>
    <GetStarted></GetStarted>
    </> 
  )
}

export default App;
