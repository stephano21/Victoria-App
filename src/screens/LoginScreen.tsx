import { LoginScreenProps} from './../../types';
//Components
import LoginForm from './../components/auth/LoginForm'



const LoginScreen = ({ navigation }: LoginScreenProps) => {

    return(
        <LoginForm navigation={navigation}/>
    )
    
}
export default LoginScreen


