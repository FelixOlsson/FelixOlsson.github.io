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
		"location" : "Lund",
		"dates" : "2009-01-03 2010-01-03",
		"description" : "delade ut tidningar"
	}]
};

var projects = {
	"projects" : [
	{
		"title" : "android app",
		"dates" : 2017,
		"description" : "small game",
		"images" : [],
		"video" : "videos/gameplayMobileGame.mp4",
		"repo" : "url"
	}]

};

$("#header").append(HTMLheaderName.replace("%data%", bio.name));

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	bio.skills.forEach(function(skill) {
		$("#skills").append(HTMLskills.replace("%data%",skill));
	}); 
}

if(work.jobs.length > 0) {
		
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace
		("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace
		("%data%", job.title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace
		("%data%", job.dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace
		("%data%", job.description);
		$(".work-entry:last").append(formattedDescription);
	} );
}
displayWork(work);

function displayWork(work) {
	if(work.jobs.length > 0) {
		
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace
		("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace
		("%data%", job.title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace
		("%data%", job.dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace
		("%data%", job.description);
		$(".work-entry:last").append(formattedDescription);
	} );
}
}

$(document).click(function(loc) {
 var x = loc.pageX;
 var y = loc.pageY;

 logClicks(x, y);
});

function locationizer(work_obj) {
	var locationArray = [];

	work_obj.jobs.forEach(function(job) {
		var newLocation = job.location;
		locationArray.push(newLocation);
	} );

	return locationArray;
}

console.log(locationizer(work));

$("#main").append(internationalizeButton);


projects.display = function() {
	projects.projects.forEach(function(project) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace
		("%data%", project.title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDate= HTMLprojectDates.replace
		("%data%", project.dates);
		$(".project-entry:last").append(formattedDate);

		var formattedDescription = HTMLprojectDescription.replace
		("%data%", project.description);
		$(".project-entry:last").append(formattedDescription);

		project.images.forEach(function(image) {
			var formattedImages = HTMLprojectImage.replace
			("%data%", image);
			$(".project-entry:last").append(formattedImages);
		});

		var formattedVideo = HTMLprojectVideo.replace
		("%data%", project.video);
		$(".project-entry:last").append(formattedVideo);
		
	});
}

projects.display();



