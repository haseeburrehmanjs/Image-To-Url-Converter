import {
    uploadBytes,
    getDownloadURL,
    ref,
    getStorage,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

import { app } from "./config.js";

let storage = getStorage()

let form = document.querySelector('#form')
let myFile = document.querySelector('#myFile')
let email = document.querySelector('#email')
let imageUrl = document.querySelector('#imageUrl')

form.addEventListener('submit', async event => {
    event.preventDefault()
    let file = myFile.files[0]
    let url = await uploadFile(file, `${email.value} + ${Date.now()}`)
    console.log(url);
    imageUrl.textContent = url
    imageUrl.href = url
    file = '';
    email.value = ''
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





// second try

// import {
//     uploadBytes,
//     getDownloadURL,
//     ref,
//     getStorage
// } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

// import { app } from "./config.js";

// let storage = getStorage()

// let form = document.querySelector('#form')
// let myFile = document.querySelector('#myFile')
// let email = document.querySelector('#email')

// form.addEventListener('submit', async event => {
//     event.preventDefault()
//     // console.log(myFile.files[0]);
//     // console.log(email.value);
//     let file = myFile.files[0]
//     let url = await uploadFile(file, `${email.value} + ${Date.now()}`)
//     console.log(url);
// })

// async function uploadFile(file, userEmail) {
//     const storageRef = ref(storage, userEmail);
//     try {
//         const uploadImg = await uploadBytes(storageRef, file);
//         const url = await getDownloadURL(uploadImg.ref);
//         return url;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }

