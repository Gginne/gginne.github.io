const projects = [
    {
        name: "Project 1",
        desc: "This is project #1",
        github: "#",
        host: "#"
    },
    {
        name: "Project 2",
        desc: "This is project #2",
        github: "#",
        host: "#"
    },
    {
        name: "Project 3",
        desc: "This is project #3",
        github: "#",
        host: "#"
    },
    {
        name: "Project 4",
        desc: "This is project #4",
        github: "#",
        host: "#"
    },
    {
        name: "Project 5",
        desc: "This is project #5",
        github: "#",
        host: "#"
    },
 
  
]

let worksHTML = ""
projects.forEach((project, index) => {
    let content = `
    <div class="item">
        <div class="item-overlay">
            <p class="lead text-primary">${project.name}</hp>
            <p class="small">${project.desc}</p>
            <div class="my-1">
                <a href=${project.github} class="btn btn-primary"><i class="fab fa-github"></i></a>
                <a href=${project.host} class="btn btn-primary"><i class="fas fa-external-link-alt"></i></a>
            </div>
        </div>
        <img src="./img/item${index+1}.png" alt="${project.name}" >
    </div>
    `

    if(index % 2 === 0){
        content = '<div class="items">'+content
    } else{
        content += "</div>"
    }

    worksHTML += content
})
document.querySelector(".works").innerHTML = worksHTML