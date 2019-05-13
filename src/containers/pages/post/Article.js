import {connect} from 'react-redux'
import Article from '../../../components/pages/post/Article'
import {follow,unfollow}  from '../../../actions/post.action'
import {detailArticle}  from '../../../actions/home.action'
const mapDispatchToProps={
    detailArticle,follow, unfollow
}
const mapStateToProps= state =>({
    article: state. article,
    user:state.user,
    follow:state.follow,
})
export default connect(mapStateToProps,mapDispatchToProps)(Article)