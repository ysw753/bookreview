import React, { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";

type ReviewData = {
  title: string;
  contents: string;
};

const NewBookReview = () => {
  const [reviewData, setReviewData] = useState<ReviewData>({
    title: "",
    contents: "",
  });

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "file") {
      const files = (e.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        setFile(files[0]);
      }
      return;
    }

    setReviewData((prev) => ({ ...prev, [name]: value }));
    console.log(name);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    uploadImage(file).then((url) => console.log(url));
    // 검색데이터를 받아와서 사진을 cloudinary에 업로드하고 url을 획득
    // firebase에 새로운 리뷰를 추가

    console.log(reviewData);
  };

  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">독후감 작성 페이지</h2>

      {file && (
        <img
          className="w-96 my-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}
      <form className="flex flex-col px-12 " onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />

        <input
          className="h-10"
          type="text"
          name="title"
          value={reviewData.title ?? ""}
          placeholder="책이름"
          required
          onChange={handleChange}
        />

        <textarea
          className=""
          name="contents"
          value={reviewData.contents ?? ""}
          placeholder="내용을 입력해주세요"
          onChange={handleChange}
        ></textarea>
        <Button text={"업로드"} />
      </form>
    </section>
  );
};

export default NewBookReview;
