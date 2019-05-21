import Comment from '../../../components/pages/post/Comment'
import {connect} from 'react-redux'
import {postCommentArticle} from '../../../actions/post.action'
const mapDispatchToProps = {
    postCommentArticle
}
const mapStateToProps = state => ({
    article:state.article,
    user:state.user
})

export default connect(mapStateToProps,mapDispatchToProps)(Comment)