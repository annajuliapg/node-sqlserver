class User {

  constructor(body) {
    this.name = validateName(body.name);
    this.email = validateEmail(body.email);
    this.job = validateJob(body.job);
  }

};

module.exports = User;

/* Validation */
function validateName(name){
  try {
    if (name === undefined) throw new Error('Missing: name');
    else return name;
  } catch (error) {
    throw error;
  }
}
function validateEmail(email){
  try {
    if (email === undefined) throw new Error('Missing: email');
    else return email;
  } catch (error) {
    throw error;
  }
}
function validateJob(job){
  try {
    if (job === undefined) throw new Error('Missing: job');
    else return job;
  } catch (error) {
    throw error;
  }
}