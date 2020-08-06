export const updateStyle = (style, userId,token) =>{
    fetch('http://localhost:5000/selectStyle',{
          method : 'POST',
          headers : {
              'Content-Type': 'application/json',
              "x-access-token" : token
          },
          body : JSON.stringify({
            data : {
                style : style,
                id : userId
            }
          })
        }).catch((err)=>{
          console.log(err);
        });
}