//process.env.PORT = 4000;
const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const User = require('../models/User');

describe('User Routes', () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('User registered successfully');
  });

  it('should login a user', async () => {
    // Create a user using the `save()` method to ensure password hashing
    const user = new User({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password123',
    });
    await user.save();

    const res = await request(app)
      .post('/api/users/login')
      .send({
        email: 'testuser@example.com',
        password: 'password123',
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeTruthy();
  });
});
