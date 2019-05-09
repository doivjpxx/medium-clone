import PostItemAllPost from '../../../../components/pages/home/allPost/PostItem'
import {connect} from 'react-redux'
import * as action from '../../../../actions/home.action'

export default connect(null,action)(PostItemAllPost)