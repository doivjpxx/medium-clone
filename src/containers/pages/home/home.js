import Home from '../../../components/pages/home/Home'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    listUser: state.list
  });

export default connect(mapStateToProps)(Home)