import {connect} from 'react-redux'
import AuthorPost from '../../../components/pages/author/AuthorPost'
import {deleteArticle} from "../../../actions/post.action";
const mapDispatchToProps={
    deleteArticle,
}


export default connect(null, mapDispatchToProps)(AuthorPost)