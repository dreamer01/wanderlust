import {gql} from '@apollo/client';

export const GROUP_MESSAGES = gql`
  subscription subGroupMsgs($groupId: [ID!]) {
    queryGroups(filter: {id: $groupId}) {
      messages(order: {desc: time}, first: 30) {
        id
        time
        text
        user {
          email
          name
        }
      }
    }
  }
`;
