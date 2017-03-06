export const competitions = [
    { id: 1, name: 'East of Ireland Open', shortName: 'EOI' },
    { id: 2, name: 'Irish Open', shortName: 'IO' },
    { id: 3, name: 'South of Ireland Open', shortName: 'SOI'},
    { id: 4, name: 'West of Ireland Open', shortName: 'WOI' },
];

export const schema = `
type Competition {
    id: Int!
    name: String
    shortName: String
}
`;

export const resolvers = {
    Query: {
        competitions() {
            return competitions;
        },
    }
};