import {API_BASE_URL, BEARER_TOKEN} from './config'

export function get(path) {
    return fetch(`${API_BASE_URL}${path}`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true,
        }
    })
}