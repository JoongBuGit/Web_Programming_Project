

// quillditor_sample1 page를 참고해서 커스터 마이징을 한 코드이다.
// quill에서 editor의 데이터를 다룰 때는 delta라는 데이터구조를 사용한다.

'use client'

import QuillEditor from '@/components/QuillEditor'
import React, { useRef } from 'react'

export default function QuillEditor_test1() {

    const handleSubmit = (
       // jsonDelta
    ) => {
        // AJAX 요청
        fetch("http://localhost:8080/createPortfolio", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonDelta
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };



    return (
        <div>
            <QuillEditor onSubmit={handleSubmit} />
        </div>

    )
}
