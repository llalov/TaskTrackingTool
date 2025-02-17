export default function TaskEdit() {
    return(
        <div className="task-edit">
            <h2>Edit Task</h2>
            <form>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required/>

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description"></textarea>

                <label htmlFor="assignee">Assignee:</label>
                <input type="text" id="assignee" name="assignee" required/>

                <label htmlFor="remaining-estimate">Remaining Estimate (h):</label>
                <input type="number" id="remaining-estimate" name="remaining-estimate" required/>

                <label htmlFor="story-points">Story Points:</label>
                <input type="number" id="story-points" name="story-points" required/>

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}