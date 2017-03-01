import { fencers } from '../fencer/FencerSchema';
import { filter } from 'lodash';

export const clubs = [
    { id: 1, name: 'Salle Dublin' },
    { id: 2, name: 'UCD' },
    { id: 3, name: 'DUFC' },
];

export const schema = `
type Club {
    id: Int!
    fencers: [Fencer]
    name: String
}
`;

export const resolvers = {
    Query: {
        clubs() {
            return clubs;
        },
    },
    Club: {
        fencers(club) {
            return filter(fencers, { clubID: club.id });
        },
    },
};

