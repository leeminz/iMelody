import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './drawer-navigator';

const NavigationApp = React.forwardRef((props: any, ref: any) => {
  const renderStackApp = () => {
    return <DrawerNavigator />;
  };

  return (
    <NavigationContainer ref={ref}>{renderStackApp()}</NavigationContainer>
  );
});

export {NavigationApp};
