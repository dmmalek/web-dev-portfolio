document.addEventListener('DOMContentLoaded', function () {
	// Fetch the JSON data
	fetch('data.json')
		.then(response => response.json())
		.then(data => {
			// Populate banner section
			document.querySelector('.banner-description h4').textContent = data.banner.greeting;
			document.querySelector('.banner-description h1').textContent = data.banner.name;
			document.querySelector('.banner-description p').textContent = data.banner.description;

			// Populate about section
			document.querySelector('.about-me h1').textContent = data.about.title;
			document.querySelector('.about-me p').textContent = data.about.description;
			document.querySelectorAll('.about-me-details-sub h4')[0].textContent = data.about.details.name;
			document.querySelectorAll('.about-me-details-sub h4')[1].textContent = data.about.details.email;
			document.querySelectorAll('.about-me-details-sub h4')[2].textContent = data.about.details.dob;
			document.querySelectorAll('.about-me-details-sub h4')[3].textContent = data.about.details.location;

			// Populate skills section
			document.querySelector('.what-i-do-description h1').textContent = data.skills.title;
			document.querySelector('.what-i-do-description p').textContent = data.skills.description;

			const skillCards = document.querySelectorAll('.card-details');
			data.skills.items.forEach((item, index) => {
				if (skillCards[index]) {
					skillCards[index].querySelector('img').src = item.icon;
					skillCards[index].querySelector('img').alt = item.title;
					skillCards[index].querySelector('h4').textContent = item.title;
					skillCards[index].querySelector('p').textContent = item.description;
				}
			});

			// Populate resume section
			document.querySelector('.resume h1').textContent = data.resume.title;

			const educationItems = document.querySelectorAll('.my-education-details');
			data.resume.education.forEach((item, index) => {
				if (educationItems[index]) {
					educationItems[index].querySelector('h3').textContent = item.degree;
					educationItems[index].querySelector('h4').textContent = item.institution;
					educationItems[index].querySelector('p').textContent = item.description;
				}
			});

			const experienceItems = document.querySelectorAll('.my-experience-details');
			data.resume.experience.forEach((item, index) => {
				if (experienceItems[index]) {
					experienceItems[index].querySelector('h3').textContent = item.position;
					experienceItems[index].querySelector('h4').textContent = item.company;
					experienceItems[index].querySelector('p').textContent = item.description;
				}
			});

			// Populate projects section
			document.querySelector('.projects-header h1').textContent = data.projects.title;
			document.querySelector('.projects-header p').textContent = data.projects.description;

		

			const projectsContainer = document.getElementById('projects-container');
			data.projects.items.forEach(project => {
				const projectCard = document.createElement('a');
				projectCard.className = 'project-card';
				projectCard.href = project.link;
				projectCard.target = "_blank";
				projectCard.rel = "noopener noreferrer";

				projectCard.innerHTML = `
				<img src="${project.image}" alt="${project.name}" class="project-image">
    <div class="project-info">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
    </div>
  `;
				projectsContainer.appendChild(projectCard);
			});
			
		})
		.catch(error => {
			console.error('Error loading JSON data:', error);
		});
});