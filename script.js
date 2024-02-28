const container = document.createElement("div");
container.setAttribute("class", "container");
container.style.display = "flex";
container.style.flexDirection = "column";
document.body.appendChild(container);

const addImgRow = () => {
  let numberOfIterations;
  if (window.innerWidth > 335 && window.innerWidth <= 525)
    numberOfIterations = 3; 
  else if(window.innerWidth <= 335)
  numberOfIterations = 2;
  else
  numberOfIterations =4;

  const imgRow = document.createElement("div");
  imgRow.style.display = "flex";
  imgRow.style.margin = "15px";
  imgRow.style.justifyContent = "space-between";
  for (i = 0; i < numberOfIterations; i++) {
    const div = document.createElement('div')
    const img = new Image();
    div.appendChild(img)
    img.src = "#";
    img.height = "80";
    img.width = "80";
    imgRow.appendChild(div);
  }
  container.appendChild(imgRow);
};

const getHeight = (element) => {
  return parseInt(window.getComputedStyle(element).height);
};

const load = ()=>{
  while (true) {
  if (getHeight(container) >= window.innerHeight) {
    break;
  }
  addImgRow();
}
}

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
    addImgRow();
});

window.addEventListener('load',load);
window.addEventListener('resize',()=>location.reload());