import { find, filter } from 'lodash';

const fencers = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman', clubID: 1 },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo', clubID: 2 },
];

const clubs = [
  { id: 1, name: 'Salle Dublin' },
  { id: 2, name: 'UCD' },
  { id: 3, name: 'DUFC' },
];

const resolveFunctions = {
  Query: {
    fencers() {
      return fencers;
    },
    clubs() {
      return clubs;
    },
  },
  // Mutation: {
  //   upvotePost(_, { postId }) {
  //     const post = find(posts, { id: postId });
  //     if (!post) {
  //       throw new Error(`Couldn't find post with id ${postId}`);
  //     }
  //     post.votes += 1;
  //     pubsub.publish('postUpvoted', post);
  //     return post;
  //   },
  // },
  Fencer: {
    club(fencer) {
      return find(clubs, { id: fencer.clubID });
    },
    displayName(fencer) { return `${fencer.firstName} ${fencer.lastName}`; },
  },
  Club: {
    fencers(club) {
      return filter(fencers, { clubID: club.id });
    },
  },
};

export default resolveFunctions;
