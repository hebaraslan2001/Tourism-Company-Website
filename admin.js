function changeColor(){
    let color =document.getElementById('colorInputColor').value
    document.body.style.backgroundColor = color;
    document.getElementById('colorInputText').value=color;
    
    }
    function changeFontSize(type){
    let ids =["#p"];
    ids.forEach(id => {
    let el = document.querySelector(id);
    let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size")
    fontSize = parseFloat(fontSize);
    
    if(type === "increase"){
    el.style.fontSize = (fontSize + 5) +"px";
    }
    else{
    
        el.style.fontSize = (fontSize - 5) +"px";  
    }
    });
    }