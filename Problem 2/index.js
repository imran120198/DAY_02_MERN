async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    displayData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayData(data) {
  const resultsDiv = document.getElementById("showData");
  resultsDiv.innerHTML = "";

  data.forEach((item) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.body}</p>
    `;
    resultsDiv.appendChild(postDiv);
  });
}
