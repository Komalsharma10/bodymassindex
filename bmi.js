const form=document.querySelector('form')
console.log(form);
form.addEventListener("submit",function(val){
    val.preventDefault();
const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const result=document.querySelector('.result')

if(height===0||height===""||isNaN(height)){
    result.innerHTML=`plz give a valid ${height}`
}else if(weight===0||weight===""||isNaN(weight)){
    result.innerHTML=`plz give a valid ${weight}`
}else{
    const bmi=(weight/((height*height)/10000)).toFixed(1);
    result.innerHTML=`Body Mass Is : <span>${bmi}</span>`
}

})