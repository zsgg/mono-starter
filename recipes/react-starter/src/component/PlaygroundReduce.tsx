import { useReducer, useState } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'a':
            return { ...state, initVal: state.initVal + 1 };
        case 'b':
            // eslint-disable-next-line no-param-reassign
            state.refAdd = 10;
            return state;
        case 'use action prop pri':
            return { initVal: state.initVal + action.parentPri };
        default:
            throw new Error();
    }
};

// eslint-disable-next-line react/prop-types
const A = ({ pri, obj }) => {
    /*
    내부에서 reduce 를 구현하면 최적화 로직을 무효화시킨다.
    내가 볼 수 있는건 로그가 처음에 두번 찍혔음
    */
    const inlineReducer = (state, action) => {
        switch (action.type) {
            case 'a':
                return { ...state, initVal: state.initVal + 1 };
            case 'b':
                // 객체가 동일하기 때문에 랜더링을 다시하지 않음. 버그발생
                // eslint-disable-next-line no-param-reassign
                state.refAdd = 10;
                return state;
            case 'use parent pri':
                return { ...state, initVal: state.initVal + pri };
            case 'use parent obj':
                // eslint-disable-next-line react/prop-types
                return { ...state, initVal: state.initVal + obj.initVal };
            default:
                throw new Error();
        }
    };
    const [first, dispatch] = useReducer(reducer, { initVal: pri }, (prev) => {
        return {
            ...prev,
            lazyInit: 1,
        };
    });
    return (
        <div>
            <div>{JSON.stringify(first)}</div>
            <div>
                {/* eslint-disable-next-line react/button-has-type */}
                <button onClick={() => dispatch({ type: 'a' })}>a</button>
                {/* eslint-disable-next-line react/button-has-type */}
                <button onClick={() => dispatch({ type: 'b' })}>b</button>
                {/* eslint-disable-next-line react/button-has-type */}
                <button onClick={() => dispatch({ type: 'use parent pri' })}>
                    use parent pri
                </button>
                {/* eslint-disable-next-line react/button-has-type */}
                <button onClick={() => dispatch({ type: 'use parent obj' })}>
                    use parent obj
                </button>
                {/* eslint-disable-next-line react/button-has-type */}
                <button
                    onClick={() =>
                        dispatch({
                            parentPri: pri,
                            type: 'use action prop pri',
                        })
                    }
                >
                    use action prop pri
                </button>
            </div>
        </div>
    );
};

const ReducerHookSample = () => {
    const [parentPrimitive, setParentPrimitive] = useState(10);
    const [parentObject, setParentObject] = useState({ initVal: 100 });
    return (
        <div>
            <h1>reduce</h1>
            <div>
                <div>
                    {/* eslint-disable-next-line react/button-has-type */}
                    <button
                        onClick={() => setParentPrimitive((prev) => prev + 10)}
                    >
                        parentPrimitive plus
                    </button>
                    {/* eslint-disable-next-line react/button-has-type */}
                    <button
                        onClick={() =>
                            setParentObject({
                                initVal: parentObject.initVal + 100,
                            })
                        }
                    >
                        parentObject plus
                    </button>
                </div>
            </div>
            <A obj={parentObject} pri={parentPrimitive} />
        </div>
    );
};

export default ReducerHookSample;
