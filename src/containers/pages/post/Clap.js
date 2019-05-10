import ClapIcon from '../../../components/pages/post/ClapIcon'
import {connect} from 'react-redux'
import * as action from '../../../actions/post.action'

const mapStateToProps = state =>({
    clapCount: state.clap
})
export default connect(mapStateToProps,action)(ClapIcon)
