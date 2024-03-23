import { AddNotionPageToDatabase } from './dataAccess';
import { useState } from 'react';

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
            
            console.log(title, parsedDate);
            await AddNotionPageToDatabase(title, date);

            setTitle('');
            setDate('');
            setErrorMessage('');

        } catch (error) {
            console.error('Error adding card:', error);
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

export function ModCard(name, difficulty) {
    if (typeof name !== 'string' || typeof difficulty !== 'number' || difficulty < 1 || difficulty > 4) {
        throw new Error('Invalid arguments');
    }

    // 1 = again, 2 = hard, 3 = good, 4 = easy
    return {
        name,
        difficulty,
    };
}


export default AddCard;
