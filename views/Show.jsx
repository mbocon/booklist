import React from 'react';
import Default from './Default';

function Show(props) {
    return (
        <Default>
            <div className="show">
            <h1>{props.book.title}</h1>
            <p>Author: {props.book.author}</p>
            <p>Decription: {props.book.description}</p>
            <p>{props.book.completed ? 'Completed' : 'Not Completed'}</p>
                <div className="showOptions">
                    <a href={`/books/${props.book._id}/edit`} className="btn btn-primary" >Edit</a>
                    <form action={`/books/${props.book._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" className="btn btn-danger" />
                    </form>
                </div>
            </div>
        </Default>
    )
}

export default Show;