let add = () => {
    
    let comment = document.querySelector('.container #comment'); 
     
    if (comment.value != "") { 
     
    let list = document.querySelector('.list'); 
    let time = new Date();
    let h = time.getHours(); 
    let m = time.getMinutes(); 
    let s = time.getSeconds(); 
    let now = h + " : " + m + " : " + s;
    let list_item = document.createElement ("l1"); 
     
    list_item.innerHTML = `
    <span>
    <p>${name.value} ${now}</p> 
    </span>
    <p>${comment.value}</p>
    `;
    list.append(list_item); 
    }
     
    if ( comment.value == "") {
    let list = document.querySelector('.list'); 
    let list_item = document.createElement ("l2"); 
    var warn = 'Please enter name & comment!';  
    list_item.innerHTML = `
    <span>
    <p>${warn}</p> 
    </span>
    `;
    list.append(list_item); 
     }
    comment.value = "";
    }