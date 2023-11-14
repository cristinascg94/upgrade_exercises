const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const par = ages.filter(function(age) {
    return age % 2 === 0;
});

const par2 = ages.filter(age => age % 2 === 0);
