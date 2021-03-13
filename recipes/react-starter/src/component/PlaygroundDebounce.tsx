import { debounce } from 'lodash-es';
import { useCallback, useMemo, useRef, useState } from 'react';

// eslint-disable-next-line react/prop-types
const DebounceCase3 = ({ parentC }) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleClickCallback = useCallback(
        debounce((c) => {
            console.log(`< handle click > DebounceCase3`, { c });
        }, 5000),
        [],
    );
    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    handleClickCallback(parentC);
                }}
            >
                DebounceCase3 click
            </button>
        </div>
    );
};

// eslint-disable-next-line react/prop-types
const DebounceCase4 = ({ parentC }) => {
    const handleClick = (c) => {
        console.log(`< handle click > DebounceCase4`, { c });
    };
    const handleClickCallback = useRef(debounce(handleClick, 5000)).current;
    return (
        <div>
            <button
                type="button"
                onClick={() => {
                    handleClickCallback(parentC);
                }}
            >
                DebounceCase4 click
            </button>
        </div>
    );
};

/*
이건 좀 흥미로운 구현이군
*/
// eslint-disable-next-line react/prop-types
const DebounceCase5 = ({ parentC }) => {
    const handleClickCallback = useMemo(
        () =>
            debounce(() => {
                console.log(`< handle click > DebounceCase5`, { parentC });
            }, 5000),
        [parentC],
    );
    return (
        <div>
            <button type="button" onClick={handleClickCallback}>
                DebounceCase5 click
            </button>
        </div>
    );
};

const Debounce = () => {
    const [c, setC] = useState(0);
    return (
        <div>
            <h1>debounce</h1>
            <h5>parentC: {c}</h5>
            <button
                type="button"
                onClick={() => {
                    setC((prev) => prev + 1);
                }}
            >
                rerender trigger
            </button>
            <DebounceCase5 parentC={c} />
            <DebounceCase3 parentC={c} />
            <DebounceCase4 parentC={c} />
        </div>
    );
};

export default Debounce;
