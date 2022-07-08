import React from 'react';
import Default from './Default';

function Index(props) {
    // console.log(props, 'are the props in the index');
    return (
        <Default>
            <div className="index">
                <h1>My Book List</h1>
                {props.books.map(book => {
                    return (
                        <div key={book._id} className='bookList'>
                            <h1>{book.title}</h1>
                            <a href={`/books/${book._id}`}>See details</a>
                        </div>
                    )
                })}
            </div>
        </Default>
    )
}

export default Index;