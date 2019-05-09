import {connect} from 'react-redux'
import Article from '../../../components/pages/post/Article'
import * as action from '../../../actions/home.action'
const mapStateToProps= state =>({
    article: state. article
})
export default connect(mapStateToProps,action)(Article)