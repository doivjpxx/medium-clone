import ClapIcon from '../../../components/pages/post/ClapIcon'
import {connect} from 'react-redux'
import {clap} from '../../../actions/post.action'

const mapStateToProps = state =>({
    //clap: state.clap
})
export default connect(mapStateToProps)(ClapIcon)
