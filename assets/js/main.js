const loaders = document.querySelectorAll(".loader");
loaders.forEach((loaders, index) => {
    loaders.addEventListener("click", handleOnClickLoad);
});

function handleOnClickLoad(e) {
    e.target.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i>";
}