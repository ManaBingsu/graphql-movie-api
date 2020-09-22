export const people = [
    {
        id: "0",
        name:"HyunSeok0",
        age: 21,
        gender: "female"
    },
    {
        id: "1",
        name:"HyunSeok1",
        age: 22,
        gender: "female"
    },
    {
        id: "2",
        name:"HyunSeok2",
        age: 23,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => String(id) === person.id);
    return filteredPeople[0];
}
