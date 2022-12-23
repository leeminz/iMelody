import React, {useImperativeHandle, useState} from 'react';
import {Loading} from './Loading';

const GlobalUI = React.forwardRef((props, ref) => {
  const [isLoading, setLoading] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      showLoading,
      hideLoading,
    }),
    [],
  );

  const showLoading = () => {
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
  };
  return <Loading isLoading={isLoading} />;
});

export {GlobalUI};
