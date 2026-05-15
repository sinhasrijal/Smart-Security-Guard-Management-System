/* =========================================
   GUARD ID
========================================= */

/*
   TEMPORARY STATIC ID

   Later:
   use login session/user auth
*/

const guardId = 1;


/* =========================================
   LOAD DUTY DETAILS
========================================= */

async function loadDutyDetails(){

    try{

        const response =
        await fetch(

            `http://localhost:3000/api/guard/duty/${guardId}`
        );

        const data =
        await response.json();

        const table =
        document.getElementById(
            'dutyTable'
        );

        table.innerHTML = '';

        data.forEach((duty) => {

            table.innerHTML += `

                <tr>

                    <td>
                        ${duty.gate_name}
                    </td>

                    <td>
                        ${duty.location}
                    </td>

                    <td>
                        ${duty.shift_name}
                    </td>

                    <td>
                        ${duty.duty_date}
                    </td>

                    <td>
                        ${duty.status}
                    </td>

                </tr>
            `;
        });


        /* DASHBOARD CARDS */

        if(data.length > 0){

            document.getElementById(
                'assignedGate'
            ).innerText =
            data[0].gate_name;

            document.getElementById(
                'shiftName'
            ).innerText =
            data[0].shift_name;
        }

    }

    catch(error){

        console.log(
            'Duty Load Error:',
            error
        );
    }
}


/* =========================================
   LOAD ATTENDANCE HISTORY
========================================= */

async function loadAttendanceHistory(){

    try{

        const response =
        await fetch(

            `http://localhost:3000/api/guard/attendance/${guardId}`
        );

        const data =
        await response.json();

        const table =
        document.getElementById(
            'attendanceHistoryTable'
        );

        table.innerHTML = '';

        document.getElementById(
            'daysWorked'
        ).innerText = data.length;

        data.forEach((attendance) => {

            table.innerHTML += `

                <tr>

                    <td>
                        ${attendance.attendance_date}
                    </td>

                    <td>
                        ${attendance.check_in_time || '--'}
                    </td>

                    <td>
                        ${attendance.status}
                    </td>

                    <td>
                        ${attendance.verified ? 'Yes' : 'No'}
                    </td>

                </tr>
            `;
        });
    }

    catch(error){

        console.log(
            'Attendance Error:',
            error
        );
    }
}


/* =========================================
   LOAD SALARY
========================================= */

async function loadSalary(){

    try{

        const response =
        await fetch(

            `http://localhost:3000/api/guard/salary/${guardId}`
        );

        const data =
        await response.json();

        if(data.length > 0){

            document.getElementById(
                'salaryAmount'
            ).innerText =

            `₹${data[0].total_salary}`;
        }
    }

    catch(error){

        console.log(
            'Salary Error:',
            error
        );
    }
}


/* =========================================
   VERIFY ATTENDANCE
========================================= */

document.getElementById(
    'verifyAttendanceForm'
)

.addEventListener(

    'submit',

    async (e) => {

        e.preventDefault();

        const data = {

            guard_id:
            document.getElementById(
                'guardId'
            ).value,

            gate_code:
            document.getElementById(
                'gateCode'
            ).value
        };

        try{

            const response =
            await fetch(

                'http://localhost:3000/api/guard/verify-attendance',

                {

                    method:'POST',

                    headers:{
                        'Content-Type':
                        'application/json'
                    },

                    body:
                    JSON.stringify(data)
                }
            );

            const result =
            await response.json();

            alert(result.message);

            loadAttendanceHistory();

        }

        catch(error){

            console.log(
                'Verification Error:',
                error
            );
        }
    }
);


/* =========================================
   INITIAL LOAD
========================================= */

loadDutyDetails();

loadAttendanceHistory();

loadSalary();