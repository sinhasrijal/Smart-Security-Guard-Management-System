/* =========================
   GUARD LOGIN
========================= */

document.getElementById(
    'guardLoginForm'
)

.addEventListener(

    'submit',

    async (e) => {

        e.preventDefault();

        /* SIMPLE REDIRECT */

        window.location.href =
        '/html/guard.html';
    }
);