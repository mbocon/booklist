import React from 'react';
import Default from './Default';

function New(props) {
    return (
        <Default>
            <div className="new">
                <h1>Add New Book</h1>
                <form className="form" action="/books" method="POST">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" className="form-control" autoFocus/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="completed">Completed</label>{' '}
                        <input type="checkbox" name="completed" />
                    </div><br />
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </Default>
    )
}

export default New;