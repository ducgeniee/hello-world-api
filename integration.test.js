// integration.test.js

const request = require('supertest');
const app = require('./index');

const testPort = 3001; // Use a different port for testing

describe('Integration Tests', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(testPort, () => {
      console.log(`Test server is running on port ${testPort}`);
      done();
    });
  });

  afterAll((done) => {
    server.close(done);
  });

  it('GET / should return "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
