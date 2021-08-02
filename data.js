alert("Check Out Our Stores!!!")

// running random 
function getRandomNumber(minCustomers, maxCustomers) {

    return (Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers);
}


const buisnessHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"]
const cities = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"]



let Seattle = {
    cityName: "Seattle",
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,

    getCustomersPerHour: function () {

        for (let index = 0; index < buisnessHours.length; index++) {

            this.customersPerHour.push(getRandomNumber(this.minCustomers, this.maxCustomers));
        }

        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);

        // console.log("loaded up the customers....")
    },

    getcookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();


        for (let index = 0; index < this.customersPerHour.length; index++) {

            let dailyCookies = Math.floor(this.customersPerHour[index] * this.avgCookies);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies += dailyCookies;
            
        }
        this.cookiesSoldPerHour.push(this.totalDailyCookies);
        console.log(this.cookiesSoldPerHour);
    },
    


    show() {
        this.getcookiesSoldPerHour();
        this.CitiesTableData();
        // const table = document.getElementById('mySales');
        for (let b = 0; b < buisnessHours.length; b++) {
            const listItem = document.createElement('li');
            // 6am: 16 cookies
            listItem.textContent = buisnessHours[b] + ';' + this.cookiesSoldPerHour[b] + 'cookies';
            unorderedList.appendChild(listItem);
        }
        const listItem = document.createElement('li');
        // table.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        // unorderedList.appendChild(listItem);
        // for (let b = 0; b < CitiesTabledata.length; b++) {
        //     const table = document.createElement('th');
        //     // 6am: 16 cookies
        //     table.textContent = CitiesTabledata[b] + ';' + this.cookiesSoldPerHour[b] + 'cookies';
        //     table.appendChild(table);
        // }
        
        // const table = document.createElement('th');
        // table.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
        // table.appendChild(table);
        
    },
    
    showTable() {
        this.getcookiesSoldPerHour();
        let table = document.getElementById('mySales');
        const newRowEl = document.createElement('tr');
       
        const newHeadEl = document.createElement('th'); 
        newHeadEl.textContent = this.cityName; 
        newRowEl.appendChild(newHeadEl)
       
        console.log(this.cookiesSoldPerHour);
        
    
        for (let b = 0; b < this.cookiesSoldPerHour.length; b++) {
            const newElement = document.createElement('td');
            newElement.textContent = this.cookiesSoldPerHour[b];
            newRowEl.appendChild(newElement);


            
           
        }

        table.appendChild(newRowEl)

    }

  }



// Seattle.show();
Seattle.showTable();

for (let index = 0; index < Seattle.buisnessHours; index++) {
    console.log(Seattle.buisnessHours[index]);

}




let Tokyo = {
    cityName: "Tokyo",
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    customersPerHour: [],
    cookiesPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,

    getCustomersPerHour: function () {

        for (let h = 0; h < buisnessHours.length; h++) {

            this.customersPerHour.push(getRandomNumber(this.minCustomers, this.maxCustomers));
        }

        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);

        // console.log("loaded up the customers....")
    },

    getcookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();

        for (let h = 0; h < this.customersPerHour.length; h++) {

            let dailyCookies = Math.floor(this.customersPerHour[h] * this.avgCookies);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies += dailyCookies;
        }
    },


    // show() {
    //     this.getcookiesSoldPerHour();
    //     const unorderedList = document.getElementById('Tokyo');
    //     for (let a = 0; a < buisnessHours.length; a++) {
    //         const listItem = document.createElement('li');
    //         // 6am: 16 cookies
    //         listItem.textContent = buisnessHours[a] + ';' + this.cookiesSoldPerHour[a] + 'cookies';
    //         unorderedList.appendChild(listItem);
    //     }
    //     const listItem = document.createElement('li');
    //     listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    //     unorderedList.appendChild(listItem);
    // },
   
    showTable() {
        this.getcookiesSoldPerHour();
        let table = document.getElementById('mySales');
        const newRowEl = document.createElement('tr');
       
        const newHeadEl = document.createElement('th'); 
        newHeadEl.textContent = this.cityName; 
        newRowEl.appendChild(newHeadEl)
       
        console.log(this.cookiesSoldPerHour);
        
    
        for (let a = 0; a < this.cookiesSoldPerHour.length; a++) {
            const newElement = document.createElement('td');
            newElement.textContent = this.cookiesSoldPerHour[a];
            newRowEl.appendChild(newElement);


            
           
        }
        
        table.appendChild(newRowEl)
    }

}

// Tokyo.show();
Tokyo.showTable();

for (let index = 0; index < Tokyo.customersPerHour; index++) {
    console.log(Tokyo.customersPerHour[index]);

}






