import React from 'react';
import Default from './Default';

function Edit(props) {
    return (
        <Default>
            <div className="edit">
                <h1>Edit Book</h1>
                <form className="form" action={`/books/${props.book._id}?_method=PUT`} method="POST">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" className="form-control" defaultValue={`${props.book.title}`} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" className="form-control" defaultValue={`${props.book.author}`} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descriptionn</label>
                        <input type="text" name="description" className="form-control" defaultValue={`${props.book.description}`} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="completed">Completed</label>{' '}
                        <input type="checkbox" name="completed" defaultChecked={`${props.book.completed ? "on" : ''}`} />
                    </div><br />
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </Default>
    )
}

export default Edit;