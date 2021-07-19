var a=document.getElementById('value')
function num(n){
 a.value+=n
}
function result(){
    a.value = eval(a.value)
}
function reset(){
    a.value=''
}
