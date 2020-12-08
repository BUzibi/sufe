export const concat = (list, item) => {
    return list.concat(item);
};

export const delById = (list, id) => {
    const idx = list.findIndex(({id: _id}) => _id === id);
    if (idx > -1) {
        list.splice(idx, 1);
    }
    return [...list];
};