import { LoginScreenProps} from './../../types';
//Components
import RegisterForm from './../components/auth/RegisterForm'


const LoginScreen = ({ navigation }: LoginScreenProps) => {
    return (
        <RegisterForm navigation={navigation}/>
    )

}
export default LoginScreen