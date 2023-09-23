import React, { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Admin from './components/admin';
import Main from './components/main';
import Popup from './components/Popup';

function App() {
  const [ showPopup , setShowPopup] = useState(false);
  const [ids, setIds] = useState(null);
  const [headId, setHeadId] = useState(null)
  const togglePopup = (id,service) => {
     setIds(id);
     setHeadId(service)
     setShowPopup((prev) =>  !prev); 
  }
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Main />} />
      <Route path='/admin' element={<Admin togglePopup={togglePopup}/>} />
      

    </Routes>
    {!!showPopup && <Popup togglePopup={togglePopup} ids={ids} headId={headId} setShowPopup={setShowPopup}/>}
    </BrowserRouter>
  );
}

export default App;
