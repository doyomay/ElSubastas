import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';
import AppNavigator from './src/navigation';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default () => (
    <React.Fragment>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <AppNavigator/>
        </ApplicationProvider>
    </React.Fragment>
)
