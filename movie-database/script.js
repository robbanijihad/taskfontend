/**
 * belajar componen react js 
 */

function Hello({name,major}){
    return(
        <div className="hello">
            <h1>
                hallo react js
            </h1>
            <p>
                Nama saya {name}, saya seorang mahasiswa enep
            </p>
            <p>
                jurusan saya {major}, semester 4
            </p>
        </div>
    );
}


/**
 * membuat komponen header 
 */
 function Header(){
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </nav>
    )
}

/**
 * /**
 * Membuat komponen main 
 */
function Main(){
    return(
        <main>
            <Hello name="Muhammad" major="dkv"/>
            <Hello name="Jihad" major="Informatika"/>
            <Hello name="robbani" major="Informasi"/>
        </main>
    )
}

/**
 * Membuat komponen Footer
 */
 function Footer(){
    return(
        <footer>
            <p>Copyright @jihadrobbani</p>
            <small>Created by React.js</small>
        </footer>
    )
}

function App(){
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

/**
 * Render Element
 */

// ReactDOM.render(elementHeading, document.getElementById("root"));

/**
 * Render Component Hello ke HTML
 */
ReactDOM.render(<App />, document.getElementById("root"));