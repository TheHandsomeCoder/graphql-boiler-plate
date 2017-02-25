import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const schema = `
type Fencer {
  id: Int!
  firstName: String
  lastName: String
  displayName: String
  club: Club
}

type Club {
    id: Int!
    fencers: [Fencer]
    name: String
}

# the schema allows the following query:
type Query {
 fencers: [Fencer]
 clubs: [Club]
}
`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
