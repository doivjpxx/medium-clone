import Home from '../../components/pages/home/Home'
//import getList from '../../actions/home.action'
import {connect} from 'react-redux'

// const mapDispacthToProps ={
//     getList : getList
// }
const mapStateToProps = state => ({
    listUser: state.listUser
  });

export default connect(mapStateToProps)(Home)