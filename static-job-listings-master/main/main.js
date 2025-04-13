console.log("Javascript js");
const main = document.querySelector('.main');

fetch('data.json')
    .then((response) => (response.json())
        .then((data) => {
            try {
                displayElemets(data);
                /* for(const e of data) {
                    console.log('id: ', e.id);
                } */ 
                // console.log('data' , data);
            } catch (error) {
                console.log(error);
            }
        })
    );

function displayElemets(data) {

    for (const elt of data) {

        // create elements
        const jobListing_div = document.createElement('div');
        const main_div = document.createElement('div');
        const second_div = document.createElement('div');
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
        const third_div = document.createElement('div');

        const span_company = document.createElement('span');
        const old = document.createElement('span');
        const job_title = document.createElement('span');
        const featured_text = document.createElement('span');
        const contract = document.createElement('span');
        const span_duration = document.createElement('span');
        const span_role = document.createElement('span');
        const span_day = document.createElement('span');
        const span_contract = document.createElement('span');
        const span_location = document.createElement('span');
        const logo = document.createElement('img');
        const role_span = document.createElement('span');
        const position_span = document.createElement('span');

        // styles 
        jobListing_div.className = 'listing_div';
        main_div.className = 'divMain';
        profile_div.className = 'profile_div';
        div_picture.className = 'div_picture';
        second_div.className = 'second_div';
        div_job_title.className = 'div_job_title';
        contract_div.className = 'contract_div';
        third_div.className = 'third_div';
        
        
        role_div.className = 'role_div';
        position_div.className = 'position_div';
        postedAt_div.className = 'postedAt_div';
        logo_div.className = 'logo_div';
        span_contract.className = 'span_contract';
        languages_div.className = 'languages_div';
        role_span.className = 'role_span';
        position_span.className = 'position_span';


        // 
        span_company.textContent = elt.company;
        logo.src = elt.logo;
        job_title.textContent = elt.position;
        span_duration.textContent = elt.postedAt + ' - ' + elt.contract + ' - ' + elt.location;
        role_span.textContent = elt.role;
        position_span.textContent = elt.level;
        
        profile_div.appendChild(span_company);
        
        // put this code into a private function and called it. 
        if(elt.new === true) {
            old.textContent = " New";
            profile_div.appendChild(old);
        } else {
            old.textContent = " ";
            profile_div.appendChild(old);
            
        }

        if(elt.featured === true) {
            featured_text.textContent = ' Featured';
            profile_div.appendChild(featured_text);
            main_div.classList.add('featured-listing');
        } else {
            featured_text.textContent = ' ';
            profile_div.appendChild(featured_text);
            // main_div.classList.add('featured-listing');
            document.querySelectorAll('.featured-listing').display= 'none';
        }

        // profile_div.appendChild(old);
        div_picture.appendChild(logo);
        main_div.appendChild(div_picture);
        contract_div.appendChild(span_duration);
        div_job_title.appendChild(job_title);
        duration_div.appendChild(span_contract);
        second_div.appendChild(profile_div);
        // second_div.appendChild(featured_div);
        second_div.appendChild(div_job_title);
        second_div.appendChild(contract_div);
        second_div.appendChild(duration_div);
        
        third_div.appendChild(role_span);
        third_div.appendChild(position_span);
        
        // Ajouter les langages
        elt.languages.forEach(language => {
            const language_span = document.createElement('span');
            language_span.className = 'language_span';
            language_span.textContent = language;
            third_div.appendChild(language_span);
        });
        
        // Ajouter également les outils de la même façon
        elt.tools.forEach(tool => {
            const tool_span = document.createElement('span');
            tool_span.className = 'language_span';
            tool_span.textContent = tool;
            third_div.appendChild(tool_span);
        });
        
        main_div.appendChild(second_div);
        main_div.appendChild(third_div);
        
        jobListing_div.appendChild(main_div);
        main.appendChild(jobListing_div);

    }

    /* const divMain = document.createElement('div');
    const divMain = document.createElement('div');
    const divMain = document.createElement('div');
    const divMain = document.createElement('div');
    const divMain = document.createElement('div'); */

}

/* 
"id": 4,
    "company": "MyHome",
    "logo": "./images/myhome.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": [] */ 