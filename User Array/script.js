const container = document.getElementById('container');
const details_container = document.getElementById('details-container');
const add_btn = document.getElementById("add");
const double_btn = document.getElementById('double');
const show_btn = document.getElementById('show');
const sort_btn = document.getElementById('sort');
const calculate_btn = document.getElementById('calculate');
const profile_container = document.getElementById('profile-container');
// const profile = document.getElementById('profile');

// let data = [];
let profileData = [];

randomUser();

// Functions

async function randomUser() {
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();

    const user = data.results[0];

    const newUserProfile = {
        img: `${user.picture.medium}`,
        id: `${user.id.name}-${user.id.value}`,
        name: `${user.name.first} ${user.name.last}`,
        gender: `${user.gender}`,
        dob: `${user.dob.date}`,
        email: `${user.email}`,
        mob: `${user.cell}`,
        location: `${user.location.country}`,
        money: Math.floor((Math.random() * 1000000))
    }

    console.log(data);
    console.log(newUserProfile);
    addUserData(newUserProfile);
}

function addUserData(newProfileData) {
    profileData.push(newProfileData);
    updateDOM();
}

function updateDOM(givenProfileData = profileData) {
    details_container.innerHTML =
        `<div class="title">
        <h1>Person</h1>
        <h2>Wealth</h2>
    </div>`;
    profile_container.innerHTML = "";
    let id = 0;
    givenProfileData.forEach(item => {

        let element = document.createElement('div');
        let profileElement = document.createElement('div');

        element.classList.add('details');
        profileElement.classList.add('profile');

        element.id = id;

        element.innerHTML = `<h1>${item.name}</h1><h2>${moneyFormat(
            item.money
            )}</h2>`;

        profileElement.innerHTML = `
        <div class="pic-container">
            <img id="profile-img" src="${item.img}" alt="Profile Photo">
        </div>
        <div class="profile-details">
            <h3>Profile Id: ${item.id}</h3>
            <h3>Name: ${item.name}</h3>
            <h3>Gender: ${item.gender}</h3>
            <h3>DOB: ${item.dob}</h3>
            <h3>Email: ${item.email}</h3>
            <h3>Mobile: ${item.mob}</h3>
            <h3>Location: ${item.location}</h3>
        </div>
        `;

        details_container.appendChild(element);
        profile_container.appendChild(profileElement);

        element.addEventListener('click', () => {
            let userProfile = document.getElementsByClassName("profile");
            console.log(userProfile);
            for (let index = 0; index < userProfile.length; index++) {
                userProfile[index].style.transform = `translateY(-${element.id*100}%)`;
            }
        });
        id++;
    });

}

function moneyFormat(number) {
    return '₹' + (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//Event Listeners

add_btn.addEventListener('click', randomUser);