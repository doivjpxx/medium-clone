import {connect} from 'react-redux'
import PostItemFeature from '../../../../components/pages/home/postFeature/PostItem'
import * as action from '../../../../actions/Login.action'

const mapStateToProps=state=>({
    user:state.user
})
export default connect(mapStateToProps,action)(PostItemFeature)