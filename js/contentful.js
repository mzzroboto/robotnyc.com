
var client = contentful.createClient({
  space: 'sgo78rsjtx10',
  accessToken: 'nQ2cSFY0WimXrAPCoWTcNve_QsQ8HyksphVSRPMcFj4'
});


//IMAGES//
//Function to take image element by ID and set the src to contentful asset ID

function imageSetSourceFromAsset(htmlID, assetID) {
  // create variable that is a handle to the html ID element
  var imageElm = document.getElementById(htmlID);

  //Get header image from contentful
  client.getAsset(assetID)
  .then(function (asset) {
    if (asset.fields.file.url) {
      console.log('https:' + asset.fields.file.url)
      imageElm.src = 'https:' + asset.fields.file.url; // <img src=''>
    }
  })
  .catch(console.error)

}
//Set image header
imageSetSourceFromAsset('imageHeader','3UUXMit9S3rNHArXhVd4kl');

//Set image footer
imageSetSourceFromAsset('imageFooter','23gSJXQevR0HyatcMqbE2W');

//Get Services
client.getEntry('67Ccw8vvJub28j1o6ZfXkm')
.then(function (entry) {
  if (entry.fields.body) {
    console.log(entry);
document.getElementById("Service1Title").insertAdjacentHTML('afterbegin',entry.fields.name);
document.getElementById("Service1Body").insertAdjacentHTML('afterbegin',entry.fields.body);

  }
})
.catch(console.error)


client.getEntry('1zicvYgMf6LAWtbsUoi5rD')
.then(function (entry) {
  if (entry.fields.body) {
    console.log(entry);
    document.getElementById("Service2Title").insertAdjacentHTML('afterbegin',entry.fields.name);
    document.getElementById("Service2Body").insertAdjacentHTML('afterbegin',entry.fields.body);

  }
})
.catch(console.error)


client.getEntry('31MGMZ9cOEyq1PQkbyXdb')
.then(function (entry) {
  if (entry.fields.body) {
    console.log(entry);
    document.getElementById("Service3Title").insertAdjacentHTML('afterbegin',entry.fields.name);
    document.getElementById("Service3Body").insertAdjacentHTML('afterbegin',entry.fields.body);

  }
})
.catch(console.error)


client.getEntry('73qFxyg0eEJemMBjDdR4je')
.then(function (entry) {
  if (entry.fields.body) {
    console.log(entry);
    document.getElementById("Service4Title").insertAdjacentHTML('afterbegin',entry.fields.name);
    document.getElementById("Service4Body").insertAdjacentHTML('afterbegin',entry.fields.body);
  }
})
.catch(console.error)

//Get About Me Left
client.getEntry('1xT2SUdopy1JCedFJ563S1')
.then(function (entry) {
  if (entry.fields.body) {
    console.log(entry);

    document.getElementById("aboutMeLeft").insertAdjacentHTML('afterbegin',entry.fields.body);    
  }
})
//Get About Me Right
client.getEntry('5AJGB8Ae8LCARFpHNuOVBl')
.then(function (entry) {
  if (entry.fields.body) {
    console.log(entry);

    document.getElementById("aboutMeRight").insertAdjacentHTML('afterbegin',entry.fields.body);
    
  }
})
.catch(console.error)




