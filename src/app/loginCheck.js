const containerabierto = document.querySelectorAll('.abierto')
const containerCerrado = document.querySelectorAll('.cerrado')
// console.log(containerCerrado);
// console.log(containerabierto);
export const loginCheck = user => {
    if (user){
       containerabierto.forEach(link => link .style.display = 'block')
        containerCerrado.forEach(link => link .style.display = 'none')
        
    }else{
        containerabierto.forEach(link => link .style.display = 'none') 
        containerCerrado.forEach(link => link .style.display = 'block')
       
    }
}