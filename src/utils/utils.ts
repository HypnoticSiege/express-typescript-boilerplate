const db = [
  {
    name : 'Mattia',
    surname : 'Parisi',
    email : 'mattiaparisi@gmail.com',
    id : 0
  },
  {
    name : 'Alessia',
    surname : 'Ciccarello',
    email : 'alessiaciccarello@gmail.com',
    id : 1
  },
  {
    name : 'Ciccio',
    surname : 'Belo',
    email : 'cicciobelo@gmail.com',
    id : 2
  },
  {
    name : 'Santo',
    surname : 'Terranova',
    email : 'santoterranova@gmail.com',
    id : 3
  },
  {
    name : 'Damiano',
    surname : 'Pulvirenti',
    email : 'damianopulvirenti@gmail.com',
    id : 4
  },
  {
    name : 'Enrico',
    surname : 'Bruno',
    email : 'enricobruno@gmail.com',
    id : 5
  },
];

/**
 * 
 * @param id ID of user to find
 * @returns User object {name, surname, email, id}
 */
const getUser = (id: Number) => {
    let user = db.find(user => user.id == id);

    return user;
};

const getAllUsers = () => {
    return db;
};

const utils = {
    getUser,
    getAllUsers
};

export default utils;