export const fetchGravata = async (hash) => {
  try {
    const response = await fetch(`https://www.gravatar.com/avatar/${hash}`);
    const src = await response.json();
    return src;
  } catch (error) {
    return error;
  }
};

export const fetchToken = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const token = await response.json();
  return token;
};

export const fetchAPITrivia = async (token) => {
  const request = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const questions = await request.json();
  console.log(questions);
  return questions;
};
