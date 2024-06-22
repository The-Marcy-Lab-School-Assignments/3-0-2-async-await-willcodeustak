export const fetchHandler = async (url, options = {}) => { //declaring a function with async wraps its return value in a resolved promise. values are returned directly and wil be wrapped in a promise that resolves with that value.
  try {
    const response = await fetch(url, options);// using await on a promise(async turned our function into a promise) , the function execution is paused until fulfillment while the main event loop is not. Allowing for other operations to continue.This prevents code blocking.
    if (!response.ok ) throw new Error('Fetch failed with status - [STATUS], [STATUS_TEXT]')
//if response it not ok we will throw a custom error (new error )containing custom message ideally about the error.
     const contentType = response.headers.get('content-type');
     //we take the response.headers and attach grab by doing so we get its 'content-type'. It could be text/css,image,application,html etc but what we WANT is json. We will make an argument to only accept json content-type headers.
    //similar to type="string", type="boolean" , type ="array" in programming.
     if (contentType !== null && contentType.includes('application/json')) {
    //This is our argument to say if the contentType is not null && includes the json we want then we wil..
       const jsonData = await response.json();
        // Parse the JSON response data
       return [jsonData, null]
       // Return parsed JSON data and (null indicates no error We use it to indicate intentionally empty.)
     }
     const textData = await response.text();{
      //If Content-Type is not JSON, assume it's text
      //Read the response body as text
     return [textData, null]
     //// Return text data and null . (null indicates no error. We use it to indicate intentionally empty.)
   }
 //tuple returns the data or error in a predictable way. Tuples order will never change.
//object destructing allows us to target specific data values instead of listing the key alongside them.
}
catch (error) {
  //catch errors
  console.warn(error)
  // logs the error to console 
  return[null,error]
  //intentionally left empty (null) , return error object
}
};


// 
// return[null,error]
// }



//try this if not, this  :Handling errors with try/catch

// const getUsersAsyncAwait = async () => {
// 	try {
// 		const fetchRes = await fetch('https://regres.in/api/users');
// 		const jsonData = await fetchRes.json();

// 		const usersList = document.querySelector('#users-list');
// 		usersList.innerHTML = '';

// 		jsonData.data.forEach((user) => {
// 			const li = document.createElement('li');
// 			const p = document.createElement('p');
// 			const img = document.createElement('img');
// 			usersList.append(li);
// 			li.append(p, img);

// 			p.textContent = `${user.first_name} ${user.last.name}`;
// 			img.src = user.avatar;
// 		});
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

//------------------------------------------------------
