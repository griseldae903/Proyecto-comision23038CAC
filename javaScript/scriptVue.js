//         https://randomuser.me/api/

const {createApp}=Vue;


createApp( {
    data(){
    
    return{
        name: '',//agarro dato de la api
        apellido:'',
        email:'',
        placeholder:'...'
    };
    
},




created(){
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data =>{
      const usuario=data.results[0];
      const nombreCompleto=`Ej. ${usuario.name.first} `;
      const nombreCompletoo=`Ej. ${usuario.name.last}`;
      const emailCampo=`Ej. ${usuario.email}`;
    this.name= nombreCompleto;
    this.apellido=nombreCompletoo;
    this.email=emailCampo;
    this.placeholder='Nombre completo';
        // console.log(data)
        // this.name= data.name;
    })
    .catch(error => 
 
        console.error(error));
        this.placeholder='Error al obtener el nombre';


    }
}).mount("#titular");