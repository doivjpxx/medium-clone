import Editor from '../../../components/pages/author/Editor'
import {addArticle} from '../../../actions/author.action'
import { connect } from 'react-redux';
const mapDispatchToProps={
    addArticle
}
export default connect(null,mapDispatchToProps)(Editor)