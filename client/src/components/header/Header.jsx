export default function Header() {
    return (
        <header>
        <h1>Task Tracking Tool</h1>
        <nav>
            <div>
                <a href="#">Login</a>
                <a href="#">Register</a>
            </div>
            <div>
                <a href="#">Create task</a>
                <a href="#">Logout</a>
                <a href="/home">Home</a>
            </div>
        </nav>
    </header>
    );
}