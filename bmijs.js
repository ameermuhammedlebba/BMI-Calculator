function calculation(){
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const newheight = height*0.01;
    const bmi = (weight/(newheight*newheight));
    document.querySelector('#YOURBMI').innerHTML= bmi
}