import { useEffect } from 'react';
import PlaygroundDebounce from '../component/PlaygroundDebounce';
import PlaygroundRecipeUi from '../component/PlaygroundRecipeUi';
import PlaygroundRecipeUtil from '../component/PlaygroundRecipeUtil';
import PlaygroundReduce from '../component/PlaygroundReduce';
import PlaygroundStyle from '../component/PlaygroundStyle';
import PlaygroundRecipeUiCssInJs from '../component/PlaygroundRecipeUiCssInJs';

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
            <PlaygroundRecipeUi />
            <PlaygroundRecipeUiCssInJs />
        </div>
    );
};
export default Playground;
