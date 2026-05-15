/* =========================
   LOAD LIVE DUTY STATUS
========================= */

async function loadLiveDuty(){

    try{

        const response =
        await fetch(

            'http://localhost:3000/api/admin/live-duty'
        );

        const duties =
        await response.json();

        const tableBody =
        document.getElementById(
            'liveDutyTableBody'
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
            'Live Duty Error:',
            error
        );
    }
}


/* =========================
   LOAD SHIFT TRACKING
========================= */

async function loadShiftTracking(){

    try{

        const response =
        await fetch(

            'http://localhost:3000/api/admin/shift-tracking'
        );

        const shifts =
        await response.json();

        const tableBody =
        document.getElementById(
            'shiftTrackingTableBody'
        );

        tableBody.innerHTML = '';

        shifts.forEach((shift) => {

            tableBody.innerHTML += `

                <tr>

                    <td>
                        ${shift.guard_name}
                    </td>

                    <td>
                        ${shift.shift_name}
                    </td>

                    <td>
                        ${shift.start_time}
                    </td>

                    <td>
                        ${shift.end_time}
                    </td>

                    <td>
                        Assigned
                    </td>

                </tr>

            `;
        });
    }

    catch(error){

        console.log(
            'Shift Tracking Error:',
            error
        );
    }
}


/* =========================
   LOAD GATE MONITORING
========================= */

async function loadGateMonitoring(){

    try{

        const response =
        await fetch(

            'http://localhost:3000/api/admin/gate-monitoring'
        );

        const gates =
        await response.json();

        const tableBody =
        document.getElementById(
            'gateMonitoringTableBody'
        );

        tableBody.innerHTML = '';

        gates.forEach((gate) => {

            let coverage =
            'Understaffed';

            if(

                gate.active_guards >=
                gate.required_guards

            ){

                coverage =
                'Fully Covered';
            }

            tableBody.innerHTML += `

                <tr>

                    <td>
                        ${gate.gate_name}
                    </td>

                    <td>
                        ${gate.required_guards}
                    </td>

                    <td>
                        ${gate.active_guards}
                    </td>

                    <td>
                        ${gate.current_shift}
                    </td>

                    <td>
                        ${coverage}
                    </td>

                </tr>

            `;
        });
    }

    catch(error){

        console.log(
            'Gate Monitoring Error:',
            error
        );
    }
}


/* =========================
   LOAD UNASSIGNED GUARDS
========================= */

async function loadUnassignedGuards(){

    try{

        const response =
        await fetch(

            'http://localhost:3000/api/admin/unassigned-guards'
        );

        const guards =
        await response.json();

        const tableBody =
        document.getElementById(
            'unassignedGuardsTableBody'
        );

        tableBody.innerHTML = '';

        guards.forEach((guard) => {

            tableBody.innerHTML += `

                <tr>

                    <td>
                        ${guard.guard_id}
                    </td>

                    <td>
                        ${guard.name}
                    </td>

                    <td>
                        ${guard.phone}
                    </td>

                    <td>
                        Unassigned
                    </td>

                </tr>

            `;
        });
    }

    catch(error){

        console.log(
            'Unassigned Guards Error:',
            error
        );
    }
}

/* =========================
   LOAD COMPLETED SHIFTS
========================= */

async function loadCompletedShifts(){

    try{

        const response =

        await fetch(

            'http://localhost:3000/api/admin/completed-shifts'
        );

        const data =
        await response.json();

        const tableBody =

        document.getElementById(
            'completedShiftBody'
        );

        /* SAFETY CHECK */

        if(!tableBody){

            console.log(
                'completedShiftBody not found'
            );

            return;
        }

        /* CLEAR OLD DATA */

        tableBody.innerHTML = '';

        /* IF EMPTY */

        if(data.length === 0){

            tableBody.innerHTML = `

                <tr>

                    <td colspan="4">

                        No completed shifts yet

                    </td>

                </tr>

            `;

            return;
        }

        /* SHOW DATA */

        data.forEach((shift) => {

            tableBody.innerHTML += `

                <tr>

                    <td>
                        ${shift.guard_name}
                    </td>

                    <td>
                        ${shift.gate_name}
                    </td>

                    <td>
                        ${shift.shift_name}
                    </td>

                    <td>
                        ${shift.completed_time}
                    </td>

                </tr>

            `;
        });

    }

    catch(error){

        console.log(
            'Completed Shift Error:',
            error
        );
    }
}


/* =========================
   INITIAL LOAD
========================= */

loadLiveDuty();

loadShiftTracking();

loadGateMonitoring();

loadUnassignedGuards();

loadCompletedShifts();

