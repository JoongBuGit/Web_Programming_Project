// import React from 'react'

// export default function page() {

//     const items = ["아이템1", "아이템2", "아이템3"]


//     return (
//         <div>
//             <h1>리스트 렌더링하기</h1>

//             <div>{items.length}</div>
            
//             <ul>
//                 {
//                     items.map(item => (
//                         <li key={item}>{item}</li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }


import React from 'react';

const App = () => {
    const jsonArray = [
        { name: "홍길동", age: 30 },
        { name: "김철수", age: 25 },
        { name: "이영희", age: 28 }
    ];

    return (
        <div>
            {jsonArray.map((person, index) => (
                <div key={index}>
                    이름: {person.name}, 나이: {person.age}
                </div>
            ))}
        </div>
    );
};

export default App;