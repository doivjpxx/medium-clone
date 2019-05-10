import {connect} from 'react-redux'
import Header from '../../../components/layout/header/Header'


const mapStateToProps =state =>({
    checkLogin: state.checkLogin
})


export default connect(mapStateToProps)(Header)