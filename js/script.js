const rowElem = document.querySelector(".row");
let membersElem = "";

const membersList = [

    // Wayne
    {
        fullName: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg",
    },

    // Angela
    {
        fullName: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg",
    },

    // Walter
    {
        fullName: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg",
    },

    // Angela 2
    {
        fullName: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg",
    },

    // Scott
    {
        fullName: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg",
    },

    // Barbara
    {
        fullName: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg",
    },

];

console.log(membersList);

for (let i = 0; i < membersList.length; i++) {
    const curMember = membersList[i];
    membersElem += `
    <div class = "col-4 my-2">
        <div class = "card">
            <div class = "card-body">
                <img src = "img/${curMember.photo}" class = "w-100">
                <div class = " card-text my-1 text-center">
                    <h5 class = "card-title">${curMember.fullName}</h5>
                    <p class = "card-text"> <span class = "fw-bold"> Role: </span> ${curMember.role} </p>
                </div>
            </div>
        </div>
    </div>`;
}

rowElem.innerHTML = membersElem;