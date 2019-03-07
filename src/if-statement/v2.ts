async function isValidToken(mockValid: boolean) {
  try {
    if (mockValid) {
      return true;
    }
    throw new Error('invalid_grant');
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function v2(mockValid: boolean) {
  if (!(await isValidToken(mockValid))) {
    console.error('Your account invalid grant. Please login.');
    return;
  }
  console.log('Do something');
}

export { v2 };
