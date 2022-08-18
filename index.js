// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => { return drivers.slice(0,2)}
const returnLastTwoDrivers = () => {return drivers.slice(2,)}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


const createFareMultiplier = (n)=> {return ()=>{return n**2}}

const fareDoubler = (n)=>{ return  n + n}
const fareTripler = (n)=> {return n * 3}
const fareQuintupler = (n) => {return n*4}


const selectDifferentDrivers = (drivers,option) => { return option(drivers)}