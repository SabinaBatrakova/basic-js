const { NotImplementedError } = require("../lib");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  //throw new NotImplementedError('Not implemented');
  /*
  const chars = [...String(email)];

  for (let i = 0; i < chars.length; i++) {
    let copy = [...chars];
    const findIndex = copy.lastIndexOf("@");
    copy.slice(copy[0], findIndex);
    return String(copy.join());
  }*/

  const charsOfEmail = String(email).trim();
  const findIndex = charsOfEmail.lastIndexOf("@");
  return charsOfEmail.slice(findIndex + 1);
}

module.exports = {
  getEmailDomain,
};
