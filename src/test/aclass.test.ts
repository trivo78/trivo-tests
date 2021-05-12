import { miniGun } from '../aclass'
import { expect } from 'chai';
import 'mocha';

describe('miniGun Aim', () => {

  it('should return hello world', () => {
    var x = new miniGun(10);
    var irr : number = x.roundCount();
    expect(irr).to.equal(10);


    var b : boolean = x.shoot();
    expect(b).to.be.true;
    irr  = x.roundCount();
    expect(irr).to.equal(10);
    irr  = x.rounds();
    expect(irr).to.equal(9);

  });

});