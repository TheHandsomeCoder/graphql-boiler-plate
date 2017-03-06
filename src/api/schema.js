import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';
import {schema as FencerSchema, resolvers as FencerResolvers} from './models/fencer/FencerSchema';
import {schema as ClubSchema, resolvers as ClubResolvers} from './models/club/ClubSchema';
import {schema as CompetitionSchema, resolvers as CompetitionResolvers} from './models/competition/CompetitionSchema';

const schema = `
# the schema allows the following query:
type Query {
 fencers: [Fencer]
 clubs: [Club]
 competitions: [Competition]
}
`;

export default makeExecutableSchema({
  typeDefs: [schema, FencerSchema, ClubSchema, CompetitionSchema],
  resolvers: merge(FencerResolvers, ClubResolvers, CompetitionResolvers),
});
