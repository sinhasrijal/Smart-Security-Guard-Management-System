/* =========================
   ADMIN LOGIN
========================= */

document
.getElementById(
    'adminLoginForm'
)

.addEventListener(
    'submit',

    async function(event){

        event.preventDefault();

        /* GET INPUT VALUES */

        const username =
        document
        .getElementById(
            'username'
        )
        .value
        .trim();

        const password =
        document
        .getElementById(
            'password'
        )
        .value
        .trim();

        const message =
        document.getElementById(
            'message'
        );

        /* CLEAR OLD MESSAGE */

        message.innerText = '';

        /* VALIDATION */

        if(
            username === '' ||
            password === ''
        ){

            message.innerText =
            'Please fill all fields';

            return;
        }

        try{

            /* API REQUEST */

            const response =
            await fetch(

                'https://smart-security-guard-management-system.onrender.com/api/auth/login',

                {
                    method:'POST',

                    headers:{
                        'Content-Type':
                        'application/json'
                    },

                    body:JSON.stringify({

                        username:username,

                        password:password,

                        role:'admin'
                    })
                }
            );

            const data =
            await response.json();

            /* SUCCESS */

            if(data.success){

    message.style.color =
    '#22c55e';

    message.innerText =
    'Login Successful';

    setTimeout(() => {

        window.location.href =
        '../html/admin.html';

    }, 1000);
}

            /* FAILED */

            else{

                message.style.color =
                '#ef4444';

                message.innerText =
                data.message;
            }
        }

        catch(error){

            console.log(error);

            message.style.color =
            '#ef4444';

            message.innerText =
            'Server Error';
        }
    }
);