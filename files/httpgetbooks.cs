[HttpPost]
public ActionResult<Book> AddBook(Book book)
{
    book.Id = BookStore.AddBook(book);
    return Created("urihardCodee", book);
    //return CreatedAtAction(nameof(GetBook) ,new {book.Id}, book);
}