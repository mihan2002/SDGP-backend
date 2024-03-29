const request = require('supertest');
const app = require('./index');

describe('POST /dataGetUser', () => {
  // Test case for successful retrieval of user data
  it('should return user data when valid credentials are provided', async () => {
    const response = await request(app)
      .post('/dataGetUser')
      .send({ email: 'mihanamajith20@gmail.com', password: 'mihan123' });

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0); // Check if the response is not empty
   
  });

  // Test case for handling invalid credentials
  it('should return an error when invalid credentials are provided', async () => {
    const response = await request(app)
      .post('/dataGetUser')
      .send({ email: 'invalid@example.com', password: 'invalidpassword' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(0);

  });

});

// Test case for successful adding of new user data
describe('POST /dataAddUser', () => {
    it('should add user data successfully', async () => {
      const userData = {
        Fname: 'John',
        Lname: 'Doe',
        nameOfThePet: 'Max',
        petType: 'Dog',
        gender: 'Male',
        email: 'john.doe@example.com',
        mobileNumber: '1234567890',
        password: 'password123',
      };
  
      const response = await request(app)
        .post('/dataAddUser')
        .send(userData);
  
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Data added successfully');
    });
});

