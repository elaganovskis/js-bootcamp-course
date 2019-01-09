const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function(note){
        const newEl = document.createElement('p');
        newEl.textContent = note.title;
        document.querySelector('#notes').appendChild(newEl);
    })
}

const button = document.querySelectorAll('button');
const input = document.getElementById('input');
const newParagraph = document.createElement('p');
const body = document.querySelector('body');
const deleteButton = document.getElementById('delete-button');

button[0].addEventListener('click', function(e){
    console.log('hello world')
})

deleteButton.addEventListener("click", function() {
  console.log("delte all buttons");
});

input.addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})





