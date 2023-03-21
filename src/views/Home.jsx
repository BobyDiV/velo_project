const React = require('react');
const Layout = require('./Layout');

function Home(props) {
  const { user } = props;
  return (
    <Layout {...props}>
      {user?.userName ? (
        <div>
          Hello {user?.userName}!<button id='logoutBtn'>Logout</button>
        </div>
      ) : (
        <>
          <h1>Welcome to the project</h1>
          <button id='loginBtn'>Login</button>
          <button id='regBtn'>Registration</button>
        </>
      )}
      <script src='/js/homeScript.js'></script>
    </Layout>
  );
}

module.exports = Home;
