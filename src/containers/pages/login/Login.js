import Login from '../../../components/pages/login/Login'
import {connect} from 'react-redux'
import {SignIn,SignUp} from '../../../actions/Login.action'

const mapDispatchToProps={
 SignIn, SignUp
}
const mapStateToProps= state=>({checkLogin:state.checkLogin})

export default connect(mapStateToProps,mapDispatchToProps)(Login)