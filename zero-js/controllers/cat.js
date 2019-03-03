module.exports = {
    POST: async (req) => {
        return await create(req.body);
    },
    GET: async (req) => {
        return req.params[0] ? await get(req.params[0]) : await getAll();
    }
}

function getAll() {
    return [{ name: 'Peter', color: 'Orange'}, { name: 'Tigerlilly', color: 'Grey'}];
}

function get(name) {
    return { name: name, color: 'n/a' };
}

function create(cat) {
    console.log('created', cat);
    cat.id = 42;
    return cat;
}