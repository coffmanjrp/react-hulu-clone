import { useState } from 'react';
import {
  Header,
  SubHeader,
  Categories,
  Live,
  WelcomeTab,
  Footer,
  Modal,
} from './components';
import './App.css';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header setOpenModal={setOpenModal} />
      <SubHeader />
      <Categories />
      <Live />
      <WelcomeTab />
      <Footer />
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}

export default App;
