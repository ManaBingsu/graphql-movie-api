const hyunseok = {
    name: "HyunSeok",
    age: 21,
    gender: "female"

}

const resolvers = {
    Query: {
        person:() => hyunseok
    }
}

export default resolvers;
