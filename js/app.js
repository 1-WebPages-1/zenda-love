var users = [
    {
        nombre: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png'
    },

    {
        nombre: 'Bety',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.png'
    },

    {
        nombre: 'Ronald',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar3.png'
    },

    {
        nombre: 'Christopher',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar4.png'
    },

    {
        nombre: 'Ximena',
        gender: 'F',
        hobby: 'Shopping',
        avatar: 'avatar5.png'
    },

    {
        nombre: 'Paul',
        gender: 'M',
        hobby: 'Shopping',
        avatar: 'avatar6.png'
    },

    {
        nombre: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png'
    }
];

window.addEventListener('load', function(){
    function search() {
        /* Get hobby */
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        /* Get render */

        var genderField = document.getElementById('gender');
        var selected =  genderField.selectedIndex;
        var gender = genderField.options[selected].value;


        var resultsHTML = '';
        var numUsers = users.length;

        for(var i = 0; i < numUsers; i++){
            if (gender == 'A' || gender == users[i].gender) {
                if (hobby == '' || hobby == users[i].hobby) {
                    resultsHTML += '<div class="person-row">\
                                        <img src="./assets/users-photo-profile/'+ users[i].avatar +'"/>\
                                        <div class="person-info">\
                                            <div>' + users[i].nombre + '</div>\
                                            <div id="hobby">' + users[i].hobby + '</div>\
                                            <button>Add as friend</button>\
                                        </div>\
                                    </div>';

                        }
                    }
                }
                results.innerHTML = resultsHTML;
            };

            

        var results = document.getElementById('results');
        var searchBtn = document.getElementById('searchBtn');
        searchBtn.addEventListener('click', search);
        search();
    });