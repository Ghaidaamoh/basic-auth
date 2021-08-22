'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);


describe('my API Server', ()=> {

  it('Sign in', async () => {
   
    const response = await request.post('/signin').auth('testing','1234'); 
    expect(response.status).toEqual(200);
  });

  it('Sign up', async () => {
    let newObj ={
      username:'testing',
      password:'1234',
    };
    const response = await request.post('/signup').send(newObj); 
    expect(response.status).toEqual(200);
  });
});