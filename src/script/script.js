const contato=document.querySelector('.contatos')
const box=document.querySelector('.box-contato')

contato.addEventListener('click',()=>{
if(box.style.opacity == '1'){
        box.style.opacity='0'
}
else{
        box.style.opacity='1'

}
})
