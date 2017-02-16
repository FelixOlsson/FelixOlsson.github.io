/*
This is empty on purpose! Your code to build the resume will go here.
 */

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
	"skills" : ["java", "c++", "c#", "sql", "javascript", "opengl"] 
};


var education = {
	"schools" : [
	{
		"name" : "Berga",
		"location" : "Malmö",
		"major" : ["grundskola"],
		"dates" : 2005,
		"url" : " "
	},
	{
		"name" : "Heleneholm",
		"location" : "Malmö",
		"degree" : ["Samhäll"],
		"dates" : 2008,
		"url" : " "
	}]
,
	"onlineCourses" : [
	{
		"title" : "JavaScript Syntax",
		"School" : "Udacity",
		"dates" : 2017,
		"url" : " "
	}
  ]
};

var work = {
	"jobs" : [
	{
		"employer" : "tidningsbärarna",
		"title" : "tidningsbud",
		"dates" : "2009-01-03 2010-01-03",
		"description" : "delade ut tidningar"
	}]
};

var projects = {
	"projects" : [
	{
		"title" : "android app",
		"dates" : 2016,
		"description" : "small game",
		"images" : ["url"]
	}]

};

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	$('#header').append("<h1>test title</h1>");
	
	for(skill in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
	} 
}





