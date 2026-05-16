/* =========================================
   LOAD ASSIGNED GUARDS
========================================= */

async function loadAssignedGuards(){

    try{

        const response =
        await fetch(

            'https://smart-security-guard-management-system.onrender.com/api/headguard/assigned-guards'
        );

        const data =
        await response.json();

        const table =
        document.getElementById(
            'assignedGuardsTable'
        );

        table.innerHTML = '';

        document.getElementById(
            'totalAssignedGuards'
        ).innerText = data.length;

        document.getElementById(
            'activeGuards'
        ).innerText = data.length;

        data.forEach((guard) => {

            table.innerHTML += `

                <tr>

                    <td>
                        ${guard.guard_id}
                    </td>

                    <td>
                        ${guard.guard_name}
                    </td>

                    <td>
                        ${guard.status}
                    </td>

                    <td>
                        ${guard.gate_name || 'Not Assigned'}
                    </td>

                </tr>
            `;
        });
    }

    catch(error){

        console.log(
            'Assigned Guards Error:',
            error
        );
    }
}


/* =========================================
   LOAD GATE STATUS
========================================= */

async function loadGateStatus(){

    try{

        const response =
        await fetch(

            'https://smart-security-guard-management-system.onrender.com/api/headguard/gate-status'
        );

        const data =
        await response.json();

        const table =
        document.getElementById(
            'gateStatusTable'
        );

        table.innerHTML = '';

        document.getElementById(
            'activeLocations'
        ).innerText = data.length;

        data.forEach((gate) => {

            table.innerHTML += `

                <tr>

                    <td>
                        ${gate.gate_name}
                    </td>

                    <td>
                        ${gate.required_guards}
                    </td>

                    <td>
                        ${gate.assigned_guards}
                    </td>

                    <td>
                        ${gate.remaining_guards}
                    </td>

                </tr>
            `;
        });
    }

    catch(error){

        console.log(
            'Gate Status Error:',
            error
        );
    }
}


/* =========================================
   GENERATE GATE CODE
========================================= */

function generateGateCode(length = 10){

    const chars =

    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

    let result = '';

    for(let i = 0; i < length; i++){

        result += chars.charAt(

            Math.floor(
                Math.random() * chars.length
            )
        );
    }

    return result;
}


/* =========================================
   ASSIGN DUTY
========================================= */

document.getElementById(
    'assignDutyForm'
)

.addEventListener(

    'submit',

    async (e) => {

        e.preventDefault();

        const gateCode =
        generateGateCode();

        const data = {

            guard_id:
            document.getElementById(
                'guardId'
            ).value,

            gate_id:
            document.getElementById(
                'gateId'
            ).value,

            shift_id:
            document.getElementById(
                'shiftId'
            ).value,

            duty_date:
            document.getElementById(
                'dutyDate'
            ).value,

            gate_code:
            gateCode
        };

        try{

            const response =
            await fetch(

                'https://smart-security-guard-management-system.onrender.com/api/headguard/assign-duty',

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

            loadAssignedGuards();

            loadGateStatus();

            loadGateCodes();
        }

        catch(error){

            console.log(
                'Duty Assignment Error:',
                error
            );
        }
    }
);


/* =========================================
   LOAD GATE CODES
========================================= */

async function loadGateCodes(){

    try{

        const response =
        await fetch(

            'https://smart-security-guard-management-system.onrender.com/api/headguard/gate-codes'
        );

        const data =
        await response.json();

        const table =
        document.getElementById(
            'gateCodeTable'
        );

        table.innerHTML = '';

        data.forEach((code) => {

            table.innerHTML += `

                <tr>

                    <td>
                        ${code.guard_name}
                    </td>

                    <td>
                        ${code.gate_name}
                    </td>

                    <td>
                        ${code.shift_name}
                    </td>

                    <td>
                        ${code.gate_code}
                    </td>

                </tr>
            `;
        });
    }

    catch(error){

        console.log(
            'Gate Code Error:',
            error
        );
    }
}


/* =========================================
   LOAD ATTENDANCE
========================================= */

async function loadAttendance(){

    try{

        const response =
        await fetch(

            'https://smart-security-guard-management-system.onrender.com/api/headguard/attendance'
        );

        const data =
        await response.json();

        const table =
        document.getElementById(
            'attendanceTable'
        );

        table.innerHTML = '';

        data.forEach((attendance) => {

            table.innerHTML += `

                <tr>

                    <td>
                        ${attendance.name}
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
   INITIAL LOAD
========================================= */

loadAssignedGuards();

loadGateStatus();

loadGateCodes();

loadAttendance();