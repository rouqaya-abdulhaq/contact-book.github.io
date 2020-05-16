const contactList = document.querySelector("#contactsList"); //TEMPORARY

export const onDelete = (index,id) =>{
    fetch('http://localhost:5000/contactDelete',{
            method : 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                id : id
            })
            }).then((res)=>{
                if(res.status === 204){
                    contactList.removeChild(contactList.childNodes[index]);
                }
            }).catch((err)=>{
                console.log(err);
            });
}