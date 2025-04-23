const main = document.querySelector('.main');

// Global variables for filtering

let activeFilters = [];
let allJobsData = [];

// Create the filter area
const filterContainer = document.createElement('div');
filterContainer.className = 'filter-container';
filterContainer.style.display = 'none';

const filterWrapper = document.createElement('div');
filterWrapper.className = 'filter-wrapper';

const filtersDiv = document.createElement('div');
filtersDiv.className = 'filters';

const clearButton = document.createElement('button');
clearButton.className = 'clear-button';
clearButton.textContent = 'Clear';
clearButton.addEventListener('click', () => {
    activeFilters = [];
    filterContainer.style.display = 'none';
    filtersDiv.innerHTML = '';
    displayJobs(allJobsData);
});

filterWrapper.appendChild(filtersDiv);
filterWrapper.appendChild(clearButton);
filterContainer.appendChild(filterWrapper);

// Insert filter area before main content
main.insertBefore(filterContainer, main.firstChild);

fetch('data.json')
    .then((response) => (response.json())
        .then((data) => {
            try {
                allJobsData = data; // Stocker toutes les données
                displayJobs(data);
            } catch (error) {
                console.log(error);
            }
        })
    );

// Add filter function
function addFilter(filterValue) {
    // Check if the filter already exists
    if (activeFilters.includes(filterValue)) {
        return; // Do not add duplicates
    }

    activeFilters.push(filterValue);
    
    // Make the filter container visible
    filterContainer.style.display = 'block';
    
    // Create the filter element
    const filterTag = document.createElement('div');
    filterTag.className = 'filter-tag';
    
    const filterText = document.createElement('span');
    filterText.className = 'filter-text';
    filterText.textContent = filterValue;
    
    const removeBtn = document.createElement('span');
    removeBtn.className = 'remove-filter';
    removeBtn.innerHTML = '&times;';
    removeBtn.addEventListener('click', () => {
        // remove the filters
        activeFilters = activeFilters.filter(filter => filter !== filterValue);
        filterTag.remove();
        
        // If there is no active filters, hide the container
        if (activeFilters.length === 0) {
            filterContainer.style.display = 'none';
        }
        
        // Re-display offers according to the remaining filters
        displayJobs(allJobsData);
    });
    
    filterTag.appendChild(filterText);
    filterTag.appendChild(removeBtn);
    filtersDiv.appendChild(filterTag);
    
    // Filter the offers
    displayJobs(allJobsData);
}

// Function to check if an offer matches active filters
function jobMatchesFilters(job) {
    if (activeFilters.length === 0) {
        return true; // No filter, show all jobs 
    }
    
    // Create a table of all filterable properties of the job
    const jobTags = [
        job.role,
        job.level,
        ...job.languages,
        ...job.tools
    ];
    
    // Check if all active filters are present in this job
    return activeFilters.every(filter => jobTags.includes(filter));
}

function displayJobs(data) {
    // Remove the displayed jobs 
    const jobListings = document.querySelectorAll('.listing_div');
    jobListings.forEach(listing => listing.remove());
    
    // Show only jobs that match filters
    const filteredJobs = data.filter(jobMatchesFilters);
    
    // show the filtered offers
    filteredJobs.forEach(createJobCard);
}

// Function to create the job card
function createJobCard(job) {
    // Create the main elements
    const elements = createElements();
    
    // Apply styles to elements
    applyStyles(elements);
    
    // Fill up the elements with the given data
    fillElements(elements, job);
    
    // Add the features 
    addBadges(elements, job);
    
    // Structure the elements in the DOM
    buildJobCardStructure(elements);
    
    // Add the events tags (role, level, languages, tools)
    addTags(elements, job);
    
    // Add to the main container
    elements.jobListing_div.appendChild(elements.main_div);
    main.appendChild(elements.jobListing_div);
}

