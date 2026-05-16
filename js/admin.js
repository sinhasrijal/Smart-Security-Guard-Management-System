/* =========================
   LOAD DASHBOARD STATS
========================= */

async function loadDashboardStats(){

    try{

        const response =
        await fetch(
            'https://smart-security-guard-management-system.onrender.com/api/admin/dashboard-stats'
        );

        const data =
        await response.json();

        /* TOTAL GUARDS */

        document.getElementById(
            'totalGuards'
        ).innerText =
        data.totalGuards || 0;

        /* ACTIVE DUTIES */

        document.getElementById(
            'activeDuties'
        ).innerText =
        data.activeDuties || 0;

        /* COMPLETED SHIFTS */

        document.getElementById(
            'completedShifts'
        ).innerText =
        data.completedShifts || 0;

        /* ACTIVE LOCATIONS */

        document.getElementById(
            'activeLocations'
        ).innerText =
        data.activeLocations || 0;
    }

    catch(error){

        console.log(
            'Dashboard Stats Error:',
            error
        );
    }
}


/* =========================
   LOAD GUARDS
========================= */

async function loadGuards(){

    try{

        const response =
        await fetch(
            'https://smart-security-guard-management-system.onrender.com/api/admin/guards'
        );

        const guards =
        await response.json();

        const tableBody =
        document.getElementById(
            'guardsTableBody'
        );

        tableBody.innerHTML = '';

        guards.forEach((guard) => {

            tableBody.innerHTML += `

                <tr>

                    <td>
                        ${guard.guard_id}
                    </td>

                    <td>
                        ${guard.guard_name}
                    </td>

                    <td>
                        ${guard.phone}
                    </td>

                    <td>
                        ${guard.head_guard_name}
                    </td>

                    <td>
                        ${guard.status}
                    </td>

                </tr>

            `;
        });
    }

    catch(error){

        console.log(
            'Guards Error:',
            error
        );
    }
}


/* =========================
   LOAD HEAD GUARDS
========================= */

async function loadHeadGuards(){

    try{

        const response =
        await fetch(
            'https://smart-security-guard-management-system.onrender.com/api/admin/headguards'
        );

        const headguards =
        await response.json();

        const tableBody =
        document.getElementById(
            'headguardsTableBody'
        );

        tableBody.innerHTML = '';

        headguards.forEach((headguard) => {

            tableBody.innerHTML += `

                <tr>

                    <td>
                        ${headguard.head_guard_id}
                    </td>

                    <td>
                        ${headguard.head_guard_name}
                    </td>

                    <td>
                        ${headguard.phone}
                    </td>

                    <td>
                        ${headguard.total_guards}
                    </td>

                    <td>
                        Active
                    </td>

                </tr>

            `;
        });
    }

    catch(error){

        console.log(
            'Head Guard Error:',
            error
        );
    }
}


/* =========================
   LOAD DUTIES
========================= */

