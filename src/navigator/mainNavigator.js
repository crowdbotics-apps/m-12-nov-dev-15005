import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen614440Navigator from '../features/BlankScreen614440/navigator';
import BlankScreen414437Navigator from '../features/BlankScreen414437/navigator';
import BlankScreen214396Navigator from '../features/BlankScreen214396/navigator';
import BlankScreen114377Navigator from '../features/BlankScreen114377/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen614440: { screen: BlankScreen614440Navigator },
BlankScreen414437: { screen: BlankScreen414437Navigator },
BlankScreen214396: { screen: BlankScreen214396Navigator },
BlankScreen114377: { screen: BlankScreen114377Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
