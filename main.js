

import {
    uploadBytes,
    getDownloadURL,
    ref,
    getStorage,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

import { app } from "./config.js";

let storage = getStorage()

let form = document.querySelector('#form')
let myfile = document.querySelector('#myFile')
let email = document.querySelector('#email')

form.addEventListener('submit', async event => {
    event.preventDefault()
    let file = myfile.files[0]
    let url = await uploadFile(file, `${email.value} + ${Date.now()}`)
    console.log(url);
})

async function uploadFile(file, userEmail) {
    const storageRef = ref(storage, userEmail);
    try {
        const uploadImg = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(uploadImg.ref);
        return url;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
