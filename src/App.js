import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  createBucket,
  loadBucketFB,
  addBucketFB,
} from "./redux/modules/bucket";

import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFound";
import { db } from "./firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const text = React.useRef(null);
  const dispatch = useDispatch();

  React.useEffect(async () => {
    dispatch(loadBucketFB());
  }, []);

  const addBucketList = () => {
    dispatch(addBucketFB({ text: text.current.value, completed: false }));
  };

  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        {/* 컴포넌트를 넣어줍니다. */}
        {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
        <Switch>
          {/* <Route
path="/"
exact
render={(props) => <BucketList list={list} />}
/> */}
          {/* 이제는 render를 사용해서 list를 넘겨줄 필요가 없죠! 버킷리스트가 리덕스에서 데이터를 알아서 가져갈거니까요! */}
          <Route exact path="/" component={BucketList} />
          <Route exact path="/detail/:index" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </Container>
      {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기 </button>
      </Input>
    </div>
  );
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
