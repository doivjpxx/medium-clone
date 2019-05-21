import ClapIcon from '../../../components/pages/post/ClapIcon'
import {connect} from 'react-redux'
import {clap} from '../../../actions/post.action'

const mapDispatchToProps={
    clap
};
const mapStateToProps = state =>({
    clapCount: state.claps,
    article : state.article
});
export default connect(mapStateToProps,mapDispatchToProps)(ClapIcon)
