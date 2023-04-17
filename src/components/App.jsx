import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserRoutes from './Routes/UserRoutes';
import Header from './Header';
import ErrorMessage from './Shared/ErrorMessage/ErrorMessage';
import { getError } from 'redux/user/user-selectors';

export const App = () => {
  const error = useSelector(getError);
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    if (error) {
      setErrMessage(error);
    } else {
      setErrMessage('');
      return;
    }
  }, [error]);

  return (
    <>
      <Header />
      <main>
        {errMessage !== '' && <ErrorMessage text={`${errMessage}`} />}
        <UserRoutes />
      </main>
    </>
  );
};
