function skillsMember() 
{
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberList = document.getElementById("memberList");
    var skillsList = document.getElementById("skillsList");
    var projectsList = document.getElementById("projectsList");
    var contactList = document.getElementById("contactList");
    member.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    memberList.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
    skillsList.style.backgroundColor = "rgb(0, 0, 0, 0)";
    projectsList.style.backgroundColor = "rgb(0, 0, 0, 0)";
    contactList.style.backgroundColor = "rgb(0, 0, 0, 0)";
}
