import React, {useState} from 'react'
import Header from './components/Header.jsx'
import Explore from './components/Explore.jsx';
import Search from './components/Search.jsx';
import Library from './components/Library.jsx';
import MyAccount from './components/MyAccount.jsx';

function App() {
  const [boolState, setBoolState] = useState({
                                              'explore': true,
                                              'search': false,
                                              'library': false,
                                              'my-account': false,
  });
  if(boolState.search)
    return (
      <div className="App">
      <Header state={boolState} func={setBoolState} />
      <Search />
      </div>
   );
   if(boolState.library)
    return (
      <div className="App">
      <Header state={boolState} func={setBoolState} />
      <Library />
      </div>
   );
   if(boolState['my-account'])
    return (
      <div className="App">
      <Header state={boolState} func={setBoolState} />
      <MyAccount />
      </div>
   );
   else
   return (
    <div className="App">
    <Header state={boolState} func={setBoolState} />
    <Explore />
    </div>
 );
}

export default App;
