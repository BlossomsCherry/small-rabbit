import axios from 'axios'
import { create } from 'underscore'

const httpLocation = axios.create({
    baseURL: 'loc',
    timeout: 10000
})

export default function getLocation(client_id) {
    return httpLocation({
        url: '/oauth/authorize',
        params: {
            client_id
        }
    })
}
