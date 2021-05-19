import axios from "axios";
import {user} from "../stores";

export class PoiService {
    categoryList = [];
    poiList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        if (localStorage.poi) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.poi);
        }
    }

    async getCategories() {
        try {
            const response = await axios.get(this.baseUrl + "/api/categories")
            this.categoryList = await response.data;
            return this.categoryList;
        } catch (error) {
            return [];
        }
    }

    async getPois() {
        try {
            const response = await axios.get(this.baseUrl + "/api/pois")
            this.poiList = await response.data;
            return this.poiList;
        } catch (error) {
            return [];
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token
                });
                localStorage.poi = JSON.stringify(response.data.token);
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }
    /*
    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            user.set(response.data);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    }
         */

    async addPoi(name, descshort, description, latitude, longitude, category) {
        try {
            const poi = {
                name: name,
                descshort: descshort,
                description: description,
                latitude: latitude,
                longitude: longitude,
                category: category,
            };
            const response = await axios.post(this.baseUrl + "/api/categories/" + category._id + "/pois", poi);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    }

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            const response = await axios.post(this.baseUrl + "/api/users", userDetails);
            const newUser = await response.data;
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async updateSettings(firstName, lastName, email, password, id) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                _id: id
            };
            console.log(id);
            console.log(userDetails);
            const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
            console.log(response.data)
            //const newUser = await response.data;
            //console.log(newUser);
            user.set(userDetails);  //should this update only if response success is true?
            //console.log(user);
            return true;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        user.set({
            email: "",
            token: ""
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.poi = null;
    }

    /*
    async logout() {
        user.set({
            email: "",
         //   token: "",
            firstName: "",
            lastName: "",
        });
       // axios.defaults.headers.common["Authorization"] = "";
       // localStorage.donation = null;
    }

     */
    async deletePoi(id) {
        try {
            console.log("in the poi-service deletePOi")
            const response = await axios.delete(`${this.baseUrl}/api/pois/${id}`);
            console.log(response.data)
            //const newUser = await response.data;
            //console.log(newUser);
            //user.set(userDetails);  //should this update only if response success is true?
            //console.log(user);
            return true;
        } catch (error) {
            return false;
        }
    }


}