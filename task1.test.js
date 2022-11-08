

const task1 = require("./task1");

test("Testing sum", () => {
    expect(task1.sum(1,2)).toBe(3);
});


test("Testing sub", () => {
    expect(task1.sub(2,1)).toBe(1);
});

test("Testing sub", () => {
    expect(task1.sub(1,2)).toBe(-1);
});


test("Testing mul", ()=> {
    expect(task1.mul(1,2)).toBe(2);
});


test("Testing div", () => {
    expect(task1.div(2,1)).toBe(2);
});

test("Testing div", () => {
    expect(task1.div(2,0)).toBe("Math Error");
});

