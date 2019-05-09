import PostItemAllPost from '../../../../components/pages/home/allPost/PostItem'
import {connect} from 'react-redux'
import * as action from '../../../../actions/home.action'
const mapStateToProps = state => ({
    article: state.article
})
export default connect(mapStateToProps,action)(PostItemAllPost)