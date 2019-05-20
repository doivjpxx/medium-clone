import {connect} from 'react-redux'
import RelatedPost from '../../../components/pages/post/RelatedPost'
import * as action from '../../../actions/home.action'
const mapStateToProps=state=>({
    topArticle: state.topArticle
})
export default connect(mapStateToProps,action)(RelatedPost)