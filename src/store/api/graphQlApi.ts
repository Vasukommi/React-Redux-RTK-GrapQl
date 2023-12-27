import { gql } from "@apollo/client";

export const getLocations = gql`
query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const getDogs = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;


export const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;


export const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;