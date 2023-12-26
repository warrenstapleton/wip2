import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {typeDefs} from './schema/typeDefs.generated.js';
import {resolvers} from './schema/resolvers.generated.js';

// interface MyContext {
//     token?: String;
// }
import { makeExecutableSchema } from '@graphql-tools/schema'


// const mySchema = makeExecutableSchema({
//     typeDefs,
//     resolvers, // optional
//     myLogger, // optional
//     resolverValidationOptions: {}, // optional
//     parseOptions: {}, // optional
//     inheritResolversFromInterfaces: false // optional
// })

console.log("Hi Bryan 1")
const server = new ApolloServer({
    typeDefs,
    resolvers,
    logger: myLogger
};
console.log("Hi Bryan 2")

const {url} = await startStandaloneServer(server, {
    // context: async ({req}) => ({token: req.headers.token}),
    listen: {port: 4000}
});

console.log(`Server ready at ${url}`);

