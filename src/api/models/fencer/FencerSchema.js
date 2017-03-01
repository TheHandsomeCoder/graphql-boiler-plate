import {clubs} from '../club/ClubSchema';
import { filter } from 'lodash';

export const fencers = [
    { id: 1, firstName: 'Tom', lastName: 'Coleman', clubID: 1 },
    { id: 2, firstName: 'Sashko', lastName: 'Stubailo', clubID: 2 },
];

export const schema = `
enum Gender {
  MALE
  FEMALE
}

type Fencer {
  id: Int!
  firstName: String
  lastName: String
  displayName: String
  gender: Gender!
  club: [Club]
}
`;

export const resolvers = {
    Query: {
        fencers() {
            return fencers;
        },
    },
    Fencer: {
        club(fencer) {
            return filter(clubs, { id: fencer.clubID });
        },
        displayName(fencer) { return `${fencer.firstName} ${fencer.lastName}`; },
    }
};