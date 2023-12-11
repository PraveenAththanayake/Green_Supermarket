import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoMdCloseCircle } from "react-icons/io";

interface CustomFile extends File {
  preview: string;
}

interface DropzoneProps {
  maxFiles: number;
}

const Dropzone: React.FC<DropzoneProps> = ({ maxFiles }) => {
  const [files, setFiles] = useState<CustomFile[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length) {
        setFiles((prevFiles) => {
          // Calculate the number of additional files that can be added
          const remainingFiles = maxFiles - prevFiles.length;
          const newFiles = acceptedFiles
            .slice(0, remainingFiles)
            .map((file) =>
              Object.assign(file, { preview: URL.createObjectURL(file) })
            );

          return [...prevFiles, ...newFiles];
        });
      }
    },
    [maxFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = (name: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
  };

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
              onClick={() => removeFile(file.name)}
            >
              <IoMdCloseCircle />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropzone;
