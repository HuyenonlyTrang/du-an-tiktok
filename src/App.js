import style from './App.module.sass';
import { clsx } from 'clsx';

function App() {
  return (
    <div>
      <h1 className={clsx(style.title, style.content)}>
        Sos
      </h1>
      <p>Cau oi</p>
    </div>
  )
}
export default App;