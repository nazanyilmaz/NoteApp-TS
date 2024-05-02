import NoteForm from "./NoteForm";
import { NoteData, Tag } from "../../types";

export type CreateNoteProps = {
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
  onSubmit: (data: NoteData) => void;
} & Partial<NoteData>;
/*
  partial sayesinde şunu yapmış olduk
  farklı bir typeın bütün değerlerini bu 
  "createnoteprops" typena aktardık.Aynı zamanda
  hepsi ? ile tanımlanmış gibi bazı durumlarda undefined olabilir.
*/

const CreateNote = ({
  createTag,
  availableTags,
  onSubmit,
}: CreateNoteProps) => {
  return (
    <div className="container py-5">
      <h1>Create a New Note</h1>
      <NoteForm
        createTag={createTag}
        onSubmit={onSubmit}
        availableTags={availableTags}
      />
    </div>
  );
};

export default CreateNote;