let Dubai = {
    cityName: "Dubai",
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,

    getCustomersPerHour: function () {

        for (let x = 0; x < buisnessHours.length; x++) {

            this.customersPerHour.push(getRandomNumber(this.minCustomers, this.maxCustomers));
        }

        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);

        // console.log("loaded up the customers....")
    },

    getcookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();

        for (let x = 0; x < this.customersPerHour.length; x++) {

            let dailyCookies = Math.floor(this.customersPerHour[x] * this.avgCookies);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies += dailyCookies;
        }
    },


    // show() {
    //     this.getcookiesSoldPerHour();
    //     const unorderedList = document.getElementById('Dubai');
    //     for (let c = 0; c < buisnessHours.length; c++) {
    //         const listItem = document.createElement('li');
    //         // 6am: 16 cookies
    //         listItem.textContent = buisnessHours[c] + ';' + this.cookiesSoldPerHour[c] + 'cookies';
    //         unorderedList.appendChild(listItem);
    //     }
    //     const listItem = document.createElement('li');
    //     listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    //     unorderedList.appendChild(listItem);
    // },

    showTable() {
        this.getcookiesSoldPerHour();
        let table = document.getElementById('mySales');
        const newRowEl = document.createElement('tr');
       
        const newHeadEl = document.createElement('th'); 
        newHeadEl.textContent = this.cityName; 
        newRowEl.appendChild(newHeadEl)
       
        console.log(this.cookiesSoldPerHour);
        
    
        for (let c = 0; c < this.cookiesSoldPerHour.length; c++) {
            const newElement = document.createElement('td');
            newElement.textContent = this.cookiesSoldPerHour[c];
            newRowEl.appendChild(newElement);


            
           
        }
        table.appendChild(newRowEl)
    }

}



// Dubai.show();
Dubai.showTable();

for (let index = 0; index < Dubai.customersPerHour; index++) {
    console.log(Dubai.customersPerHour[index]);

}



let Paris = {
    cityName: "Paris",
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    customersPerHour: [],
    cookiesPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,

    getCustomersPerHour: function () {

        for (let k = 0; k < buisnessHours.length; k++) {

            this.customersPerHour.push(getRandomNumber(this.minCustomers, this.maxCustomers));
        }

        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);

        // console.log("loaded up the customers....")
    },

    getcookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();

        for (let k = 0; k < this.customersPerHour.length; k++) {

            let dailyCookies = Math.floor(this.customersPerHour[k] * this.avgCookies);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies += dailyCookies;
        }
    },


    // show() {
    //     this.getcookiesSoldPerHour();
    //     const unorderedList = document.getElementById('Paris');
    //     for (let d = 0; d < buisnessHours.length; d++) {
    //         const listItem = document.createElement('li');
    //         // 6am: 16 cookies
    //         listItem.textContent = buisnessHours[d] + ';' + this.cookiesSoldPerHour[d] + 'cookies';
    //         unorderedList.appendChild(listItem);
    //     }
    //     const listItem = document.createElement('li');
    //     listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    //     unorderedList.appendChild(listItem);
    // },

    
    showTable() {
        this.getcookiesSoldPerHour();
        let table = document.getElementById('mySales');
        const newRowEl = document.createElement('tr');
       
        const newHeadEl = document.createElement('th'); 
        newHeadEl.textContent = this.cityName; 
        newRowEl.appendChild(newHeadEl)
       
        console.log(this.cookiesSoldPerHour);
        
    
        for (let e = 0; e < this.cookiesSoldPerHour.length; e++) {
            const newElement = document.createElement('td');
            newElement.textContent = this.cookiesSoldPerHour[e];
            newRowEl.appendChild(newElement);


            
           
        }
        table.appendChild(newRowEl)
    }

}



// Paris.show();
Paris.showTable();

for (let g = 0; g < Paris.customersPerHour; g++) {
    console.log(Paris.customersPerHour[g]);

}




let Lima = {
    cityName: "Lima",
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    customersPerHour: [],
    cookiesPerHour: [],
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,

    getCustomersPerHour: function () {

        for (let y = 0; y < buisnessHours.length; y++) {

            this.customersPerHour.push(getRandomNumber(this.minCustomers, this.maxCustomers));
        }

        console.log(`The min value is ${this.minCustomers} the max value is ${this.maxCustomers}`);

        // console.log("loaded up the customers....")
    },

    getcookiesSoldPerHour: function () {
        totalDailyCookies = 0;
        this.getCustomersPerHour();

        for (let y = 0; y < this.customersPerHour.length; y++) {

            let dailyCookies = Math.floor(this.customersPerHour[y] * this.avgCookies);

            this.cookiesSoldPerHour.push(dailyCookies);

            this.totalDailyCookies += dailyCookies;
        }
    },


    // show() {
    //     this.getcookiesSoldPerHour();
    //     const unorderedList = document.getElementById('Lima');
    //     for (let j = 0; j < buisnessHours.length; j++) {
    //         const listItem = document.createElement('li');
    //         // 6am: 16 cookies
    //         listItem.textContent = buisnessHours[j] + ';' + this.cookiesSoldPerHour[j] + 'cookies';
    //         unorderedList.appendChild(listItem);
    //     }
    //     const listItem = document.createElement('li');
    //     listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    //     unorderedList.appendChild(listItem);
    // },
    showTable() {
        this.getcookiesSoldPerHour();
        let table = document.getElementById('mySales');
        const newRowEl = document.createElement('tr');
       
        const newHeadEl = document.createElement('th'); 
        newHeadEl.textContent = this.cityName; 
        newRowEl.appendChild(newHeadEl)
       
        console.log(this.cookiesSoldPerHour);
        
    
        for (let w = 0; w< this.cookiesSoldPerHour.length; w++) {
            const newElement = document.createElement('td');
            newElement.textContent = this.cookiesSoldPerHour[w];
            newRowEl.appendChild(newElement);


            
           
        }
        table.appendChild(newRowEl)
    }

}



// Lima.show();
Lima.showTable();

for (let q = 0; q < Lima.customersPerHour; q++) {
    console.log(Lima.customersPerHour[q]);

}



// let eLocations = [Seattle,]

// for (let index = 0; index < eLocations.length; index++) {
//     eLocations[index].show();
// }
