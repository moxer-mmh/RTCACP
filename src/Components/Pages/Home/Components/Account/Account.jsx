import PropTypes from 'prop-types';

function Account({ account }) {
  if (!account) return null;

  return (
    <div>
      <h1>Account</h1>
      <p>Name: {account.name}</p>
      <p>Email: {account.email}</p>
    </div>
  );
}

Account.propTypes = {
  account: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Account;