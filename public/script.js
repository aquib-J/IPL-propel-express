let formID=document.getElementById('myForm');

let SelectID=document.getElementById('year');


  async function callback(e) {
    e.preventDefault();
    console.log(SelectID.options[SelectID.selectedIndex].value); // .text also works
    let year = SelectID.options[SelectID.selectedIndex].value;
    
    let result;

    try {
         result = await axios.get(`/year/?year=${year}`);
    }
    /*
    .then((res)=>{
        console.log(res);
    }).catch((e)=>{
        console.error(e);
    }) */
    catch {
        console.log(error);
    }


    console.log(result);
    console.log(result.data);
}



formID.addEventListener('submit',callback);