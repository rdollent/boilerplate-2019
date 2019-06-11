const graphql = require('graphql');
const User = require('../models/User');
// const Author = require('../models/author');
// const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: ( ) => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString }
        // ,
        // author: {
        //     type: AuthorType,
        //     resolve(parent, args){
        //         return Author.findById(parent.authorId);
        //     }
        // }
    })
});

// const AuthorType = new GraphQLObjectType({
//     name: 'Author',
//     fields: ( ) => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         age: { type: GraphQLInt },
//         books: {
//             type: new GraphQLList(BookType),
//             resolve(parent, args){
//                 return Book.find({ authorId: parent.id });
//             }
//         }
//     })
// });

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return User.findAll();
                // User.findById(args.id);
                // insert model pg-promise method
            }
        },
        // author: {
        //     type: AuthorType,
        //     args: { id: { type: GraphQLID } },
        //     resolve(parent, args){
        //         return Author.findById(args.id);
        //     }
        // },
        books: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return User.find({});
            }
        }
        // ,
        // authors: {
        //     type: new GraphQLList(AuthorType),
        //     resolve(parent, args){
        //         return Author.find({});
        //     }
        // }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // addAuthor: {
        //     type: AuthorType,
        //     args: {
        //         name: { type: GraphQLString },
        //         age: { type: GraphQLInt }
        //     },
        //     resolve(parent, args){
        //         let author = new Author({
        //             name: args.name,
        //             age: args.age
        //         });
        //         return author.save();
        //     }
        // },
        addUser: {
            type: UserType,
            args: {
                username: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) }
                // ,
                // authorId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args){
                let user = new User({
                    username: args.username,
                    email: args.email
                    // ,
                    // authorId: args.authorId
                });
                return user.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});