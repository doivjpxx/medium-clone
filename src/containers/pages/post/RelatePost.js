import {connect} from 'react-redux'
import RelatedPost from '../../../components/pages/post/RelatedPost'
import * as action from '../../../actions/home.action'
const mapStateToProps=state=>({
    list: state.list
})
export default connect(mapStateToProps,action)(RelatedPost)