import { useEffect, useState } from 'react';
import './widget.css';

function Widget({ apiUrl }) {
    const [count, setCount] = useState(0);
    const [isEven, setIsEven] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchIsEven() {
            const response = await fetch(`${apiUrl}/isEven`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ num: count }),
                signal: abortController.signal,
            });

            if (response.ok) {
                const data = await response.json();
                setIsEven(data.isEven);
            }
        }

        fetchIsEven();

        return () => {
            abortController.abort();
        };
    }, [count]);

    return (
        <div className="wrapper">
            <div className="widget">
                <h1>Hello Widget</h1>
                <button onClick={() => setCount(count + 1)} className="btn">
                    Count: {count}
                </button>
                <h5>Count is {isEven ? 'even' : 'odd'}</h5>
            </div>
        </div>
    );
}

export default Widget;
