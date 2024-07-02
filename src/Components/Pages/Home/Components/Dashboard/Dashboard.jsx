import PropTypes from 'prop-types';

function Dashboard({ account }) {
  if (!account) return null;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {account.name}!</p>
      <p>Your email: {account.email}</p>
    </div>
  );
}

Dashboard.propTypes = {
  account: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Dashboard;