// Import styles
import './styles/App.scss';
// Import components
import Player from './components/Player';
import Song from './components/Song';

function App() {
  return (
    <div>
      <Song />
      <Player />
    </div>
  );
}

export default App;
