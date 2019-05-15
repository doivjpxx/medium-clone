import Home from '../../../components/pages/home/Home'
import {connect} from 'react-redux'
import * as action from '../../../actions/home.action'

const mapStateToProps = state => ({
    list: state.list,
    toplist: state.toplist,
    loadingHome:state.loadingHome
  });

export default connect(mapStateToProps,action)(Home)