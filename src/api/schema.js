import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';
import {schema as FencerSchema, resolvers as FencerResolvers} from './models/fencer/FencerSchema';
import {schema as ClubSchema, resolvers as ClubResolvers} from './models/club/ClubSchema';

const schema = `
# the schema allows the following query:
type Query {
 fencers: [Fencer]
 clubs: [Club]
}
`;

export default makeExecutableSchema({
  typeDefs: [schema, FencerSchema, ClubSchema],
  resolvers: merge(FencerResolvers, ClubResolvers),
});
