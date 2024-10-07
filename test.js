import request from 'supertest';
import app from './index.js'; // Đảm bảo import đúng từ index.js
import { expect } from 'chai';

describe('POST /compare', function () {
    it('should return 1 when num1 is greater than num2', async function () {
        const res = await request(app)
            .post('/compare')
            .send({ num1: 5, num2: 3 });
        expect(res.body).to.have.property('result', 1);
    });

    it('should return -1 when num1 is less than num2', async function () {
        const res = await request(app)
            .post('/compare')
            .send({ num1: 2, num2: 5 });
        expect(res.body).to.have.property('result', -1);
    });

    it('should return 0 when num1 is equal to num2', async function () {
        const res = await request(app)
            .post('/compare')
            .send({ num1: 5, num2: 5 });
        expect(res.body).to.have.property('result', 0);
    });

    
});
