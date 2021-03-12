import './index.scss';
import GridEmotion from './Emotion';
import GridInline from './GridInline';
import GridScss from './GridScss';

const Index = () => (
    <div>
        <h1>PlaygroundStyle</h1>
        <h2>Emotion</h2>
        <GridEmotion />
        <hr />
        <h2>GridInline</h2>
        <GridInline />
        <hr />
        <h2>GridScss</h2>
        <GridScss />
    </div>
);
export default Index;
