// at()
let str1 = "Test String"
console.log(str1.at(1));

// charat()
let str2 = "Test String"
console.log(str2.charAt(1));

// length
let str3 = "Test String"
console.log(str3.length);

// charcodeat()
let str4 = "Test String"
console.log(str4.charCodeAt(4))

// codePointat()
let str5 = "Test String"
console.log(str5.codePointAt(14))

// concat()
let str6 = "Test"
console.log(str6.concat('String'))

// includes()
let str7 = "Test String"
console.log(str7.includes("Str"))
console.log(str7.includes("Practise"))

// startswith ; endswith
let str8 = "This is a Test String"
console.log(str8.startsWith('Test')) // false
console.log(str8.startsWith('This')) // true
console.log(str8.endsWith('String')) // true


// indexof()
let str9 = "This is a Test String"
console.log(str9.indexOf('Test', 4)) // L ------> R

// lastindexof()
let str10 =  "This is a Test String, test string is this"
console.log(str10.lastIndexOf('Test',24)) // L <------ R

//tolowerCase()
let str11 = "This is a Test String"
console.log(str11.toLowerCase())

//toUpperCase()
let str12 = "This is a Test String"
console.log(str12.toUpperCase())

// trim, trimEnd, trimStart
let f = "    anant   "
let l = 'jain'
console.log(f.trimEnd().concat(l).trimStart())

// replace()
let str13 = 'This is a Test String'
let result = str13.replace('Test','TEST')
console.log(result)

// replaceAll()
let str14 = 'This is a Test String, Test String is this'
let result1 = str14.replaceAll('Test','TEST')
console.log(result1)

// substring()
let str15 = 'This is a test string, and we are pracisting strings in javascript language'
let result2 = str15.substring(5,20)
console.log(result2)



