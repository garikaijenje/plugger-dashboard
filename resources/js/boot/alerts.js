import Swal from 'sweetalert2/dist/sweetalert2.js'
window.Swal = Swal;
let alerts = {
    success: function (response) {
        return new Promise((resolve, reject) => {
            window.Swal.fire({
                icon: 'success',
                text: response.data.message,
                showConfirmButton: true,
                padding: '20px',
                confirmButtonColor: "#6200EE",
                background : "#16151a"
            }).then((e) => {
                resolve(response);
            });
        });
    },
    warning: function (response) {
        return new Promise((resolve, reject) => {
            window.Swal.fire({
                icon: 'warning',
                title: response.data.message,
                showConfirmButton: false,
                padding: '20px',
                timer: 2000,
                confirmButtonColor: "#6200EE",
            }).then((e) => {
                resolve(response);
            });
        });
    },
    error: function (response) {
        return new Promise((resolve, reject) => {
            window.Swal.fire({
                icon: 'error',
                title: response.data.message,
                showConfirmButton: false,
                padding: '20px',
                timer: 2000,
                confirmButtonColor: "#6200EE"
            }).then((e) => {
                resolve(response);
            });
        });
    },
    formError: function (response) {
        return new Promise((resolve, reject) => {
            window.Swal.fire({
                icon: 'error',
                title: response.message,
                showConfirmButton: false,
                padding: '20px',
                timer: 2000,
                confirmButtonColor: "#6200EE"
            }).then((e) => {
                resolve(response);
            });
        });
    }
};

window.alerts = alerts;
