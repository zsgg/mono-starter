import { useEffect } from 'react';
import PlaygroundDebounce from '../component/PlaygroundDebounce';
import PlaygroundRecipeUtil from '../component/PlaygroundRecipeUtil';
import PlaygroundReduce from '../component/PlaygroundReduce';
import PlaygroundStyle from '../component/PlaygroundStyle';

const Playground = () => {
    useEffect(() => {
        console.log(`< home mount >`);
        return () => {
            console.log(`< home unmount >`);
        };
    }, []);
    return (
        <div>
            <PlaygroundReduce />
            <PlaygroundDebounce />
            <PlaygroundStyle />
            <PlaygroundRecipeUtil />
        </div>
    );
};
export default Playground;
