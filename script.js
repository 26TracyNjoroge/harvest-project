 
 let countEl = document.getElementById("count-up");
 let saveEl = document.getElementById("save-el");
 let count = 0;

 function increment() {
    count += 1;
    countEl.textContent = count;
 }

function save() {
    let countWithDash = " " + count + " - ";
    count = 0;;
    countEl.textContent = 0;
    saveEl.textContent += countWithDash;
    console.log(count);
}

save()