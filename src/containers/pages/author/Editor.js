import Editor from '../../../components/pages/author/Editor'
import * as action from '../../../actions/home.action'
import { connect } from 'react-redux';

export default connect(null,action)(Editor)