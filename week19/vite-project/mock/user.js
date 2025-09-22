let userData = [
    {id: 1, name: 'minddoi'},
    {id: 2, name: 'xaerinoo'},
    {id: 3, name: '2zooo0'},
];

// 나중에 요청할 API
let currentId = 3;

export default [
    {
        url: '/api/users',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: 'success',
                data: userData,
            }
        }
    },

    {
        url: '/api/users',
        method: 'post',
        response: ( { } ) => {
            currentId += 1;
            const newUser = {
                id: currentId,
                name: `likelion ${currentId}`,
            };
            userData.push(newUser);
            return {
                code: 201,
                message: 'user created',
                data: newUser,
            }
        },
    },

    {
        url: '/api/users',
        method: 'delete',
        response: ( { query } ) => {
            const id = Number(query.id);
            userData = userData.filter((u) => u.id !== id);
            return {
                code: 200,
                message: 'deleted',
            }
        },
    },
]