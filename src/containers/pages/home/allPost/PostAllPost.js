import {connect} from 'react-redux'
import PostAllPost from '../../../../components/pages/home/allPost/PostAllPost'

const mapStateToProps=state=>({
    list:state.list
})

export default connect(mapStateToProps)(PostAllPost)