// Create the necessary elements
function createElements() {
    return {
        jobListing_div: document.createElement('div'),
        main_div: document.createElement('div'),
        jobDiv: document.createElement('div'),
        div_picture: document.createElement('div'),
        div_job_title: document.createElement('div'),
        profile_div: document.createElement('div'),
        role_div: document.createElement('div'),
        position_div: document.createElement('div'),
        duration_div: document.createElement('div'),
        postedAt_div: document.createElement('div'),
        logo_div: document.createElement('div'),
        languages_div: document.createElement('div'),
        contract_div: document.createElement('div'),
        toolDiv: document.createElement('div'),
        span_company: document.createElement('span'),
        old: document.createElement('span'),
        job_title: document.createElement('span'),
        featured_text: document.createElement('span'),
        span_duration: document.createElement('span'),
        span_contract: document.createElement('span'),
        logo: document.createElement('img'),
        role_span: document.createElement('span'),
        position_span: document.createElement('span')
    };
}

// Apply CSS to elements 
function applyStyles(elements) {
    elements.jobListing_div.className = 'listing_div';
    elements.main_div.className = 'divMain';
    elements.profile_div.className = 'profile_div';
    elements.div_picture.className = 'div_picture';
    elements.jobDiv.className = 'jobDiv';
    elements.div_job_title.className = 'div_job_title';
    elements.contract_div.className = 'contract_div';
    elements.toolDiv.className = 'toolDiv';
    elements.role_div.className = 'role_div';
    elements.position_div.className = 'position_div';
    elements.postedAt_div.className = 'postedAt_div';
    elements.logo_div.className = 'logo_div';
    elements.span_contract.className = 'span_contract';
    elements.languages_div.className = 'languages_div';
    elements.role_span.className = 'role_span';
    elements.position_span.className = 'position_span';
}

// Fill up the elements avec the job data
function fillElements(elements, job) {
    elements.span_company.textContent = job.company;
    elements.logo.src = job.logo;
    elements.job_title.textContent = job.position;
    elements.span_duration.textContent = job.postedAt + ' - ' + job.contract + ' - ' + job.location;
    elements.role_span.textContent = job.role;
    elements.position_span.textContent = job.level;
    
    elements.profile_div.appendChild(elements.span_company);
}

// Ajoute les badges (New, Featured) si nécessaire
function addBadges(elements, job) {
    if(job.new) {
        elements.old.textContent = " New";
        elements.profile_div.appendChild(elements.old);
    }

    if(job.featured) {
        elements.featured_text.textContent = ' Featured';
        elements.profile_div.appendChild(elements.featured_text);
        elements.main_div.classList.add('featured-listing');
    }
}

// Structure les éléments dans le DOM
function buildJobCardStructure(elements) {
    elements.div_picture.appendChild(elements.logo);
    elements.main_div.appendChild(elements.div_picture);
    
    elements.contract_div.appendChild(elements.span_duration);
    elements.div_job_title.appendChild(elements.job_title);
    elements.duration_div.appendChild(elements.span_contract);
    
    // Assembler la section des infos du job
    elements.jobDiv.appendChild(elements.profile_div);
    elements.jobDiv.appendChild(elements.div_job_title);
    elements.jobDiv.appendChild(elements.contract_div);
    elements.jobDiv.appendChild(elements.duration_div);
    
    // Ajouter le jobDiv au main_div
    elements.main_div.appendChild(elements.jobDiv);
}

// Ajoute les tags cliquables (role, level, languages, tools)
function addTags(elements, job) {
    // Role
    elements.role_span.addEventListener('click', () => addFilter(job.role));
    elements.toolDiv.appendChild(elements.role_span);
    
    // Level
    elements.position_span.addEventListener('click', () => addFilter(job.level));
    elements.toolDiv.appendChild(elements.position_span);
    
    // Languages
    job.languages.forEach(language => {
        const language_span = document.createElement('span');
        language_span.className = 'language_span';
        language_span.textContent = language;
        language_span.addEventListener('click', () => addFilter(language));
        elements.toolDiv.appendChild(language_span);
    });
    
    // Tools
    job.tools.forEach(tool => {
        const tool_span = document.createElement('span');
        tool_span.className = 'language_span';
        tool_span.textContent = tool;
        tool_span.addEventListener('click', () => addFilter(tool));
        elements.toolDiv.appendChild(tool_span);
    });
    
    // Ajouter le toolDiv au main_div
    elements.main_div.appendChild(elements.toolDiv);
}