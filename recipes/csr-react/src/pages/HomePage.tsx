import { useEffect } from 'react';

const HomePage = () => {
    useEffect(() => {
        console.log(`< home mount >`);
        return () => {
            console.log(`< home unmount >`);
        };
    }, []);
    return (
        <div>
            <h1>HomePage</h1>
        </div>
    );
};
export default HomePage;
