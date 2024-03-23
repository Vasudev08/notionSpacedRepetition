const AddCard = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [link, setLink] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title) {
            setErrorMessage('Title is required');
            return;
        }

        try {
            const parsedDate = new Date(date);
            if (isNaN(parsedDate.getTime())) {
                setErrorMessage('Invalid date');
                return;
            }
        } catch (error) {
            setErrorMessage('Invalid date');
            return;
        }

        if (!link) {
            setErrorMessage('Link is required');
            return;
        }

        // TODO: add card to data source
        setTitle('');
        setDate('');
        setLink('');
        setErrorMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            </label>
            <label>
                Date:
                <input type="text" value={date} onChange={(event) => setDate(event.target.value)} />
            </label>
            <label>
                Link:
                <input type="text" value={link} onChange={(event) => setLink(event.target.value)} />
            </label>
            {errorMessage && <div>{errorMessage}</div>}
            <button type="submit">Add Card</button>
        </form>
    );
};

export default AddCard;

