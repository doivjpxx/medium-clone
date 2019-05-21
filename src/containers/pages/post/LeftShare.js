import {connect} from 'react-redux'
import LeftShare from '../../../components/pages/post/LeftShare'
const mapStateToProps = state => ({
    article: state.article
})

export default connect(mapStateToProps)(LeftShare)