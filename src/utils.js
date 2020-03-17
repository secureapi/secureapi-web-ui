import md5 from 'md5';

export const getGravatarURL = (email = '') => {
  const hashedEmail = md5(email.toLowerCase());
  return `https://www.gravatar.com/avatar/${hashedEmail}`;
}