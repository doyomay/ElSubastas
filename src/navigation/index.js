import React from 'react';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from 'react-native-ui-kitten';
import HomeScreen from '../containers/HomeScreen';
import SettingsScreen from '../containers/SettingsScreen';

const DashboardIcon = (style) => (
    <Icon {...style} name='layout'/>
);

const SettingsIcon = (style) => (
    <Icon {...style} name='settings'/>
);


const TabBarComponent = ({navigation}) => {
    const onSelect = (index) => {
        const {[index]: selectedTabRoute} = navigation.state.routes;
        navigation.navigate(selectedTabRoute.routeName);
    };
    return (
        <SafeAreaView>
            <BottomNavigation selectedIndex={navigation.state.index} onSelect={onSelect}>
                <BottomNavigationTab title='HOME' icon={DashboardIcon}/>
                <BottomNavigationTab title='SETTINGS' icon={SettingsIcon}/>
            </BottomNavigation>
        </SafeAreaView>
    );
};

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Settings: SettingsScreen,
}, {
    tabBarComponent: TabBarComponent,
});

export default createAppContainer(TabNavigator);