import Login from '../../../components/pages/login/Login'
import {connect} from 'react-redux'
import {SignIn,SignUp} from '../../../actions/Login.action'

const mapDispatchToProps={
 SignIn, SignUp
}
const mapStateToProps= state=>({validated:state.userLogin})

export default connect(mapStateToProps,mapDispatchToProps)(Login)