// Promise Chaining Demo

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmeralda" },
        ],
        "/users/1": {
          id: 1,
          username: "Bilbo",
          upvotes: 360,
          city: "Lisbon",
          topPostId: 454321,
        },
        "/users/5": {
          id: 5,
          username: "Esmeralda",
          upvotes: 571,
          city: "Honolulu",
        },
        "/posts/454321": {
          id: 454321,
          title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet",
        },
        "/about": "This is the about page.",
      };

      const data = pages[url];

      // Returns the request status
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

// Chaining promises to access properties of the promise object
// // NOTE: This is similar to the callback hell example

// fakeRequest("/users")
//   .then((res, data) => {
//     const id = res.data[0].id;
//     console.log(`User ID: ${id}`);
//     fakeRequest(`/users/${id}`).then((res) => {
//       console.log(res);
//       const postId = res.data.topPostId;
//       fakeRequest(`/posts/${postId}`).then((res) => {
//         console.log(res);
//       });
//     });
//   })
//   .catch((res) => { // This only works with the 1st level .then() method
//     console.log(`Error ${res.status}. Request failed. `);
//   });

// Chaining promises shorthand
fakeRequest("/users")
  // Access promise object's "/users" array and then "/users/1"
  .then((res, data) => {
    console.log(res);
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
  })
  // Access the promise object's "/posts/<topPostId>"
  .then((res, data) => {
    console.log(res);
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
  })
  // Access the promise object's "/posts/<topPostId>" content
  .then((res, data) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(`Error ${res.status}. Request failed. `);
  });
