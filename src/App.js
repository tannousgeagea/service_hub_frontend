import './App.css';
import { Helmet } from 'react-helmet'
import ServiceHubMain from './components/service-hub-main';

function App() {
  return (
    <div className="App">
      <Helmet>
          <title>Service HUB</title>
          <meta property="og:title" content="serviceHub: centralize your services" /> 
      </Helmet>

      <ServiceHubMain />
    </div>
  );
}

export default App;
