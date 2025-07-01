const charts = document.getElementById("charts");

// charge data

fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // find the highest value in the data map
        const maxValue = Math.max(...data.map(item => item.amount));

        // Generate the HTML for the chart
        charts.innerHTML =  data.map(item => {
            // Find the height in percentage of the bar 
            const heightPercent = Math.round((item.amount / maxValue) * 100);

            // Determine the color of the bar based on the amount
            const isMax = item.amount === maxValue;
            // console.log(maxValue);
            const color = isMax ? "bg-cyan-500" : "bg-red-500";
            console.log("color: " + heightPercent);
            // Why the color is not working 
            return `
                <div class="flex flex-col items-center">
                    <div class="${color} rounded-md w-7" style="height: ${heightPercent}%"></div>
                    <span class="mt-2 text-xs text-gray-500">${item.day}</span>
                </div>
            `;
        }).join('');

        charts.className = "flex items-end justify-between h-40 w-full gap-3 px-4";
        
    }).catch(error => {
        charts.innerHTML = "<p class='text-red-500'>Error to upload the data: " + error + "</p>";
        console.log("error", error);
    });
