import PropTypes from 'prop-types';

function Profile({ account }) {
  if (!account) return null;

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {account.name}</p>
      <p>Email: {account.email}</p>
    </div>
  );
}

Profile.propTypes = {
  account: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;