import { GraphQLError } from 'graphql';

export function formatError(err: GraphQLError) {
  const { message } = err;
  return { message };
}
