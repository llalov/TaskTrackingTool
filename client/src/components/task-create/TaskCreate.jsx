export default function TaskCreate() {
    return(
        <div>
            <h2>Create Task</h2>
            <form>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required/>

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description"></textarea>

                <label htmlFor="assignee">Assignee:</label>
                <input type="text" id="assignee" name="assignee" required/>

                <label htmlFor="original-estimate">Original Estimate (h):</label>
                <input type="number" id="original-estimate" name="original-estimate" required/>

                <label htmlFor="story-points">Story Points:</label>
                <input type="number" id="story-points" name="story-points" required/>

                <button type="submit">Create Task</button>
            </form>
        </div>
    )
}