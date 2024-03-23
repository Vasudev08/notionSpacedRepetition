import { addNotionPageToDatabase } from './dataAccess';

const AddCard = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!title) {
            setErrorMessage('Title is required');
            return;
        }

        try {
            const dateParts = date.split('-'); // len = 2 or 3
            const year = dateParts.length === 2 ? new Date().getFullYear() : Number(dateParts[0]);
            const month = Number(dateParts[dateParts.length - 2]) - 1;
            const day = Number(dateParts[dateParts.length - 1]);
            const parsedDate = new Date(year, month, day);
            if (isNaN(parsedDate.getTime())) {
                setErrorMessage('Invalid date');
                return;
            }

            await addNotionPageToDatabase(title, date);

            setTitle('');
            setDate('');
            setErrorMessage('');
            
        } catch (error) {
            setErrorMessage('Error adding card');
        }
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
            {errorMessage && <div>{errorMessage}</div>}
            <button type="submit">Add Card</button>
        </form>
    );
};

export default AddCard;
