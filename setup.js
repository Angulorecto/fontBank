document.addEventListener("DOMContentLoaded", function() {
  fetch('https://api.github.com/repos/AnguloRecto/fontBank/contents/fonts')
  .then(response => response.json())
  .then(files => {
    files.forEach(file => {
      fetch('https://api.github.com/repos/AnguloRecto/fontBank/contents/' + file.name + '/')
      .then(response => response.json())
      .then(subfiles => {
        subfiles.forEach(subfile => {
          console.log(subfile.name);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
