import ClapIcon from '../../../components/pages/post/ClapIcon'
import {connect} from 'react-redux'
import {clap} from '../../../actions/post.action'

const mapDispatchToProps={
    clap
}
const mapStateToProps = state =>({
    clapCount: state.clap,
    article : state.article
})
export default connect(mapStateToProps,mapDispatchToProps)(ClapIcon)
