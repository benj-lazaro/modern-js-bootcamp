// Resolve, Reject With Values Demo

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Request Sent.");

      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 2, username: "Esmeraldo" },
        ],
        "/about": "This is the about page.",
      };

      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

fakeRequest("/about")
  .then((res, data) => {
    console.log(`Status: ${res.status}. Request successful.`);
    console.log(`Data: ${res.data}`);
  })
  .catch((res) => {
    console.log(`Status: ${res.status}. Request failed.`);
  });

fakeRequest("/users")
  .then((res, data) => {
    console.log(`Status: ${res.status}. Request successful.`);
    console.log("Data: ");
    console.log(res.data[0]);
    console.log(res.data[1]);
  })
  .catch((res) => {
    console.log(`Status: ${res.status}. Request failed.`);
  });

fakeRequest("/dogs")
  .then((res, data) => {
    console.log(`Status: ${res.status}. Request successful.`);
    console.log("Data: ");
    console.log(res.data[0]);
    console.log(res.data[1]);
  })
  .catch((res) => {
    console.log(`Status: ${res.status}. Request failed.`);
  });
