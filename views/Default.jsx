import React from 'react';

function Default(props) {
    console.log(props, 'are the props in the default view');
    return (
        <html>
            <head>
                <title>Booklist App</title>
                <link rel="stylesheet" href="/css/style.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
            </head>
            <body>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/books">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/books/new">Add Book</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main id="app">
                    {props.children}
                </main>
                <footer>
                    All Rights Reserved &copy; {new Date().getFullYear()}
                </footer>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
            </body>
        </html>
    )
}

export default Default;