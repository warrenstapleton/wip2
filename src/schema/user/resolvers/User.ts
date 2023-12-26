import type   { UserResolvers } from './../../types.generated.js';
    export const User: UserResolvers = {
        fullName: ({firstName, lastName}) => `${firstName} ${lastName}`,
        isAdmin: ({ isAdmin }) => isAdmin === 'YES'
    /* Implement User resolver logic here */
    };