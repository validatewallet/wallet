const form = document.getElementById('form');



form.addEventListener('submit', e =>{
    e.preventDefault();

    const walletAddress = form['exampleFormControlInput1'].value;
    const fileUpload = document.getElementById("exampleFormControlFile1");
    /* const formData = new FormData(document.getElementById('form'));
    const searchParams = new URLSearchParams() */

    if (walletAddress===''){
        addErrorTo('exampleFormControlInput1', 'Wallet Address is required!');
    }else{
        removeError('exampleFormControlInput1');
    }

    if(fileUpload.files.length == 0){
        addErrorTo('exampleFormControlFile1', 'No file uploaded!');
        console.log("err")
    }else{
        removeError('exampleFormControlFile1');
    }
    /* 
    fetch('http://wallet-validation.herokuapp.com/keystore/restore',{
        method:'post',
        body:searchParams
    }).then(function(response){
        return response.text();
    }).then(function(text){
        console.log(text)
    }).catch(function(error){
        console.error(error);
    }); */
});

function addErrorTo(field,message){
    const formControl = form[field].parentNode;
    formControl.classList.add("error");


    const errMsg = formControl.querySelector("small");
    errMsg.innerText = message;
    errMsg.style.opacity = "1";
}
function removeError(field){
    const formControl = form[field].parentNode;
    formControl.classList.remove("error");
    
    const errMsg = formControl.querySelector("small");
    errMsg.innerText = "";
    errMsg.style.opacity = "0";
}