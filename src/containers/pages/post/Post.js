import {connect} from 'react-redux'
import Post from '../../../components/pages/post/Post'
import * as action from '../../../actions/home.action'
const mapStateToProps= state =>({
    article: state. article
})
export default connect(mapStateToProps,action)(Post)