import axios from 'axios'; // should be done in own module but for sake of speed it' here

const endpoint = 'https://accuranker-test-api.herokuapp.com/api/employees';

/*
[{"image":"https://cdn.accuranker.com/images/man1.original.png","name":"Thomas Zink Mortensen","role":"Customer success manager","nationality":"DK","description":"Thomas, the guy who can sell a computer to Bill Gates and spray tan to Michael Jackson."},{"image":"https://cdn.accuranker.com/images/man3.original.png","name":"Sebastiaan van Arkens","role":"Front-end developer","nationality":"NL","description":"Probably the most normal guy in the office, never says a word and likes to zone away with headphones on."},{"image":"https://cdn.accuranker.com/images/image.original.png","name":"Angela Budd","role":"Inbound marketting specialist","nationality":"UK","description":"Cake, cake, cake and cake. One of the few women within the office and completely crazy about... cake."}]
 */

export const types = {
    LOAD: 'EMPLOYEES_LOAD'
};

export default {
    load: () => ({
        type: types.LOAD,
        payload: axios.get(endpoint)
    })
};