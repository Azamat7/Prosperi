import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const getPrice = async () => {
    let uuid = window.localStorage.getItem('uuid');
    if (!uuid) {
      uuid = uuidv4();
      window.localStorage.setItem('uuid', uuid)
    }

    return await axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/price/${uuid}`)
        .then(response => {
            return response.data.price
        })
        .catch(err => {
            console.log(err)
        }
    );
};

export default getPrice;