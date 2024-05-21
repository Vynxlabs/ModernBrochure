module.exports = (id) => {
    if(id[0]==='#'){
        return id
    }
    return `#${id}`

};