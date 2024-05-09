window.onload = function() {
    var doctor = {
        fullName: "博士全名",
        title: "博士头衔",
        bio: "博士简介",
        photo: "博士照片的URL",
        publications: ["发表的论文1", "发表的论文2", "发表的论文3"]
    };
    document.getElementById("fullName").textContent = doctor.fullName;
    document.getElementById("title").textContent = doctor.title;
    document.getElementById("bio").textContent = doctor.bio;
    document.getElementById("profilePhoto").src = doctor.photo;
    var publicationsList = document.getElementById("publications");
    for(var i=0; i<doctor.publications.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = doctor.publications[i];
        publicationsList.appendChild(listItem);
    }
}