import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import { doc, setDoc } from 'firebase/firestore';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { db } from '../db/firebase';
import { convertToRaw } from 'draft-js';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
);

const TextEditor = () => {
  const { data: session } = useSession();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();
  const { id } = router.query;
  const [snapshot] = useDocumentOnce(
    doc(db, 'userDocs', session.user.email, 'docs', id)
  );

  useEffect(() => {
    if (snapshot?.data().editorState) {
      setEditorState(
        EditorState.createWithContent(convertToRaw(snapshot?.data()?.text))
      );
    }
    // eslint-disable-next-line
  }, []);

  const onEditorStateChange = async (editorState) => {
    setEditorState(editorState);
    await setDoc(
      doc(db, 'userDocs', session.user.email, 'docs', id),
      {
        editorState: convertToRaw(editorState.getCurrentContent()),
      },
      {
        merge: true,
      }
    );
  };

  return (
    <div className='bg-[#f8f9fa] min-h-screen pb-16'>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName='flex sticky top-0 z-50 !justify-center mx-auto'
        editorClassName='mt-6 p-10 bg-white bg-white shadow-lg max-w-5xl mx-auto mb-12 border'
      ></Editor>
    </div>
  );
};

export default TextEditor;
