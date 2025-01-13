import React from 'react';
import './Home.scss';
import Promo from './Promo/Promo.jsx';
import Services from './Services/Services.jsx';
import Clients from './Beloved_clients/Clients.jsx';
import Project from './Project/Project.jsx';

const Home = () => {
  return (
    <>

      <main>
        <Promo />
        <Services />
        <Project />
        <Clients />
      </main>

    </>
  );
}

export default Home;
