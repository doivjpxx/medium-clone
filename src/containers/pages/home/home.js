import Home from '../../../components/pages/home/Home'
import {connect} from 'react-redux'
import * as action from '../../../actions/home.action'

const mapStateToProps = state => ({
    allArticle: state.allArticle,
    topArticle: state.topArticle,
    loadingHome:state.loadingHome
  });

export default connect(mapStateToProps,action)(Home)