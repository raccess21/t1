import profile_pic from "./assets/triangle.jpeg"

// components are standalone jsx functions that 
// translate(by returning) into a full html element

// food component
export function Food(){
    const food1 = "Parantha";
    const food2 = "Achaar";

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

// footer component
export function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} My Website Name</p>
        </footer>
    );
}

export function Header(){
    return(
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

// //////////////////////STYLING//////////////////////
// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

// 1. external styling using external css stylesheets -> id/class/tages etc
export function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profile_pic} alt="Profile Picture" />
            <h2 className="card-title">@Raccess21</h2>
            <p className="card-text">Now I've become destroyer of Worlds!</p>
        </div>
    );
}

// components are reusable
export function Lesson_1_Components(){
    return (
        <>
            <Header/>
            <div className="card-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Food/>
            <Footer/>
        </>
    );
}

// 2. MODULES
// e.g Button in separate Button folder with custom css in it's directory
// unique classnames are dynamically created to avoid naming conflicts
// component_name.module.css -> naming convention for module styling

// 3. INLINE


// gets exported by default 
export default Lesson_1_Components