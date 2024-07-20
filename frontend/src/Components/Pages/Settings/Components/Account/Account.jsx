import { useState } from "react";
import PropTypes from "prop-types";

function Account({ account }) {
  const [name, setName] = useState(account.name);
  const [email, setEmail] = useState(account.email);
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setName(account.name);
    setEmail(account.email);
    setIsEditing(false);
  };

  const handleSave = () => {
    // Perform save operation here, e.g., update the user info in the database
    setIsEditing(false);
  };

  return (
    <div className="account">
      {isEditing ? (
        <>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <div>
            <strong>Name:</strong> {name}
          </div>
          <div>
            <strong>Email:</strong> {email}
          </div>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

Account.propTypes = {
  account: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default Account;
