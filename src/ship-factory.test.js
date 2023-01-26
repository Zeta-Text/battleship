import ship from './ship-factory'

let ship1 = '';
let ship2 = '';
let ship3 = '';

beforeEach(() => {
    ship1 = ship(1);
    ship2 = ship(2);
    ship3 = ship(3);
})

test("hit function updates the timesHit prop", () => {
    expect(ship1.hit()).toBe(1)
});

test("isSunk function sinks ship", () => {
    
    ship1.hit();
    expect(ship1.isSunk()).toBe(true);

    ship2.hit();
    ship2.hit();
    expect(ship2.isSunk()).toBe(true);

    ship3.hit();
    ship3.hit();
    expect(ship3.isSunk()).toBe(false);

    

})


