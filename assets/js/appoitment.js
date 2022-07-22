let countries = document.querySelector("#servicesec");
let cities = document.querySelector("#doctors")

let data = {
    ps: ['Mithila Shrinivas Amin', 'Avi Sanghavi', 'Shivan Sanghavi'],
    ny: ['Vikas Bharti', 'Amar Kulkarni'],
    os: ['Jigar Patel', 'Mayur Rabhadiya', 'Mayur Dhabade', 'Sanchin Mahajan', 'Mohit Shetye', 'Ghaniuzzoa Asadi'],
    su: ['Abhijeet Sawant', 'Dhirendrakumar Patil', 'Akshay Pednekar', 'Sundram Pillai', 'Aditya Mandake', 'Khuzema S. Fatehi', 'Sundram Pillai'],
    ga: ['Vikas Pandey'],
    pt: ['Girish Date'],
    dt: ['Supriya Sawant', 'Omprakash Gajare', 'Varsha Wagh', 'Anita Mehta', 'Konica Nanda Bhadra', 'Komal Navalkha'],
    et: ['Archana S', 'Abhijjet Khond', 'Florida Sharin'],
    oy: ['Dilip Shah', 'Pratik Bhadra', 'Sanjana Shigwan'],
    og: ['Kiyv', 'Lutsk'],
    dm: ['Pallavi Rathi', 'Gautam Varma'],
    gt: ['Dimple Chudkar', 'Deepbhadra', 'Rima Dhawale', 'Neelima Bhanushali'],
    gm: ['Alka Deshpande', 'Hrashal Joshi', 'Nimesh Patel'],
    gy: ['Prasad Gole', 'Mahesh Doshi', 'Deodas Shah'],
    dy: ['Bhakti Adkar', 'Shilpa Bodele'],
    pr: ['Kunal Aher', 'Dinesh Maurya'],
    cy: ['Aditya Dhawale', 'Rakesh Trimale'],
    ng: ['Sneh Shashank', 'Pradeep Tiwari'],
}



countries.addEventListener('change', function () {
    let city = data[this.value]
    cities.length = 0;

    addOptions(cities, city)
})

function addOptions(select, arr) {
    for (let i = 0; i < arr.length; i++) {
        select.add(new Option(arr[i]))
    }
}
