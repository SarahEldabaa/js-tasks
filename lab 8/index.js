window.onload = async function (e) {
  let data = await fetch("https://reqres.in/api/users?page=2");
  let s = await data.json();
  let listData = s.data;
  let container = document.getElementById("testMe");
  let test = "";
  for (let i = 0; i < listData.length; i++) {
    console.log(i);
    test += `<img class = 'img'  src="${listData[
      i
    ].avatar.toString()}" id = "img"> <p>${listData[i].email.toString()}</p>`;
  }

  container.innerHTML = test;
};
