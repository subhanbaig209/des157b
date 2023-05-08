// JS here
Parse.initialize("UiPHCSjAaesf8jERlPLX2XweWlPKpmyvjs9a9jsZ","P4ubhM2KIhOWFS2qQGMUYaT7fc9SSfeEYjNMzdbF"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/';


const newBtn = document.getElementById ("newbtn") ;
const editBtns = document.querySelectorAll(".fa-edit") ;
const addFriendForm = document.getElementById ("add-friend") ;
const editFriendForm = document.getElementById ("edit-friend");
const friendList = document.querySelector("main ol");
newBtn.addEventListener("click", function(event){
    event.preventDefault();
    addFriendForm.className="add-friend-onscreen";
})

addFriendForm.addEventListener("submit", function (event){
event.preventDefault();
addFriendForm.className="add-friend-offscreen";
});

async function displayFriends() {
    const friends = Parse.Object.extend('Friends');
    const query = new Parse.Query(friends);
    const results = await query.ascending('lname').find();
    results.forEach( function(eachFriend) {
        const id = eachFriend.id;
        const lname = eachFriend.get ('lname');
        const fname = eachFriend.get ('fname') ;
        const email = eachFriend.get ('email');
        const facebook = eachFriend.get ('facebook') ;
        const twitter=eachFriend.get ('twitter') ;
        const instagram = eachFriend.get ('instagram') ;
        const linkedin = eachFriend.get ('linkedin') ;

        const theListItem=document.createElement("li");
theListItem.setAttribute("id",`r-${id}` );
theListItem.innerHTML
=
`<div class="name" >${fname} ${lname}</div>
<div class=
: "email">
<i class="fas fa-envelope-square"×/i› ${email}
</div>
<div class= "social">
‹a href="${facebook}"›<i class="fab fa-facebook-square"»</i›</a›
<a href="${twitter}"›<i class="fab fa-twitter-square"›</i›</a›
<a href=
:"{instagram}"›<i class="fab fa-instagram"›</i›</a›
‹a href="${linkedin}"›<i class="fab fa-linkedin"›</i›</a›
</div>
<i class="fas fa-edit" id="e-${id}"›</i›
<i class="fas fa-times-circle"
id="d-${id}"›</i>`;
friendList.append(theListItem);

    });
}

displayFriends();

