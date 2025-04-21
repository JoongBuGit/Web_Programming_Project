'use client';

import { useEffect, useRef, useState } from 'react';
import 'quill/dist/quill.snow.css';
import Quill from 'quill';
import { Delta } from 'quill-delta';
import Button from './Button/Button';
import Link from 'next/link';

interface QuillEditorProps {
  onSubmit: (data: { blog_description: string }) => void;
  state: 'readOnly' | 'editor';
  delta: Delta;
}

const QuillEditor = ({ onSubmit, state, delta }: QuillEditorProps) => {
  const quillRef = useRef<HTMLDivElement>(null);
  const [quill, setQuill] = useState<Quill | null>(null);

  // 툴바 설정
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video'],
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ['clean'],
  ];

  // 초기 Quill 인스턴스 설정
  useEffect(() => {
    if (!quillRef.current) return;

    const quillInstance = new Quill(quillRef.current, {
      theme: 'snow',
      modules: {
        toolbar: state === 'readOnly' ? '' : toolbarOptions,
      },
    });

    if (state === 'readOnly') {
      quillInstance.setContents(delta);
      quillInstance.enable(false);
    }

    setQuill(quillInstance);

    // Cleanup
    return () => {
      quillInstance.disable();
    };
  }, [state, delta, toolbarOptions]);

  // Post 버튼 클릭 시 데이터 전송
  const handleSubmit = () => {
    if (quill) {
      const delta = quill.getContents();
      const jsonDelta = JSON.stringify(delta);
      const jsonData = { blog_description: jsonDelta };

      onSubmit(jsonData);
      alert('전송성공');
      console.log('스트링 에디터 데이터:', jsonData.blog_description);
    }
  };

  return (
    <div>
      <div ref={quillRef} style={{ height: '600px' }} />
      {state === 'editor' && (
        <Link href="/project_list">
          <Button onClick={handleSubmit} idname="quill_button">
            Post
          </Button>
        </Link>
      )}
    </div>
  );
};

export default QuillEditor;
