import React, { useState } from "react";
import Button from "../components/ui/Button";
type ReviewData = {
  title: string;
  contents: string;
};

const NewBookReview = () => {
  const [reviewData, setReviewData] = useState({ title: "", contents: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReviewData((prev) => ({ ...prev, [name]: value }));
    console.log(name);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(reviewData);
  };

  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">독후감 작성 페이지</h2>

      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
        {/* <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        /> */}
        <input
          type="text"
          name="title"
          value={reviewData.title ?? ""}
          placeholder="책이름"
          required
          onChange={handleChange}
        />
        <textarea
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
