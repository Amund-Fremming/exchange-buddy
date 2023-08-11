import axios from "axios";
import { UserrpostResToBackend } from "../components/UserPost";

const USER_REST_API_URL = "http://localhost:8080/api/user";
const RESPONSE_REST_API_URL = "http://localhost:8080/api/response";
const LOGIN_REST_API_URL = "http://localhost:8080/api/login";
const LOGIN_RESPONSE_REST_API_URL = "http://localhost:8080/api/response2";

const USERPOST_REST_API_URL = "http://localhost:8080/api/userpost";

export interface Userr {
    mobile: string;
    fname: string;
    lname: string;
    fdate: string;
    profilepic: string;
    sex: string;
    salt: string;
    password: string;
}

/*
    Her må man mest sansynlig hente ut en bruker
    og sende brukeren under mobil for at det skal
    kunne bli tatt i mot av Spring backend.
*/
export interface UserrpostSearchEntity {
    term: string;
    city: string;
    country: string;
    active: boolean;
    pricefrom: string;
    priceto: string;
}


class UserService {

    // For registering a new user
    getUsers() {
        return axios.get(USER_REST_API_URL);
    };

    postUser(userr: Userr) {
        return axios.post(USER_REST_API_URL, userr);
    }

    getResponseMessage() {
        return axios.get(RESPONSE_REST_API_URL);
    }

    // For logging in
    loginUser(userr: Userr) {
        return axios.post(LOGIN_REST_API_URL, userr);
    }

    getLoginResponseMessage() {
        return axios.get(LOGIN_RESPONSE_REST_API_URL);
    }

    // For Userpost page
    getAllUsers() {
        return axios.get(USERPOST_REST_API_URL + "/all");
    }

    getUserCities() {
        return axios.get(USERPOST_REST_API_URL + "/cities");
    }

    getUserCountries() {
        return axios.get(USERPOST_REST_API_URL + "/countries");
    }

    searchUser(userr: UserrpostSearchEntity) {
        return axios.post(USERPOST_REST_API_URL + "/filter", userr);
    }

    // For getting a user and userpost by mobile

    getUserByMobile(mobile: string) {
        return axios.post(USER_REST_API_URL + "/profile", null, {
            params: {
                mobile: mobile,
            },
        });
    }

    getUserpostByMobile(mobile: string) {
        return axios.post(USERPOST_REST_API_URL + "/userrpost", null, {
            params: {
                mobile: mobile,
            },
        });
    }

    getUserpostById(id: string) {
        return axios.post(USERPOST_REST_API_URL + "/upostid", null, {
            params: {
                id: id,
            },
        });
    }
    
    postUserPost(userPost: UserrpostResToBackend) {
        return axios.post(USERPOST_REST_API_URL + "/postuser", userPost);
    }

}

export default new UserService();