async function loadDuties(){

    try{

        const response =
        await fetch(
            'https://smart-security-guard-management-system.onrender.com/api/admin/duties'
        );

        const duties =
        await response.json();

        const tableBody =
        document.getElementById(
            'dutiesTableBody'
        );

        tableBody.innerHTML = '';

        duties.forEach((duty) => {

            tableBody.innerHTML += `

                <tr>

                    <td>
                        ${duty.guard_name}
                    </td>

                    <td>
                        ${duty.gate_name}
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
    }

    catch(error){

        console.log(
            'Duty Error:',
            error
        );
    }
}


/* =========================
   LOAD ATTENDANCE
========================= */

async function loadAttendance(){

    try{

        const response =
        await fetch(
            'https://smart-security-guard-management-system.onrender.com/api/admin/attendance'
        );

        const attendance =
        await response.json();

        const tableBody =
        document.getElementById(
            'attendanceTableBody'
        );

        tableBody.innerHTML = '';

        attendance.forEach((record) => {

            tableBody.innerHTML += `

                <tr>

                    <td>
                        ${record.guard_name}
                    </td>

                    <td>
                        ${record.date}
                    </td>

                    <td>
                        ${record.check_in}
                    </td>

                    <td>
                        ${record.check_out}
                    </td>

                    <td>
                        ${record.status}
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


/* =========================
   LOAD SALARY
========================= */

async function loadSalary(){

    try{

        const response =
        await fetch(
            'https://smart-security-guard-management-system.onrender.com/api/admin/salary'
        );

        const salaries =
        await response.json();

        const tableBody =
        document.getElementById(
            'salaryTableBody'
        );

        tableBody.innerHTML = '';

        salaries.forEach((salary) => {

            tableBody.innerHTML += `

                <tr>

                    <td>
                        ${salary.guard_name}
                    </td>

                    <td>
                        ${salary.month}
                    </td>

                    <td>
                        ${salary.days_worked}
                    </td>

                    <td>
                        ₹ ${salary.total_salary}
                    </td>

                    <td>
                        Paid
                    </td>

                </tr>

            `;
        });
    }

    catch(error){

        console.log(
            'Salary Error:',
            error
        );
    }
}


/* =========================
   LOAD LOCATIONS
========================= */

async function loadLocations(){

    try{

        const response =
        await fetch(
            'https://smart-security-guard-management-system.onrender.com/api/admin/locations'
        );

        const locations =
        await response.json();

        const tableBody =
        document.getElementById(
            'locationTableBody'
        );

        tableBody.innerHTML = '';

        locations.forEach((location) => {

            tableBody.innerHTML += `

                <tr>

                    <td>
                        ${location.gate_id}
                    </td>

                    <td>
                        ${location.location_name}
                    </td>

                    <td>
                        ${location.active_guards}
                    </td>

                    <td>
                        ${location.current_shift}
                    </td>

                    <td>
                        Active
                    </td>

                </tr>

            `;
        });
    }

    catch(error){

        console.log(
            'Location Error:',
            error
        );
    }
}

/* =========================
   GUARD MODAL
========================= */

const guardModal =
document.getElementById(
    'guardModal'
);

const openGuardModal =
document.getElementById(
    'openGuardModal'
);

const closeGuardModal =
document.getElementById(
    'closeGuardModal'
);

/* OPEN */

openGuardModal.onclick = () => {

    guardModal.style.display =
    'flex';
};

/* CLOSE */

closeGuardModal.onclick = () => {

    guardModal.style.display =
    'none';
};

/* CLOSE OUTSIDE */

window.onclick = (event) => {

    if(event.target === guardModal){

        guardModal.style.display =
        'none';
    }
};


/* =========================
   ADD GUARD
========================= */

document.getElementById(
    'guardForm'
)

.addEventListener(

    'submit',

    async (e) => {

        e.preventDefault();

        const data = {

            name:
            document.getElementById(
                'guardName'
            ).value,

            phone:
            document.getElementById(
                'guardPhone'
            ).value,

            salary_rate:
            document.getElementById(
                'salaryRate'
            ).value,

            head_guard_id:
            document.getElementById(
                'headGuardId'
            ).value
        };

        try{

            const response =
            await fetch(

                'https://smart-security-guard-management-system.onrender.com/api/admin/add-guard',

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

            guardModal.style.display =
            'none';

            loadGuards();

        }

        catch(error){

            console.log(error);
        }
    }
);

/* =========================
   HEAD GUARD MODAL
========================= */

const headGuardModal =
document.getElementById(
    'headGuardModal'
);

const openHeadGuardModal =
document.getElementById(
    'openHeadGuardModal'
);

const closeHeadGuardModal =
document.getElementById(
    'closeHeadGuardModal'
);

/* OPEN */

openHeadGuardModal.onclick = () => {

    headGuardModal.style.display =
    'flex';
};

/* CLOSE */

closeHeadGuardModal.onclick = () => {

    headGuardModal.style.display =
    'none';
};

/* CLOSE OUTSIDE */

window.addEventListener(

    'click',

    (event) => {

        if(

            event.target ===
            headGuardModal

        ){

            headGuardModal.style.display =
            'none';
        }
    }
);


/* =========================
   ADD HEAD GUARD
========================= */

document.getElementById(
    'headGuardForm'
)

.addEventListener(

    'submit',

    async (e) => {

        e.preventDefault();

        const phone =
        document.getElementById(
            'headGuardPhone'
        ).value;

        /* PHONE VALIDATION */

        if(

            phone.length < 10

        ){

            alert(

                'Invalid phone number.'
            );

            return;
        }

        const data = {

            name:
            document.getElementById(
                'headGuardName'
            ).value,

            phone:
            phone
        };

        try{

            const response =
            await fetch(

                'https://smart-security-guard-management-system.onrender.com/api/admin/add-headguard',

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

            headGuardModal.style.display =
            'none';

            loadHeadGuards();

        }

        catch(error){

            console.log(error);
        }
    }
);

/* =========================
   OPEN OPERATIONS PAGE
========================= */

/* =========================
   OPEN OPERATIONS PAGE
========================= */

function openOperationsPage(){

    window.location.href =
    '../html/operations.html';
}

/* =========================
   LOCATION MODAL
========================= */

const locationModal =
document.getElementById(
    'locationModal'
);

const openLocationModal =
document.getElementById(
    'openLocationModal'
);

const closeLocationModal =
document.getElementById(
    'closeLocationModal'
);

/* OPEN */

openLocationModal.onclick = () => {

    locationModal.style.display =
    'flex';
};

/* CLOSE */

closeLocationModal.onclick = () => {

    locationModal.style.display =
    'none';
};

/* CLOSE OUTSIDE */

window.addEventListener(

    'click',

    (event) => {

        if(

            event.target ===
            locationModal

        ){

            locationModal.style.display =
            'none';
        }
    }
);


/* =========================
   ADD LOCATION
========================= */

document.getElementById(
    'locationForm'
)

.addEventListener(

    'submit',

    async (e) => {

        e.preventDefault();

        const requiredGuards =
        parseInt(

            document.getElementById(
                'requiredGuards'
            ).value
        );

        if(

            requiredGuards <= 0

        ){

            alert(

                'Required guards must be greater than 0.'
            );

            return;
        }

        const data = {

            gate_name:
            document.getElementById(
                'gateName'
            ).value,

            location:
            document.getElementById(
                'gateLocation'
            ).value,

            required_guards:
            requiredGuards
        };

        try{

            const response =
            await fetch(

                'https://smart-security-guard-management-system.onrender.com/api/admin/add-location',

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

            locationModal.style.display =
            'none';

            loadLocations();

        }

        catch(error){

            console.log(error);
        }
    }
);

/* =========================
   SEARCH ATTENDANCE
========================= */

async function searchAttendance(){

    const guardId =

    document.getElementById(
        'attendanceGuardId'
    ).value;

    if(!guardId){

        alert('Enter Guard ID');
        return;
    }

    try{

        const response =
        await fetch(

            `https://smart-security-guard-management-system.onrender.com/api/guard/attendance/${guardId}`
        );

        const data =
        await response.json();

        const table =
        document.getElementById(
            'attendanceTableBody'
        );

        table.innerHTML = '';

        data.forEach((attendance) => {

            table.innerHTML += `

                <tr>

                    <td>
                        ${attendance.attendance_date}
                    </td>

                    <td>
                        ${attendance.check_in_time}
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

    }catch(error){

        console.log(error);
    }
}


/* =========================
   SEARCH SALARY
========================= */

async function searchSalary(){

    const id =

    document.getElementById(
        'salaryId'
    ).value;

    if(!id){

        alert('Enter Guard ID');
        return;
    }

    try{

        const response =
        await fetch(

            `https://smart-security-guard-management-system.onrender.com/api/guard/salary/${id}`
        );

        const data =
        await response.json();

        console.log(data);

        const table =

        document.getElementById(
            'salaryTableBody'
        );

        table.innerHTML = '';

        /* NO DATA */

        if(data.length === 0){

            table.innerHTML = `

                <tr>

                    <td colspan="3">

                        No Salary Found

                    </td>

                </tr>
            `;

            return;
        }

        /* SHOW DATA */

        data.forEach((salary) => {

            table.innerHTML += `

                <tr>

                    <td>
                        ${salary.month}/${salary.year}
                    </td>

                    <td>
                        ${salary.days_worked}
                    </td>

                    <td>
                        ₹${salary.total_salary}
                    </td>

                </tr>
            `;
        });

    }

    catch(error){

        console.log(
            'Salary Fetch Error:',
            error
        );
    }
}

/* =========================
   INITIAL LOAD
========================= */

loadDashboardStats();

loadGuards();

loadHeadGuards();

loadDuties();

loadAttendance();

loadSalary();

loadLocations();
