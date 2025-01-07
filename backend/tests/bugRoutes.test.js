process.env.PORT = 4000;
const request = require('supertest');
const app = require('../server');

describe('Bug Routes', () => {
  it('should create a new bug', async () => {
    const res = await request(app)
      .post('/api/bugs/create')
      .send({
        title: 'Bug 1',
        description: 'Sample bug for testing',
        status: 'Open',
        assignedTo: 'John Doe',
        priority: 'High',
        createdBy: 'Admin',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Bug 1');
  });

  it('should create another bug', async () => {
    const bugs = [
      { title: 'Bug 2', description: 'Login page crash', status: 'Open', assignedTo: 'Alice', priority: 'Medium', createdBy: 'Admin' },
      { title: 'Bug 3', description: 'UI glitch in dashboard', status: 'In Progress', assignedTo: 'Bob', priority: 'Low', createdBy: 'Admin' },
      { title: 'Bug 4', description: 'Payment gateway issue', status: 'Open', assignedTo: 'Charlie', priority: 'High', createdBy: 'Admin' },
      { title: 'Bug 5', description: 'Email notifications not working', status: 'Closed', assignedTo: 'David', priority: 'Medium', createdBy: 'Admin' },
      { title: 'Bug 6', description: 'Slow page load time', status: 'In Progress', assignedTo: 'Eve', priority: 'High', createdBy: 'Admin' },
    ];

    for (const bug of bugs) {
      const res = await request(app)
        .post('/api/bugs/create')
        .send(bug);

      expect(res.statusCode).toBe(201);
      expect(res.body.title).toBe(bug.title);
    }
  });

  it('should fetch all bugs', async () => {
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
