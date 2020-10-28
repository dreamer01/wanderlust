import {gql} from '@apollo/client';

export const FETCH_CONTINENTS = gql`
  {
    __type(name: "Continent") {
      enumValues {
        name
      }
    }
  }
`;

export const FETCH_COUNTRIES = gql`
  query fetchCountries {
    queryCountry {
      name
      cover
    }
  }
`;

export const FETCH_CONTINENT_CITIES = gql`
  query fetchCities($continent: Continent!) {
    queryCountry(filter: {continent: {eq: $continent}}) {
      cities {
        name
        cover
        description
        country {
          name
        }
      }
    }
  }
`;

export const FETCH_HOTELS = gql`
  query fetchHotels {
    queryHotel(first: 10) {
      id
      description
      name
      cover
      location {
        name
      }
    }
  }
`;

export const SEARCH_HOTELS = gql`
  query searchHotels($cityName: String!) {
    queryCity(filter: {name: {anyoftext: $cityName}}) {
      stays {
        name
        description
        cover
        location {
          name
        }
      }
    }
  }
`;

export const FETCH_GROUPS = gql`
  query fetchChatGroups {
    queryGroups {
      id
      name
      cover
    }
  }
`;
