// Your code here
/** A book object representation.
 * @typedef {Object} Book
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {string} genre - The genre of the book.
 */
function filterByGenre(genre,books){
    return (
        books.filter(book => book.genre === genre)

     )
}