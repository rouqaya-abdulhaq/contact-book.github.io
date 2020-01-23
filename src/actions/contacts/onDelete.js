const contactList = document.querySelector("#contactsList"); //TEMPORARY

export const onDelete = (index) =>{
    fetch('http://localhost:5000/contactDelete',{
            method : 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                index : index
            })
            }).then((res)=>{
                return res.json();
            }).then((contactIndex)=>{
                if(contactIndex || contactIndex === 0){
                    contactList.removeChild(contactList.childNodes[contactIndex]);
                }
            }).catch((err)=>{
                console.log(err);
            });
}