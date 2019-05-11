import {connect} from 'react-redux'
import Header from '../../../components/layout/header/Header'
import * as action from '../../../actions/Login.action'

const mapStateToProps =state =>({
    checkLogin: state.checkLogin,
    user:state.user
})


export default connect(mapStateToProps,action)(Header)