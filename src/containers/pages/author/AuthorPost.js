import {connect} from 'react-redux'
import AuthorPost from '../../../components/pages/author/AuthorPost'
import * as action from "../../../actions/author.action";
// const mapDispatchToProps={
//     deleteArticle,getMyArticle
// }
const mapStateToProps=state=>({
    myArticle: state.myArticle
})

export default connect(mapStateToProps,action)(AuthorPost)