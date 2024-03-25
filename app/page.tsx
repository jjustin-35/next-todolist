import TodolistWrapper from '../components/TodolistWrapper';
import { Banner } from '../components/Banner';
import List from '../containers/List';
import { Input } from '../containers/Input';
import Background from '../components/Background';
import Toast from '../containers/Toast';

function Home() {
  return (
    <Background>
      <TodolistWrapper>
        <Banner />
        <Input />
        <List />
      </TodolistWrapper>
      <Toast />
    </Background>
  );
}

export default Home;
