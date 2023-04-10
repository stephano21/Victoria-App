import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Register: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export interface LoginScreenProps {
    navigation: LoginScreenNavigationProp;
}
