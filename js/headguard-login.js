window.onload = function () {

    const form = document.getElementById("headguardLoginForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const username =
            document.getElementById("username").value;

        const password =
            document.getElementById("password").value;

        if (username === "hg1" && password === "pass") {

            window.location.href =
                "http://localhost:3000/html/headguard.html";

        } else {

            alert("Invalid Credentials");
        }
    });
};