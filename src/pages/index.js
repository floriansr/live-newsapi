import * as React from 'react';
import { useEffect } from 'react';

import APIManager from 'services/APIManager';

const Home = () => {
  useEffect(() => {
    const fetch = async () => {
      const res = await APIManager.getDatas();
      console.log('Home -> res', res);
    };

    fetch();
  }, []);
  return (
    <>
      <h3>Hello world !</h3>
    </>
  );
};

export default Home;
