async function isValidToken() {
  try {
    throw new Error('invalid_grant');
  } catch (error) {
    console.error(error);
    throw new Error('Your account invalid grant. Please login.');
  }
}

async function v1() {
  try {
    await isValidToken();
  } catch (error) {
    console.error(error);
    return;
  }

  console.log('Do something');
}

export { v1 };
