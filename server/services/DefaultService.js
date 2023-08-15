/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a new student
*
* createNewStudentRequest CreateNewStudentRequest 
* returns student
* */
const createNewStudent = ({ createNewStudentRequest }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        createNewStudentRequest,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get a student
*
* returns student
* */
const studentGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createNewStudent,
  studentGET,
};
