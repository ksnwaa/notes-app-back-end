const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, updateNoteById, deleteNoteByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
 },
 {
  method: 'GET',
  path: '/notes/{id}',
  handler: getNoteByIdHandler,
},
{
  method: 'PUT',
  path: '/notes/{id}',
  handler: updateNoteById,
},
{
  method: 'DELETE',
  path: '/notes/{id}',
  handler: deleteNoteByIdHandler,
},
];
 
module.exports = []
  
