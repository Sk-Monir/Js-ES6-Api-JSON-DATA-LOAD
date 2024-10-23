const info = {
    name: 'Monir',
    gmail: 'monirekingdom@gmail.com',
    friend: {
        list:['rafi', 'mennon', 'opi*2', 'moni*2']},
    age: 20,
    isMarried : true
}


const infoJson = JSON.stringify(info);
console.log(infoJson);

const jsonToBoj = JSON.parse(infoJson)
console.log(jsonToBoj);