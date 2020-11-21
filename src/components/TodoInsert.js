import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

//상단에 insert 만들기

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    // 재사용하려고 callback 함수 사용
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); // value값 초기화

            // submit 이벤트는 브라우저에서 새로고침을 발생시킨다
            // 이를 방지하기 위해 이 함수를 호출한다.

            e.prevenDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="할 일을 입력하세요."
            value={value}
            onChange={onChange}            
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    )
}


export default TodoInsert;