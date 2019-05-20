import Comment from '../../../components/pages/post/Comment'
import {connect} from 'react-redux'
import {postCommentArticle,detailArticle} from '../../../actions/post.action'
import {detailUser} from '../../../actions/Login.action'
const mapDispatchToProps = {
    postCommentArticle,detailArticle,detailUser
}
const mapStateToProps = state => ({
    comments: state.comments,
    article:state.article,
    user:state.user
})

export default connect(mapStateToProps,mapDispatchToProps)(Comment)