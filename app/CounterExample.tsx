import { useState } from 'react';

export const CounterExample = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<p>Count: {count}</p>
		</div>
	);
};
