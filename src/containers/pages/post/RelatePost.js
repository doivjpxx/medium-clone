import {connect} from 'react-redux'
import RelatedPost from '../../../components/pages/post/RelatedPost'
import * as action from '../../../actions/home.action'
const mapStateToProps=state=>({
    toplist: state.toplist
})
export default connect(mapStateToProps,action)(RelatedPost)