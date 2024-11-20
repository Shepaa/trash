import {Greeting} from './Greeting';
import {LoginStatus} from './LoginStatus';
import {Counter} from './Counter';
import NameList from './ListName';
import {ToggleText} from './ToggleText';
import {TaskList} from './TaskList';
import Timer from './Timer';
import TabSwitcher from './TabSwitcher';
import LikeCounter from './LikeCounter';

function App() {
  return (
      <div className="App">
        {/*<Greeting name="Ivan" />*/}
        {/*<LoginStatus isLoggedIn={false}/>*/}
        {/*<Counter/>*/}
        {/*<NameList names={["ivan", 'neIvan']} />*/}
        {/*<ToggleText/>*/}
        {/*<TaskList initialTasks={['Buy groceries', 'Read a book']} />*/}
        {/*<Timer/>*/}
        {/*<TabSwitcher/>*/}
        <LikeCounter/>
      </div>
  );
}

export default App;
