import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

// export const LoginPage = (props) =>  (
//     <div>
//       <button onClick={props.startLogin}>Login</button>
//     </div>
//   );
//

//destructure props and connect LoginPage to redux store
export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
