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
    
    for (const elt of filteredJobs) {
        
        const jobListing_div = document.createElement('div');
        const main_div = document.createElement('div');
        const jobDiv = document.createElement('div');
        const div_picture = document.createElement('div');
        const div_job_title = document.createElement('div');
        const profile_div = document.createElement('div');
        const role_div = document.createElement('div');
        
        const position_div = document.createElement('div');
        const duration_div = document.createElement('div');
        const postedAt_div = document.createElement('div');
        const logo_div = document.createElement('div');
        const languages_div = document.createElement('div');
        const contract_div = document.createElement('div');
        const toolDiv = document.createElement('div');
  
        const span_company = document.createElement('span');
        const old = document.createElement('span');
        const job_title = document.createElement('span');
        const featured_text = document.createElement('span');
        const span_duration = document.createElement('span');
        const span_contract = document.createElement('span');
        const logo = document.createElement('img');
        const role_span = document.createElement('span');
        const position_span = document.createElement('span');
  
        // styles 
        jobListing_div.className = 'listing_div';
        main_div.className = 'divMain';
        profile_div.className = 'profile_div';
        div_picture.className = 'div_picture';
        jobDiv.className = 'jobDiv';
        div_job_title.className = 'div_job_title';
        contract_div.className = 'contract_div';
        toolDiv.className = 'toolDiv';
        
        
        role_div.className = 'role_div';
        position_div.className = 'position_div';
        postedAt_div.className = 'postedAt_div';
        logo_div.className = 'logo_div';
        span_contract.className = 'span_contract';
        languages_div.className = 'languages_div';
        role_span.className = 'role_span';
        position_span.className = 'position_span';
 
        span_company.textContent = elt.company;
        logo.src = elt.logo;
        job_title.textContent = elt.position;
        span_duration.textContent = elt.postedAt + ' - ' + elt.contract + ' - ' + elt.location;
        role_span.textContent = elt.role;
        position_span.textContent = elt.level;
        
        profile_div.appendChild(span_company);
        
        if(elt.new) {
            old.textContent = " New";
            profile_div.appendChild(old);
        }
 
        if(elt.featured) {
            featured_text.textContent = ' Featured';
            profile_div.appendChild(featured_text);
            main_div.classList.add('featured-listing');
        }
 
        div_picture.appendChild(logo);
        main_div.appendChild(div_picture);
        contract_div.appendChild(span_duration);
        div_job_title.appendChild(job_title);
        duration_div.appendChild(span_contract);
        jobDiv.appendChild(profile_div);
        jobDiv.appendChild(div_job_title);
        jobDiv.appendChild(contract_div);
        jobDiv.appendChild(duration_div);

        // Role
        role_span.addEventListener('click', () => addFilter(elt.role));
        toolDiv.appendChild(role_span);
        
        // Level
        position_span.addEventListener('click', () => addFilter(elt.level));
        toolDiv.appendChild(position_span);
        
        // Languages
        elt.languages.forEach(language => {
            const language_span = document.createElement('span');
            language_span.className = 'language_span';
            language_span.textContent = language;
            language_span.addEventListener('click', () => addFilter(language));
            toolDiv.appendChild(language_span);
        });
        
        // tools
        elt.tools.forEach(tool => {
            const tool_span = document.createElement('span');
            tool_span.className = 'language_span';
            tool_span.textContent = tool;
            tool_span.addEventListener('click', () => addFilter(tool));
            toolDiv.appendChild(tool_span);
        });
        
        main_div.appendChild(jobDiv);
        main_div.appendChild(toolDiv);
        
        jobListing_div.appendChild(main_div);
        main.appendChild(jobListing_div);
    }
}