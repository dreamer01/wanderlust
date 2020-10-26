import {gql} from '@apollo/client';

export const addBooking = gql`
  mutation addBooking(
    $bookingId: String!
    $checkIn: DateTime!
    $checkOut: DateTime!
    $members: Int!
    $hotelId: ID!
    $userEmail: String!
  ) {
    addBooking(
      input: [
        {
          bookingId: $bookingId
          from: $checkIn
          to: $checkOut
          members: $members
          hotel: {id: $hotelId}
          user: {email: $userEmail}
        }
      ]
    ) {
      numUids
    }
  }
`;

// Sample Variables
// {
//   "bookingId": "FHYT23D",
//   "checkIn": "2021-02-10",
//   "checkOut": "2021-02-20",
//   "members": 2,
//   "hotelId": "0x29de",
//   "userEmail": "ajay@gmail.com"
// }

export const ADD_VISITOR = gql`
  mutation addVisitor($cityName: String!, $email: String!) {
    updateCity(
      input: {
        filter: {name: {eq: $cityName}}
        set: {visitors: [{email: $email}]}
      }
    ) {
      numUids
    }
  }
`;
