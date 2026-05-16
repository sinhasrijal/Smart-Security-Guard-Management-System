async function login() {

    const role =
    document.getElementById('role').value;

    const username =
    document.getElementById('username').value;

    const password =
    document.getElementById('password').value;

    const msg =
    document.getElementById('msg');

    if(!role || !username || !password){

        msg.innerHTML =
        "Please fill all fields";

        return;
    }

    try{

        const response = await fetch(

            'https://smart-security-guard-management-system.onrender.com/api/auth/login',

            {
                method:'POST',

                headers:{
                    'Content-Type':'application/json'
                },

                body:JSON.stringify({
                    username,
                    password
                })
            }
        );

        const data = await response.json();

        if(data.message === "Login success"){

            localStorage.setItem(
                'user',
                JSON.stringify(data)
            );

            if(data.role === 'admin'){

                window.location.href =
                'admin.html';
            }

            else if(data.role === 'guard'){

                window.location.href =
                '/html/guard.html';
            }

            else if(data.role === 'head_guard'){

                window.location.href =
                '/html/headguard.html';
            }

        }else{

            msg.innerHTML =
            data.message;
        }

    }catch(error){

        console.log(error);

        msg.innerHTML =
        "Server error";
    }
}