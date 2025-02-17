export default function Home() {
    return(
        <div class="home-container">
            <h1>Task Tracker</h1>
                <div id="task-list">
                    <p>You need to <a href="/login">login</a> or <a href="/register">register</a> to view tasks.</p>
                </div>
        </div>
    );
}