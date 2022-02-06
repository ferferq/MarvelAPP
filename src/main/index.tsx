
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { MakeShareInfoContextsProviders } from './factories/contexts/share-info-contexts-provider';
import { StackNavigator } from './routes/stack-navigator';

export function MakeApp() {
    return (
        <NavigationContainer>
            <MakeShareInfoContextsProviders>
                <StackNavigator />
                <StatusBar style='dark' />
            </MakeShareInfoContextsProviders>
        </NavigationContainer>
    )
}