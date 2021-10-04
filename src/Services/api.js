export const getToDos = () => {
    return new Promise((resolve, reject) => {
        try {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => {
                    // console.log(response);
                    return response.json();
                })
                .then(data => {
                    // console.log("Data : ", data);
                    resolve(data);
                },(error) => {
                    reject(error);
                });
        } catch (error) {
            console.log("catch an Error : ",error);
        }
    })
}

export const getUserDetails = (id) => {
    return new Promise((resolve,reject) => {
        try{
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(response => {
                    // console.log(response);
                    return response.json();
                })
                .then(data => {
                    // console.log("Data : ", data);
                    resolve(data);
                },(error) => {
                    reject(error);
                });
        }catch(error){
            console.log("Error Getting User Details : ", error)
        }
    })
}