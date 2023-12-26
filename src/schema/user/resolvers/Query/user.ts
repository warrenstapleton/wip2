import type   { QueryResolvers } from './../../../types.generated.js';
        export const user: NonNullable<QueryResolvers['user']> = async (_parent, _arg, _ctx) => {
                return { id: '123', firstName: 'Warren', lastName: 'Stapleton', isAdmin: 'YES'}
        };