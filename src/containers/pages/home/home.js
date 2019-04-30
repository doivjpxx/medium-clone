import Home from '../../../components/pages/home/Home'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    listUser: state.listUser
  });

export default connect(mapStateToProps)(Home)