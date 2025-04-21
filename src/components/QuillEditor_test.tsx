'use client';

import Quill from 'quill';
import { forwardRef, useEffect, useLayoutEffect, useRef, ForwardedRef } from 'react';
import 'quill/dist/quill.snow.css';
import Delta from 'quill-delta';

// Props 타입 정의
interface EditorProps {
  readOnly?: boolean;
  defaultValue?: Delta;
  onTextChange?: (...args: any[]) => void;
  onSelectionChange?: (...args: any[]) => void;
}

// Editor 컴포넌트
const Editor = forwardRef<Quill, EditorProps>(
  (
    { readOnly = false, defaultValue, onTextChange, onSelectionChange },
    ref: ForwardedRef<Quill>,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const defaultValueRef = useRef<Delta | undefined>(defaultValue);
    const onTextChangeRef = useRef<((...args: any[]) => void) | undefined>(onTextChange);
    const onSelectionChangeRef = useRef<((...args: any[]) => void) | undefined>(onSelectionChange);

    // 콜백 업데이트
    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    }, [onTextChange, onSelectionChange]);

    // readOnly 상태 업데이트
    useEffect(() => {
      if (ref && typeof ref !== 'function' && ref.current) {
        ref.current.enable(!readOnly);
      }
    }, [ref, readOnly]);

    // 툴바 설정
    const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      ['link', 'image', 'video', 'formula'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],
    ];

    // Quill 초기화
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const editorContainer = container.appendChild(
        container.ownerDocument.createElement('div'),
      );
      const quill = new Quill(editorContainer, {
        theme: 'snow',
        modules: {
          toolbar: toolbarOptions,
        },
      });

      // ref 설정
      if (typeof ref === 'function') {
        ref(quill);
      } else if (ref) {
        ref.current = quill;
      }

      if (defaultValueRef.current) {
        quill.setContents(defaultValueRef.current);
      }

      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        onTextChangeRef.current?.(...args);
      });

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args);
      });

      return () => {
        // cleanup
        if (typeof ref === 'function') {
          ref(null);
        } else if (ref) {
          ref.current = null;
        }
        container.innerHTML = '';
      };
    }, [ref, toolbarOptions]);

    return <div ref={containerRef} />;
  },
);

Editor.displayName = 'Editor';

export default Editor;
