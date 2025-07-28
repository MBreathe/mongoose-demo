import {User} from './models.js'
import dbConnect from './connection.js'
import mongoose from 'mongoose'

async function searchUsers(query = null) {
    await dbConnect();

    let searchQuery = {};
    if (query) searchQuery = {
        $or: [
            { username: new RegExp(query, 'i')},
            { 'profile.first_name': new RegExp(query, 'i')},
            { 'profile.last_name': new RegExp(query, 'i')}
        ]
    }
    return User.find(searchQuery);
}

searchUsers("br")
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => mongoose.connection.close());