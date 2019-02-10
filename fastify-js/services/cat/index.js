module.exports = async function (fastify, opts) {
    fastify.get('/cat',
        async (request, reply) => {
            return fastify.catService.findAll();
        }),

    fastify.post('/cat', 
        {
            schema: {
                body: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        color: { type: 'string'},
                        age: { type: 'integer'},
                    }
                }
            }
        },
        async (request, reply) => {
            return fastify.catService.create(request.body);
        }
    ),

        fastify.get('/cat/:id', 
        async (request, reply) => {
            return fastify.catService.findOne(request.params.id);
        }
    )
}