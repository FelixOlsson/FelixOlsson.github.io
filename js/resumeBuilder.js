/*
This is empty on purpose! Your code to build the resume will go here.
 */

var skills = ["java", "c++", "c#", "sql", "javascript", "opengl"];

var bio = {
	"name" : "Felix Olsson",
	"role" : "Software developer",
	"age" : "27",
	"contacts" : {
		"mobile" : "0730-31 58 04",
		"email" : "dat12fol@student.lu.se",
		"github" : "dat12fol",
		"location" : "Lund"
	},
	"bioPic" : "images/fry.jpg",
	"welcome message" : "Välkommen till min sida",
	"skills" : skills 
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
