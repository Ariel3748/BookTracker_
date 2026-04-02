import Swal from "sweetalert2"

const sweetAlertDelte = (callback)=>{
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, borrarlo',
            cancelButtonText: 'Cancelar'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                       
                    } catch (error) {
                        console.log(error)
                    }
                }
            })}

export default sweetAlertDelte