const moment  = require("moment");

module.exports = Object.freeze({
    CALENDAR_INITIAL_EVENTS : [
        {title : "Product call", theme : "GREEN", startTime : moment().add(-12, 'd').startOf('day'), endTime : moment().add(-12, 'd').endOf('day')},
        {title : "Meeting with tech team", theme : "PINK", startTime : moment().add(-8, 'd').startOf('day'), endTime : moment().add(-8, 'd').endOf('day')},
        {title : "Meeting with Cristina", theme : "PURPLE", startTime : moment().add(-2, 'd').startOf('day'), endTime : moment().add(-2, 'd').endOf('day')},
        {title : "Meeting with Alex", theme : "BLUE", startTime : moment().startOf('day'), endTime : moment().endOf('day')}, 
        {title : "Product Call", theme : "GREEN", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "PURPLE", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Client Meeting", theme : "ORANGE", startTime : moment().add(3, 'd').startOf('day'), endTime : moment().add(3, 'd').endOf('day')},
        {title : "Product meeting", theme : "PINK", startTime : moment().add(5, 'd').startOf('day'), endTime : moment().add(5, 'd').endOf('day')},
        {title : "Sales Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Product Meeting", theme : "ORANGE", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Marketing Meeting", theme : "PINK", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Client Meeting", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Sales meeting", theme : "BLUE", startTime : moment().add(12, 'd').startOf('day'), endTime : moment().add(12, 'd').endOf('day')},
        {title : "Client meeting", theme : "PURPLE", startTime : moment().add(16, 'd').startOf('day'), endTime : moment().add(16, 'd').endOf('day')},
    ],

    RECENT_TRANSACTIONS : [
        {name : "Fergiawan", avatar : "/egi.jfif", username : "Egi", password : "********",  email : "egi11@gmail.com " , purpose : "Konsultasi Desain Grafis" , mentee : "Khoerul" , mentor : "Hasan Harahap" , durasi : "90 menit" ,  date : moment().endOf('day')},
        {name : "Berliana", avatar : "/beber.jpg", username : "Beber", password : "********", email : "beber@gmail.com" , purpose : "Konsultasi Desain Grafis" , mentee : "Adzkiya" , mentor : "Jessica Aulia" , durasi : "90 menit" , date : moment().add(-1, 'd').endOf('day')},
        {name : "Adzkiya", avatar : "/ziya.jfif", username : "Ziya", password : "********", email : "ziyaaa@gmail.com " , purpose : "Konsultasi Desain Grafis" , mentee : "Fergiawan" , mentor : "Sarif H" , durasi : "90 menit" , date : moment().add(-1, 'd').endOf('day')},
        {name : "Andrian", avatar : "https://reqres.in/img/faces/4-image.jpg",  username : "Shifa" , password : "********", email : "andrian@gmail.com " , purpose : "Konsultasi Desain Grafis" , mentee : "Andrian" , mentor : "Lauren" , durasi : "90 menit" , date : moment().add(-1, 'd').endOf('day')},
        {name : "Khoerul", avatar : "https://reqres.in/img/faces/5-image.jpg", username : "Anwar" , password : "********", email : "khoerul@gmail.com " , purpose : "Konsultasi Desain Grafis" ,mentee : "Rafie" , mentor : "Hasan" , durasi : "90 menit" , date : moment().add(-2, 'd').endOf('day')},
        {name : "Rafie", avatar : "/fiee.jfif", username : "Saidrafiee" , password : "********", email : "fiee@gmail.com" , purpose : "Konsultasi Desain Grafis" , mentee : "Berliana Cahya R" , mentor : "Sarif H" , durasi : "60 menit" ,date : moment().add(-2, 'd').endOf('day')},
        {name : "Sari", avatar : "/sari.jpg", username : "Sarwat" , password : "********", email : "sarwat@gmail.com" , purpose : "Konsultasi Desain Grafis" },
        {name : "Pupu", avatar : "/pupu.jfif", username : "Pulpukad" , password : "********", email : "maharani@gmail.com" , purpose : "Konsultasi Desain Grafis" },
        {name : "Mahbubi", avatar : "/bubi.jfif", username : "Bobiboy" , password : "********", email : "bobi2@gmail.com" , purpose : "Konsultasi Desain Grafis" },
        {name : "Yofi", avatar : "/yofi.jfif", username : "Yopiipi" , password : "********", email : "andnuno@gmail.com" , purpose : "Konsultasi Desain Grafis" },

    
    ]
});
