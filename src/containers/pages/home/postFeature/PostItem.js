import {connect} from 'react-redux'
import PostItemFeature from '../../../../components/pages/home/postFeature/PostItem'
import * as action from '../../../../actions/home.action'

export default connect(null,action)(PostItemFeature)