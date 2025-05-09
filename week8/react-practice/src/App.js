import React, { useState } from 'react';
import Introduction from './Introduction';
import Modal from './Modal';

const App = () => {

  const name = "정건";
  const hobby = "독서";
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div>후롱트 첫 리엑트 세션</div>
      <br/>
      <Introduction name={name} hobby={hobby} favoriteSports="축구"/>
      <br/>
      <div>제 소개를 더 보고싶다면 버튼을 눌러주세요</div>
      <button onClick={()=>setModal(true)}>더보기</button>
      {modal && (
        <Modal
        name={name}
        hobby={hobby}
        favoriteSports="축구"
        setModal={setModal}
        />
      )}
    </div>
  );
};

export default App;