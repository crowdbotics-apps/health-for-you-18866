import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList77898Navigator from '../features/NotificationList77898/navigator';
import Settings77897Navigator from '../features/Settings77897/navigator';
import Settings77889Navigator from '../features/Settings77889/navigator';
import UserProfile77887Navigator from '../features/UserProfile77887/navigator';
import Settings77851Navigator from '../features/Settings77851/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
NotificationList77898: { screen: NotificationList77898Navigator },
Settings77897: { screen: Settings77897Navigator },
Settings77889: { screen: Settings77889Navigator },
UserProfile77887: { screen: UserProfile77887Navigator },
Settings77851: { screen: Settings77851Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
