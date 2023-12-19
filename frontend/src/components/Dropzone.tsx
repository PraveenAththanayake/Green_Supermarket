// Dropzone.tsx

import { useCallback, forwardRef, useImperativeHandle, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoMdCloseCircle } from "react-icons/io";

interface CustomFile extends File {
  preview: string;
}

interface DropzoneProps {
  maxFiles: number;
  onFilesSelected: (files: File[]) => void;
}

const Dropzone = forwardRef((props: DropzoneProps, ref) => {
  const { maxFiles, onFilesSelected } = props;
  const [files, setFiles] = useState<CustomFile[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length) {
        const remainingFiles = maxFiles - files.length;
        const newFiles = acceptedFiles
          .slice(0, remainingFiles)
          .map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          );

        setFiles([...files, ...newFiles]);
        onFilesSelected([...files, ...newFiles]);
      }
    },
    [files, maxFiles, onFilesSelected]
  );

  useImperativeHandle(ref, () => ({
    clearFiles: () => setFiles([]),
  }));

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className="w-[455px] h-[162px] border border-dashed border-gray/20 flexCenter flex-col gap-y-3"
      >
        <img
          src="../../public/images/Upload to the Cloud.png"
          alt="Upload to the Cloud"
        />
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drop File here or click to upload</p>
        )}
      </div>
      <ul className="grid grid-cols-3 gap-2 mt-4">
        {files.map((file) => (
          <li
            key={file.name}
            className="relative inline-block w-[100px] h-[100px]"
          >
            <img
              src={file.preview}
              alt=""
              className="object-cover"
              onLoad={() => URL.revokeObjectURL(file.preview)}
            />
            <button
              type="button"
              className="absolute top-0 right-0 text-4xl rounded-full text-red outline outline-red -translate-y-2/4 translate-x-2/4"
              onClick={() =>
                setFiles((prevFiles) =>
                  prevFiles.filter((f) => f.name !== file.name)
                )
              }
            >
              <IoMdCloseCircle />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Dropzone;
