const sessionToUserMap = new Map();

const setUser = (id, user) => {
    sessionToUserMap.set(id, user);
    // console.log(sessionToUserMap);
}

const getUser = (id) => {
    return sessionToUserMap.get(id)
}

module.exports = {
    setUser,
    getUser
}