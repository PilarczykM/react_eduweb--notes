const isEmpty = (string) => string.trim() === '';

const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

exports.validateLoginData = (data) => {
  const errors = {};

  if (isEmpty(data.email)) errors.email = 'Must not be empty!';
  if (isEmpty(data.password)) errors.password = 'Must not be empty!';

  if (isEmpty(data.email)) {
    errors.email = 'Must not be empty!';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Must be a valid email address!';
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};

exports.validateSignUpData = (data) => {
  const errors = {};

  if (
    data.email === undefined
    || data.password === undefined
    || data.confirmPassword === undefined
    || data.userName === undefined
  ) {
    errors.body = 'Must not be empty!';
  }

  if (isEmpty(data.email)) {
    errors.email = 'Must not be empty!';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Must be a valid email address!';
  }

  if (isEmpty(data.password)) {
    errors.password = 'Must not be empty';
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }

  if (isEmpty(data.userName)) errors.userName = 'Must not be empty!';

  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};
