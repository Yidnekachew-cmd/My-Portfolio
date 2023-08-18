// // Storing data in the object
// const projects = [
//     {
//         src: "../images/image_dots.svg",
//         class: "project-dots",
//     },
//     {
//         src: "../images/Rectangle 21.svg",
//         class: "project-img-1",
//     },
//     {
//         src: "../images/image-geometry_2.svg",
//         class: "project-geometry-1",
//     },
//     {
//         src: "../images/Rectangle 46.svg",
//         class: "project-img-3",
//     },
//     {
//         src: "../images/Rectangle 25.svg",
//         class: "project-img-2",
//     },
//     {
//         src: "../images/Rectangle 26.svg",
//         class: "project-img-4",
//     },
//     {
//         src: "../images/Rectangle 27.svg",
//         class: "project-img-5",
//     },
//     {
//         src: "../images/image-geometry_3.svg",
//         class: "project-geometry-2",
//     },
//     {
//         src: "../images/image-geometry_5.svg",
//         class: "project-geometry-3",
//     },
//     {
//         src: "../images/image-geometry_4.svg",
//         class: "project-geometry-4",
//     },
//     {
//         src: "../images/Rectangle 47.svg",
//         class: "project-img-6",
//     },
// ]
// // Selecte element from the document
// const projectSection = document.querySelector('.projects-part');

// // Create element to use it as a container for the elements
// const projectsDesktop = document.createElement('div');
// projectsDesktop.className = "projects-desktop";
// const projectsImg = document.createElement('div');
// projectsImg.className = "project-imgs";
// const projectsTitle = document.createElement('div');
// projectsTitle.className="project-title";
// projectsTitle.innerHTML = `<h2>projects</h2>`;

// // map througth the object to iterrate and get each individual elements value
// projects.map(item => {    
//     projectsImg.innerHTML += `
//             <div class="${item.class}">
//                 <img src="${item.src}" alt="img" />
//             </div>
//         `
// })

// // append the container in the document
// projectsDesktop.appendChild(projectsTitle);
// projectsDesktop.appendChild(projectsImg);
// projectSection.appendChild(projectsDesktop)
// console.log(projectSection)
