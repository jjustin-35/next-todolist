import TodolistWrapper from "../../components/TodolistWrapper";
import { Banner } from "../../components/Banner";
import List from "../../containers/List";
import { Input } from "../../containers/Input";
import Background from "../../components/Background";
import Toast from "../../containers/Toast";

function Home({ params: { lang } }: { params: { lang: string } }) {
  return (
    <Background>
      <TodolistWrapper>
        <Banner lang={lang} />
        <Input />
        <List lang={lang} />
      </TodolistWrapper>
      <Toast />
    </Background>
  );
}

export default Home;
