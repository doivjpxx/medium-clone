import Home from '../../../components/pages/home/Home'
import {connect} from 'react-redux'
//import {listArticles} from '../../../actions/home.action'
import * as action from '../../../actions/home.action'

const mapStateToProps = state => ({
    list: state.list
  });

export default connect(mapStateToProps,action)(Home)